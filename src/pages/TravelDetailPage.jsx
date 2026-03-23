// Imports
import { useParams } from "react-router";
import { Link } from "react-router";
import { travels } from "../data/data";

export default function TravelDetailPage() {
  const { id } = useParams();

  const travelDetail = travels.find((travel) => travel.id === Number(id));

  if (!travelDetail) return <p>Viaggio non trovato!</p>;

  return (
    <main className="container py-5">
      <h1 className="fw-bold text-primary">I dettagli del tuo viaggio</h1>

      <div className="travel-title my-4">
        <h2>{travelDetail.to}</h2>
        <p className="text-muted">
          <i className="bi bi-calendar-event me-2"></i>
          Dal: {travelDetail.start} al: {travelDetail.end}
        </p>
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

            <h6 className="card-subtitle mb-2 text-body-secondary">
              {travelDetail.hotel}
            </h6>

            <p className="card-text">
              QUI POTREMMO INSERIRE UNA BREVE DESCRIZIONE DELL'HOTEL
            </p>

            <Link to="#" className="card-link">
              LINK HOTEL
            </Link>
          </div>
        </div>

        {/* COLONNA */}
        <div className="col-12 col-md-6">
          <div className="card h-100 border-0 shadow-sm p-4">
            <h4 className="card-title text-primary mb-3">
              <i className="bi bi-person-check me-2"></i>
              Il tuo accompagnatore
            </h4>

            <h6 className="card-subtitle mb-2 text-body-secondary">
              {travelDetail.companion}
            </h6>

            <p className="card-text">
              QUI POTREMMO INSERIRE UNA BREVE DESCRIZIONE DELL'ACCOMPAGNATORE
            </p>

            <Link to="#" className="card-link">
              PROFILO ACCOMPAGNATORE
            </Link>
          </div>
        </div>
      </div>

      {/* LISTA VIAGGIATORI */}
      <div className="travelers-list my-4">
        <div className="card border-0 shadow-sm p-4">
          <h5 className="card-title text-primary mb-3">
            <i className="bi bi-people-fill me-2"></i>
            Il tuo gruppo
          </h5>

          <h6 className="card-subtitle mb-2 text-body-secondary">
            Numero partecipanti: {travelDetail.travelers.length}
          </h6>

          <p className="card-text">
            <b>Partecipanti:</b> {travelDetail.travelers.join(", ")}
          </p>
        </div>
      </div>
    </main>
  );
}
