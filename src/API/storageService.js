import firma from './firma.json';

const COMPANY_KEY = "DaneFirmy";

const initialCompanyData = firma;


export function initStorage() {
	if (!localStorage.getItem(COMPANY_KEY)) {
		localStorage.setItem(COMPANY_KEY, JSON.stringify(initialCompanyData));
	}
}

export function getCompanyData() {
	return JSON.parse(localStorage.getItem(COMPANY_KEY));
}
