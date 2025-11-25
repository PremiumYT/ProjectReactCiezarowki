import React from "react";

function FormPage() {
  return (
    <div className="container mt-4">
      <div className="text-center">
        <h1>Formularz zgłoszeniowy</h1>
        <p className="lead">
          Wypełnij poniższy formularz, aby dołączyć do naszego zespołu.
        </p>
      </div>

      <form>
        <div className="mb-3">
          <label htmlFor="imie" className="form-label">Imię</label>
          <input type="text" className="form-control" id="imie" required />
        </div>

        <div className="mb-3">
          <label htmlFor="nazwisko" className="form-label">Nazwisko</label>
          <input type="text" className="form-control" id="nazwisko" required />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" required />
        </div>

        <div className="mb-3">
          <label htmlFor="telefon" className="form-label">Numer telefonu</label>
          <input type="tel" className="form-control" id="telefon" required />
        </div>

        <button type="submit" className="btn btn-primary">Wyślij zgłoszenie</button>
      </form>
    </div>
  );
}

export default FormPage;