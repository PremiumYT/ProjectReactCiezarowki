const COMPANY_KEY = "DaneFirmy";
const USERS_KEY = "Users";
const LOGIN_KEY = "UserLogin";

const initialCompanyData = {
    pracownicy: [
        { imie: "Dawid", nazwisko: "Nowak", email: "dawid.nowak5@gmail.com", telefon: "423178910", stanowisko: "Kierowca" },
        { imie: "Anna", nazwisko: "Kowalczyk", email: "anna.kowalczyk23@gmail.com", telefon: "512839742", stanowisko: "Kierowca" },
        { imie: "Piotr", nazwisko: "Zieliński", email: "piotr.zielinski88@gmail.com", telefon: "602457193", stanowisko: "Kierowca" },
        { imie: "Magdalena", nazwisko: "Wiśniewska", email: "magda.wisniewska17@gmail.com", telefon: "739251804", stanowisko: "Kierowca" },
        { imie: "Tomasz", nazwisko: "Lewandowski", email: "tomasz.lewandowski31@gmail.com", telefon: "884316520", stanowisko: "Kierowca" }
    ],
    kierownictwo: [
        { imie: "Ewa", nazwisko: "Majewska", email: "ewa.majewska@gmail.com", telefon: "601482937", stanowisko: "Dyrektor" }
    ],
    kandydaci: [
        { imie: "Kamil", nazwisko: "Domański", email: "kamil.domanski99@gmail.com", telefon: "785239410", stanowisko: "Kandydat" },
        { imie: "Natalia", nazwisko: "Sikora", email: "natalia.sikora@gmail.com", telefon: "698374125", stanowisko: "Kandydat" }
    ],
    ciezarowki: [
        {
            marka: "Volvo", model: "FH16", mocSilnika: 750, pojemnoscPaliwa: 600,
            kilometrowka: "182000 km", rokProdukcji: 2021, numerRejestracyjny: "PO 4FJ23",
            statusTechniczny: "Dostępna", przypisanyPracownik: "Dawid Nowak"
        },
        {
            marka: "Scania", model: "R500", mocSilnika: 500, pojemnoscPaliwa: 700,
            kilometrowka: "143500 km", rokProdukcji: 2020, numerRejestracyjny: "WZ 8GS92",
            statusTechniczny: "W trasie", przypisanyPracownik: "Piotr Zieliński"
        },
        {
            marka: "MAN", model: "TGX 18.480", mocSilnika: 480, pojemnoscPaliwa: 650,
            kilometrowka: "97800 km", rokProdukcji: 2019, numerRejestracyjny: "KR 2MN01",
            statusTechniczny: "W serwisie", przypisanyPracownik: "Tomasz Lewandowski"
        },
        {
            marka: "DAF", model: "XF 530", mocSilnika: 530, pojemnoscPaliwa: 620,
            kilometrowka: "121400 km", rokProdukcji: 2022, numerRejestracyjny: "LU 9AK54",
            statusTechniczny: "Dostępna", przypisanyPracownik: "Ewa Majewska"
        }
    ]
};



export function initStorage() {
    if (!localStorage.getItem(COMPANY_KEY)) {
        localStorage.setItem(COMPANY_KEY, JSON.stringify(initialCompanyData));
    }
    if (!localStorage.getItem(USERS_KEY)) {
        localStorage.setItem(USERS_KEY, JSON.stringify(initialUsers));
    }
}

export function getCompanyData() {
    return JSON.parse(localStorage.getItem(COMPANY_KEY));
}

export function getUsers() {
    return JSON.parse(localStorage.getItem(USERS_KEY));
}

export function getLoggedUser() {
    return JSON.parse(localStorage.getItem(LOGIN_KEY));
}

export function saveCompanyData(data) {
    localStorage.setItem(COMPANY_KEY, JSON.stringify(data));
}

export function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function addCandidate(candidate) {
    const data = getCompanyData();
    data.kandydaci.push(candidate);
    saveCompanyData(data);
}

export function addEmployee(employee) {
    const data = getCompanyData();
    data.pracownicy.push(employee);
    saveCompanyData(data);
}

export function addTruck(truck) {
    const data = getCompanyData();
    data.ciezarowki.push(truck);
    saveCompanyData(data);
}

export function registerUser(newUser) {
    const users = getUsers();
    users.push(newUser);
    saveUsers(users);
}

export function loginUser(email, haslo) {
    const users = getUsers();
    const found = users.find(u => u.email === email && u.haslo === haslo);
    if (found) {
        localStorage.setItem(LOGIN_KEY, JSON.stringify(found));
        return found;
    }
    return null;
}

export function logoutUser() {
    localStorage.removeItem(LOGIN_KEY);
}