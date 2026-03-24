// Imports
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router";
import Addpartecipant from "../components/AddPartecipant";
import { useNewTrav } from "../contexts/newtravelerContext";
import { useState } from "react";
export default function TravelDetailPage() {
  const { viaggi, viaggiatori, setViaggi } = useNewTrav();

  // Funzione per formattare la data in stile italiano
  const navigate = useNavigate();
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("it-IT");
  };

  const { id } = useParams();
  const travelDetail = viaggi.find((travel) => travel.id === Number(id));
  if (!travelDetail) return <p>Viaggio non trovato!</p>;

  const unifyName = viaggiatori.map((el) => {
    const unify = el.nome + " " + el.cognome;
    return { id: el.id, unify };
  });

  const handlePage = (nome) => {
    const idUser = unifyName.find((el) => el.unify === nome);
    navigate("/traveler/" + idUser.id);
  };

  function languageToFlag(lang) {
    switch (lang.toLowerCase()) {
      case "Italiano":
        return "🇮🇹";
      case "Inglese":
        return "🇬🇧";
      case "Francese":
        return "🇫🇷";
      case "Spagnolo":
        return "🇪🇸";
      case "Tedesco":
        return "🇩🇪";
      case "Cinese":
        return "🇨🇳";
      default:
        return "🏳️"; // bandiera bianca per lingua sconosciuta
    }
  }

  const removeUser = (currentUser) => {
    setViaggi(
      viaggi.map((el) => {
        if (el.id === travelDetail.id) {
          return {
            ...el,
            travelers: el.travelers.filter((ele) => ele !== currentUser),
          };
        }
        return el;
      }),
    );
  };

  return (
    <main className="container py-5">
      <h1 className="fw-bold text-primary">I dettagli del tuo viaggio</h1>
      <p className="text-muted mb-0">
        In questa pagina puoi trovare tutti i dettagli relativi al tuo viaggio a{" "}
        {travelDetail.to}
      </p>

      <div
        className="travel-jumbo my-4 p-4 text-light border rounded-4"
        style={{
          minHeight: "300px",
          textShadow: "0 1px 3px rgba(0,0,0,0.9), 0 4px 12px rgba(0,0,0,0.6)",
          backgroundImage: `url(${travelDetail.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="travel-jumbo-detail">
          <h2>{travelDetail.to}</h2>
          <p className="fs-6">
            <i className="bi bi-calendar-event me-2"></i>
            {formatDate(travelDetail.start)} - {formatDate(travelDetail.end)}
          </p>
          <p className="fs-4 ">Prezzo: {travelDetail.price}€</p>
        </div>
      </div>

      {/* ROW con gap */}
      <div className="row g-4">
        {/* COLONNA */}
        <div className="col-12 col-md-6">
          <div className="card h-100 border-0 shadow-sm p-4">
            <h4 className="card-title text-primary mb-3">
              <i className="bi bi-geo-alt me-2"></i>
              Il tuo soggiorno
            </h4>
            {/* Valutiamo logo hotel + hotel rating */}
            <h5 className="card-subtitle mb-2">{travelDetail.hotel.name}</h5>
            <div className="hotel-info">
              <address className="card-text my-2">
                <b>
                  <i class="bi bi-map-fill"></i> Indirizzo:
                </b>{" "}
                {travelDetail.hotel.address} <br></br>
                <b>
                  <i class="bi bi-telephone-fill text-dark"></i> Telefono:
                </b>{" "}
                {travelDetail.hotel.phone}
              </address>
              <Link to={travelDetail.hotel.website} className="card-link">
                Sito web
              </Link>
            </div>
          </div>
        </div>

        {/* COLONNA */}
        <div className="col-12 col-md-6">
          <div className="card h-100 border-0 shadow-sm p-4">
            <h4 className="card-title text-primary mb-3">
              <i className="bi bi-person-check me-2"></i>
              Il tuo accompagnatore
            </h4>

            <h5 className="card-subtitle mb-2">
              {travelDetail.companion.name}
            </h5>
            {/* Valutiamo propic accompagnatore */}
            <p className="card-text">
              <p>
                <b>Lingue parlate: </b>{" "}
                {travelDetail.companion.languages.join(", ")}
              </p>
              <address className="card-text my-2">
                <b>
                  <i class="bi bi-telephone-fill text-dark"></i> Telefono:
                </b>{" "}
                {travelDetail.companion.phone}
              </address>
            </p>
          </div>
        </div>
      </div>

      {/* LISTA VIAGGIATORI */}
      <div className="travelers-list my-4">
        <div className="card border-0 shadow-sm p-4">
          <h4 className="card-title text-primary mb-3">
            <i className="bi bi-people-fill me-2"></i>
            Il tuo gruppo
          </h4>

          <h5 className="card-subtitle mb-2">
            <b>Numero partecipanti:</b> {travelDetail.travelers.length}
          </h5>

          <div className="container">
            <b>Partecipanti:</b>{" "}
            <div className="d-flex flex-wrap gap-2 mt-2">
              {travelDetail.travelers.map((el, i) => {
                return (
                  <div key={i} className="border rounded p-2 bg-light">
                    <div className="d-flex  align-items-center gap-3">
                      <span
                        className="link-detail"
                        onClick={() => handlePage(el)}
                      >
                        {el}
                      </span>
                      <div
                        className="bi bi-dash-square-fill text-danger"
                        onClick={() => removeUser(el)}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border rounded p-2 bg-light mt-2">
            <Addpartecipant idTravel={Number(id)} />
          </div>
        </div>
      </div>
    </main>
  );
}
