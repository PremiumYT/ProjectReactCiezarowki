import React from "react";
import { Link } from "react-router-dom";
import truck1 from "../assets/truck1.jpg";
import truck2 from "../assets/truck2.jpg";
import truck3 from "../assets/truck3.jpg";

function Home() {
  return (
    <div className="container mt-4">
      <div className="text-center">
        <h1>Witamy w naszej firmie transportowej</h1>
        <p className="lead">
          Zajmujemy się profesjonalnym transportem ciężarowym w całej Europie.
        </p>
      </div>

      <div className="container mt-5">
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src={truck1} alt="Ciężarówka 1" className="img-fluid rounded shadow-sm" />
          </div>
          <div className="col-md-6">
            <h3>Tytuł 1</h3>
            <p>Opis do ciężarówki 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-md-6 order-md-2">
            <img src={truck2} alt="Ciężarówka 2" className="img-fluid rounded shadow-sm" />
          </div>
          <div className="col-md-6 order-md-1">
            <h3>Tytuł 2</h3>
            <p>Opis do ciężarówki 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src={truck3} alt="Ciężarówka 3" className="img-fluid rounded shadow-sm" />
          </div>
          <div className="col-md-6">
            <h3>Tytuł 3</h3>
            <p>Opis do ciężarówki 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>


      <div className="text-center mt-5">
        <h3>Chcesz dołączyć do naszego zespołu?</h3>
        <Link to="/formularz" className="btn btn-primary btn-lg mt-3">
          Dołącz do nas teraz!
        </Link>
      </div>
    </div>
    
  );
}

export default Home;