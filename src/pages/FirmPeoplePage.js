import React, { useEffect, useState, useMemo } from "react";
import { Container, Row, Col, Card, Form, Button, Modal, ListGroup, Badge } from "react-bootstrap";
import { getCompanyData } from "../API/storageService";

function PersonCard({ person, assignedTruck, onDetails }) {
    const truckLabel = assignedTruck ? `${assignedTruck.marka} ${assignedTruck.model}` : "Brak przypisanej ciężarówki";

    return (
        <Card className="mb-4 shadow-sm h-100">
            <Card.Body>
                <Card.Title>{person.imie} {person.nazwisko}</Card.Title>
                <Card.Text>{person.stanowisko}</Card.Text>
                <Card.Text className="text-muted small">{truckLabel}</Card.Text>
                <div className="d-flex justify-content-end mt-3">
                    <Button variant="outline-primary" size="sm" onClick={() => onDetails(person)}>
                        Szczegóły
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

function FirmPeoplePage() {
    const [companyData, setCompanyData] = useState({ pracownicy: [], kierownictwo: [], kandydaci: [], ciezarowki: [] });
    const [filters, setFilters] = useState({ imie: "", nazwisko: "", stanowisko: "", marka: "" });
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const data = getCompanyData();
        if (data) {
            setCompanyData({ ...data, ciezarowki: data.ciezarowki || [] });
        }
    }, []);

    const allPeople = useMemo(() => [
        ...companyData.kierownictwo,
        ...companyData.pracownicy,
        ...companyData.kandydaci,
    ], [companyData]);

    const findAssignedTruck = (person) => {
        const fullName = `${person.imie} ${person.nazwisko}`;
        return companyData.ciezarowki.find(t => t.przypisanyPracownik === fullName) || null;
    };

    const filteredPeople = useMemo(() => {
        const { imie, nazwisko, stanowisko, marka } = filters;

        return allPeople.filter(p => {
            const truck = findAssignedTruck(p);
            const truckMatches = !marka || (truck && truck.marka.toLowerCase().includes(marka.toLowerCase()));
            const imieMatches = !imie || (p.imie && p.imie.toLowerCase().includes(imie.toLowerCase()));
            const nazwiskoMatches = !nazwisko || (p.nazwisko && p.nazwisko.toLowerCase().includes(nazwisko.toLowerCase()));
            const stanowiskoMatches = !stanowisko || (p.stanowisko && p.stanowisko.toLowerCase().includes(stanowisko.toLowerCase()));

            return truckMatches && imieMatches && nazwiskoMatches && stanowiskoMatches;
        });
    }, [allPeople, companyData.ciezarowki, filters]);

    const handleResetFilters = () => setFilters({ imie: "", nazwisko: "", stanowisko: "", marka: "" });
    const handleDetailsOpen = (person) => { setSelectedPerson(person); setShowModal(true); };
    const handleDetailsClose = () => { setSelectedPerson(null); setShowModal(false); };

    const assignedTrucksForSelected = selectedPerson
        ? companyData.ciezarowki.filter(t => t.przypisanyPracownik === `${selectedPerson.imie} ${selectedPerson.nazwisko}`)
        : [];

    const hasFilterValues = Object.values(filters).some(f => f.trim() !== "");

    return (
        <Container className="mt-5">
            <h1 className="text-center mb-2">Osoby w Firmie</h1>
            <p className="lead text-center mb-4">
                Poznaj nasz zespół i dowiedz się więcej o ludziach, którzy tworzą naszą firmę transportową.
            </p>

            <Card className="mb-4">
                <Card.Body>
                    <Row className="g-3 align-items-end">
                        <Col xs={6} md={3}>
                            <Form.Group>
                                <Form.Label>Imię</Form.Label>
                                <Form.Control
                                    value={filters.imie}
                                    onChange={e => setFilters(f => ({ ...f, imie: e.target.value }))}
                                    placeholder="Imię"
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={6} md={3}>
                            <Form.Group>
                                <Form.Label>Nazwisko</Form.Label>
                                <Form.Control
                                    value={filters.nazwisko}
                                    onChange={e => setFilters(f => ({ ...f, nazwisko: e.target.value }))}
                                    placeholder="Nazwisko"
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={6} md={3}>
                            <Form.Group>
                                <Form.Label>Stanowisko</Form.Label>
                                <Form.Control
                                    value={filters.stanowisko}
                                    onChange={e => setFilters(f => ({ ...f, stanowisko: e.target.value }))}
                                    placeholder="Stanowisko"
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={6} md={3}>
                            <Form.Group>
                                <Form.Label>Marka ciężarówki</Form.Label>
                                <Form.Control
                                    value={filters.marka}
                                    onChange={e => setFilters(f => ({ ...f, marka: e.target.value }))}
                                    placeholder="Marka"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col className="d-flex justify-content-end">
                            <Button variant="secondary" size="sm" onClick={handleResetFilters} className="me-2">Wyczyść</Button>
                            <Button variant="dark" size="sm">Szukaj</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            <Row className="mb-3">
                <Col xs={12}>
                    <div className="text-center text-muted">
                        {filteredPeople.length} {filteredPeople.length === 1 ? "osoba" : "osób"} pasuje do filtrów
                    </div>
                </Col>
            </Row>

            <Row className="g-4"> {/* g-4 daje większe odstępy między kartami w pionie i poziomie */}
                {filteredPeople.length === 0 && (
                    <Col xs={12}>
                        <div className={`alert text-center ${hasFilterValues ? 'alert-warning' : 'alert-info'}`}>
                            {hasFilterValues ? "Brak wyników dla wprowadzonych filtrów" : "Brak rekordów w bazie danych"}
                        </div>
                    </Col>
                )}

                {filteredPeople.map((p, idx) => (
                    <Col key={idx} xs={12} sm={6} md={4}>
                        <PersonCard
                            person={p}
                            assignedTruck={findAssignedTruck(p)}
                            onDetails={handleDetailsOpen}
                        />
                    </Col>
                ))}
            </Row>

            <Modal show={showModal} onHide={handleDetailsClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Szczegóły osoby</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedPerson && (
                        <>
                            <h4>{selectedPerson.imie} {selectedPerson.nazwisko} <Badge bg="secondary">{selectedPerson.stanowisko}</Badge></h4>
                            <ListGroup variant="flush" className="mt-3">
                                <ListGroup.Item><strong>Email:</strong> {selectedPerson.email}</ListGroup.Item>
                                <ListGroup.Item><strong>Telefon:</strong> {selectedPerson.telefon}</ListGroup.Item>
                                <ListGroup.Item><strong>Stanowisko:</strong> {selectedPerson.stanowisko}</ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>Przypisane ciężarówki:</strong>
                                    <ListGroup className="mt-2">
                                        {assignedTrucksForSelected.length > 0 ? (
                                            assignedTrucksForSelected.map((t, i) => (
                                                <ListGroup.Item key={i}>
                                                    <div><strong>{t.marka} {t.model}</strong></div>
                                                    <div>Rok: {t.rokProdukcji} · Kilometrowka: {t.kilometrowka}</div>
                                                    <div>Moc: {t.mocSilnika} · Pojemność paliwa: {t.pojemnoscPaliwa}</div>
                                                    <div>Nr rej.: {t.numerRejestracyjny} · Status: {t.statusTechniczny}</div>
                                                </ListGroup.Item>
                                            ))
                                        ) : (
                                            <ListGroup.Item>Brak przypisanych ciężarówek</ListGroup.Item>
                                        )}
                                    </ListGroup>
                                </ListGroup.Item>
                            </ListGroup>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleDetailsClose}>Zamknij</Button>
                </Modal.Footer>
            </Modal>
            <br />
        </Container>
    );
}

export default FirmPeoplePage;
