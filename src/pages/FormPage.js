import React, { useState, useEffect } from "react";
import { Alert, Button, Form } from "react-bootstrap";

function FormPage() {
  const [formData, setFormData] = useState({
    imie: "",
    nazwisko: "",
    email: "",
    telefon: ""
  });

  const [alert, setAlert] = useState({ type: "", message: "" });
  const [fieldStatus, setFieldStatus] = useState({
    imie: "",
    nazwisko: "",
    email: "",
    telefon: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    const { imie, nazwisko, email, telefon } = formData;

    if (!imie && !nazwisko && !email && !telefon) {
      setAlert({ type: "", message: "" });
      setFieldStatus({ imie: "", nazwisko: "", email: "", telefon: "" });
      return;
    }

    const lettersRegex = /^[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ -]+$/;
    const phoneRegex = /^[0-9]+$/;
    let newFieldStatus = { imie: "", nazwisko: "", email: "", telefon: "" };

    if (!imie || !nazwisko || !email || !telefon) {
      setAlert({ type: "warning", message: "Nie wprowadzono wszystkich danych!" });
    } else {
      setAlert({ type: "success", message: "Wszystkie dane wyglądają poprawnie!" });
    }

    if (imie && !lettersRegex.test(imie)) {
      setAlert({ type: "danger", message: "Imię i nazwisko mogą zawierać tylko litery!" });
      newFieldStatus.imie = "is-invalid";
    } else if (imie) newFieldStatus.imie = "is-valid";

    if (nazwisko && !lettersRegex.test(nazwisko)) {
      setAlert({ type: "danger", message: "Imię i nazwisko mogą zawierać tylko litery!" });
      newFieldStatus.nazwisko = "is-invalid";
    } else if (nazwisko) newFieldStatus.nazwisko = "is-valid";

    if (email) {
      const emailParts = email.split("@");
      const localPartRegex = /^[A-Za-z0-9]+$/;
      if (emailParts.length !== 2 || emailParts[1].toLowerCase() !== "gmail.com") {
        setAlert({ type: "danger", message: "Adres email musi być w formacie nazwa@gmail.com!" });
        newFieldStatus.email = "is-invalid";
      } else if (!localPartRegex.test(emailParts[0])) {
        setAlert({ type: "danger", message: "Część przed '@' może zawierać tylko litery i cyfry!" });
        newFieldStatus.email = "is-invalid";
      } else newFieldStatus.email = "is-valid";
    }

    if (telefon) {
      if (!phoneRegex.test(telefon)) {
        setAlert({ type: "danger", message: "Numer telefonu może zawierać tylko cyfry!" });
        newFieldStatus.telefon = "is-invalid";
      } else newFieldStatus.telefon = "is-valid";
    }

    setFieldStatus(newFieldStatus);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (alert.type === "success") {
      console.log("Wysłane dane:", formData);
      setFormData({ imie: "", nazwisko: "", email: "", telefon: "" });
      setAlert({ type: "success", message: "Formularz został poprawnie wysłany!" });
      setFieldStatus({ imie: "", nazwisko: "", email: "", telefon: "" });
    }
  };

  return (
    <div className="container mt-4">
      <div className="text-center">
        <h1>Formularz zgłoszeniowy</h1>
        <p className="lead">Wypełnij poniższy formularz, aby dołączyć do naszego zespołu.</p>
      </div>

      {alert.message && <Alert variant={alert.type}>{alert.message}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="imie">
          <Form.Label>Imię</Form.Label>
          <Form.Control
            type="text"
            value={formData.imie}
            onChange={handleChange}
            placeholder="Imię"
            className={fieldStatus.imie}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="nazwisko">
          <Form.Label>Nazwisko</Form.Label>
          <Form.Control
            type="text"
            value={formData.nazwisko}
            onChange={handleChange}
            placeholder="Nazwisko"
            className={fieldStatus.nazwisko}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            value={formData.email}
            onChange={handleChange}
            placeholder="Adres email"
            className={fieldStatus.email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="telefon">
          <Form.Label>Numer telefonu</Form.Label>
          <Form.Control
            type="text"
            value={formData.telefon}
            onChange={handleChange}
            placeholder="Numer telefonu"
            className={fieldStatus.telefon}
          />
        </Form.Group>

        <Button variant="primary" type="submit">Wyślij zgłoszenie</Button>
      </Form>
    </div>
  );
}

export default FormPage;
