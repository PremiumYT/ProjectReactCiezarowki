import firma from './firma.json';

const COMPANY_KEY = "DaneFirmy";
const USERS_KEY = "Users";
const LOGIN_KEY = "UserLogin";

const initialCompanyData = firma;

const initialUsers = [
	{ email: "admin@example.com", haslo: "admin123", name: "Admin" }
];
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
	data.kandydaci = data.kandydaci || [];
	data.kandydaci.push(candidate);
	saveCompanyData(data);
}

export function addEmployee(employee) {
	const data = getCompanyData();
	data.pracownicy = data.pracownicy || [];
	data.pracownicy.push(employee);
	saveCompanyData(data);
}

export function addTruck(truck) {
	const data = getCompanyData();
	data.ciezarowki = data.ciezarowki || [];
	data.ciezarowki.push(truck);
	saveCompanyData(data);
}

export function registerUser(newUser) {
	const users = getUsers() || [];
	users.push(newUser);
	saveUsers(users);
}

export function loginUser(email, haslo) {
	const users = getUsers() || [];
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




