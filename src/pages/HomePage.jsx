import { Link } from "react-router-dom";
import { travels } from "../data/data";

export default function HomePage() {
  // Funzione per formattare la data in stile italiano
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("it-IT");
  };

  return (
    <div className="container py-5">
      {/* Intestazione */}
      <header className="d-flex justify-content-between align-items-center mb-5 border-bottom pb-4">
        <div>
          <h1 className="fw-bold text-primary">I Miei Viaggi</h1>
          <p className="text-muted mb-0">
            Seleziona una destinazione per visualizzare i contatti dei
            partecipanti.
          </p>
        </div>
        <Link
          to="/add-travel"
          className="btn btn-success rounded-pill px-4 shadow-sm"
        >
          <i className="bi bi-plus-lg me-2"></i> Nuovo Viaggio
        </Link>
      </header>

      {/* Griglia Viaggi */}
      <div className="row g-4">
        {travels.map((travel) => (
          <div key={travel.id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm overflow-hidden transition-card">
              {/* Immagine */}
              <img
                src={travel.img}
                className="card-img-top"
                alt={travel.to}
                style={{ height: "200px", objectFit: "cover" }}
              />

              {/* Contenuto Card */}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-dark">{travel.to}</h5>

                <div className="card-text small text-muted mb-4">
                  <div className="mb-2">
                    <i className="bi bi-calendar-event me-2 text-primary"></i>
                    {formatDate(travel.start)} - {formatDate(travel.end)}
                  </div>
                  <div className="mb-2">
                    <i className="bi bi-geo-alt me-2 text-primary"></i>
                    {travel.hotel}
                  </div>
                  <div>
                    <i className="bi bi-person-check me-2 text-primary"></i>
                    Accompagnatore: <strong>{travel.companion}</strong>
                  </div>
                </div>

                {/* Bottone */}
                <button className="btn btn-outline-primary w-100 fw-semibold mt-auto">
                  Apri Rubrica Contatti
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .transition-card { transition: all 0.3s ease; }
        .transition-card:hover { 
          transform: translateY(-5px); 
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
      `}</style>
    </div>
  );
}
