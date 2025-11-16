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

      <div className="row mt-5">
        <div className="col-md-4 mb-3">
          <img src={truck1} alt="Ciężarówka 1" className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-md-4 mb-3">
          <img src={truck2} alt="Ciężarówka 2" className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-md-4 mb-3">
          <img src={truck3} alt="Ciężarówka 3" className="img-fluid rounded shadow-sm" />
        </div>
      </div>

      <div className="text-center mt-5">
        <h3>Chcesz dołączyć do naszego zespołu?</h3>
        <Link to="/formularz" className="btn btn-primary btn-lg mt-3">
          Aplikuj teraz
        </Link>
      </div>
    </div>
  );
}

export default Home;