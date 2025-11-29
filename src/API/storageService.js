import firma from './firma.json';

const COMPANY_KEY = "DaneFirmy";

export function initStorage() {
    const existingData = localStorage.getItem(COMPANY_KEY);

    if (!existingData) {
        localStorage.setItem(COMPANY_KEY, JSON.stringify(firma));
        console.log("Dane firmy zapisane do localStorage");
    } else {
        const parsedData = JSON.parse(existingData);

        const updatedData = {
            pracownicy: parsedData.pracownicy?.length === firma.pracownicy.length ? parsedData.pracownicy : firma.pracownicy,
            kierownictwo: parsedData.kierownictwo?.length === firma.kierownictwo.length ? parsedData.kierownictwo : firma.kierownictwo,
            kandydaci: parsedData.kandydaci?.length === firma.kandydaci.length ? parsedData.kandydaci : firma.kandydaci,
            ciezarowki: parsedData.ciezarowki?.length === firma.ciezarowki.length ? parsedData.ciezarowki : firma.ciezarowki
        };

        localStorage.setItem(COMPANY_KEY, JSON.stringify(updatedData));
        console.log("Dane firmy zaktualizowane w localStorage");
    }
}

export function getCompanyData() {
    const data = localStorage.getItem(COMPANY_KEY);
    if (!data) {
        initStorage();
        return firma;
    }
    return JSON.parse(data);
}
