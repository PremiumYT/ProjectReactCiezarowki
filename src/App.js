import React from 'react';
import { useEffect, useState } from 'react';
import NavBar from "./components/NavBar.js";

function App() {
    const [data, setData] = useState({});

    useEffect(() => {
        const storedData = localStorage.getItem("DaneFirmy")

        if (storedData) {
            setData(JSON.parse(storedData));
        } else {
            const initialData = {
                pracownicy: [
                    {imie: "Dawid", nazwisko: "Nowak", email: "dawid.nowak5@gmail.com", telefon: "423178910", stanowisko: "Kierowca"},
                    {imie: "Anna", nazwisko: "Kowalczyk", email: "anna.kowalczyk23@gmail.com", telefon: "512839742", stanowisko: "Kierowca" },
                    {imie: "Piotr", nazwisko: "Zieliński", email: "piotr.zielinski88@gmail.com", telefon: "602457193", stanowisko: "Kierowca" },
                    {imie: "Magdalena", nazwisko: "Wiśniewska", email: "magda.wisniewska17@gmail.com", telefon: "739251804", stanowisko: "Kierowca" },
                    {imie: "Tomasz", nazwisko: "Lewandowski", email: "tomasz.lewandowski31@gmail.com", telefon: "884316520", stanowisko: "Kierowca" }
                ],
                kierownictwo: [
                    {imie: "Ewa", nazwisko: "Majewska", email: "ewa.majewska@gmail.com", telefon: "601482937", stanowisko: "Dyrektor" }
                ],
                kandydaci: [
                    {imie: "Kamil", nazwisko: "Domański", email: "kamil.domanski99@gmail.com", telefon: "785239410", stanowisko: "Kandydat" },
                    {imie: "Natalia", nazwisko: "Sikora", email: "natalia.sikora@gmail.com", telefon: "698374125", stanowisko: "Kandydat" }
                ],
                ciezarowki: [
                    {
                        marka: "Volvo",
                        model: "FH16",
                        mocSilnika: 750,
                        pojemnoscPaliwa: 600,
                        kilometrowka: "182000 km",
                        rokProdukcji: 2021,
                        numerRejestracyjny: "PO 4FJ23",
                        statusTechniczny: "Dostępna",
                        przypisanyPracownik: "Dawid Nowak"
                    },
                    {
                        marka: "Scania",
                        model: "R500",
                        mocSilnika: 500,
                        pojemnoscPaliwa: 700,
                        kilometrowka: "143500 km",
                        rokProdukcji: 2020,
                        numerRejestracyjny: "WZ 8GS92",
                        statusTechniczny: "W trasie",
                        przypisanyPracownik: "Piotr Zieliński"
                    },
                    {
                        marka: "MAN",
                        model: "TGX 18.480",
                        mocSilnika: 480,
                        pojemnoscPaliwa: 650,
                        kilometrowka: "97800 km",
                        rokProdukcji: 2019,
                        numerRejestracyjny: "KR 2MN01",
                        statusTechniczny: "W serwisie",
                        przypisanyPracownik: "Tomasz Lewandowski"
                    },
                    {
                        marka: "DAF",
                        model: "XF 530",
                        mocSilnika: 530,
                        pojemnoscPaliwa: 620,
                        kilometrowka: "121400 km",
                        rokProdukcji: 2022,
                        numerRejestracyjny: "LU 9AK54",
                        statusTechniczny: "Dostępna",
                        przypisanyPracownik: "Ewa Majewska"
                    }
                ]
            };

            localStorage.setItem("DaneFirmy", JSON.stringify(initialData));
            setData(initialData);
        }
    }, []);


    return (
        <>
        <NavBar />
        <div className="container mt-4">
            <h1>Dane firmy</h1>

            <h2 className="mt-4 ms-2">Pracownicy</h2>
            <ul className="list-group mt-4 ms-3">
                {data.pracownicy?.map((p, index) => (
                    <li key={index} className='list-group-item'>
                        {p.imie} {p.nazwisko} - {p.stanowisko}
                    </li>
                ))}
            </ul>

            <h2 className='mt-4'>Kierownictwo</h2>
            <ul className="list-group mt-4 ms-3">
                {data.kierownictwo?.map((k, index) => (
                    <li key={index} className='list-group-item'>
                        {k.imie} {k.nazwisko} - {k.stanowisko}
                    </li>
                ))}
            </ul>

            <h2 className='mt-4'>Kandydaci</h2>
            <ul className="list-group mt-4 ms-3">
                {data.kandydaci?.map((c, index) => (
                    <li key={index} className='list-group-item'>
                        {c.imie} {c.nazwisko}
                    </li>
                ))}
            </ul>

            <h2 className='mt-4'>Ciężarówki</h2>
            <ul className="list-group mt-4 ms-3">
                {data.ciezarowki?.map((t, index) => (
                    <li key={index} className='list-group-item'>
                        {t.marka} {t.model} <br />
                        <strong>Przypisany pracownik:</strong> {t.przypisanyPracownik}
                    </li>
                ))}
            </ul>
        </div>

        </>
    );
}

export default App;