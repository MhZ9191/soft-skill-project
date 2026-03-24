import { useNewTrav } from "../contexts/newtravelerContext";
import { Link } from "react-router";

export default function HomePage() {
  const { viaggi } = useNewTrav();

  // Funzione per formattare la data in stile italiano
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("it-IT");
  };

  return (
    <div className="container py-5">
      {/* Intestazione */}
      <header className="d-flex justify-content-between align-items-center mb-5">
        <div>
          <h1 className="fw-bold text-primary">I Miei Viaggi</h1>
          <p className="text-muted mb-0">
            Seleziona una destinazione per visualizzare i contatti dei
            partecipanti.
          </p>
        </div>
        {/* BONUS: Bottone per aggiungere viaggio */}
        <button className="btn btn-success rounded-pill px-4 shadow-sm">
          <i className="bi bi-plus-lg me-2"></i> Nuovo Viaggio
        </button>
      </header>

      {/* Griglia Viaggi */}
      <div className="row g-4">
        {viaggi.map((travel) => (
          <div key={travel.id} className="col-12 col-md-6 col-lg-4">
            <Link
              to={`/traveldetail/${travel.id}`}
              className="text-decoration-none"
            >
              <div className="card h-100 border-0 shadow-sm overflow-hidden transition-card">
                {/* Contenuto Card */}
                <div className="card-body">
                  <h5 className="card-title fw-bold">{travel.to}</h5>

                  <div className="card-text small text-muted mb-4">
                    <div className="mb-2">
                      <i className="bi bi-calendar-event me-2"></i>
                      {formatDate(travel.start)} - {formatDate(travel.end)}
                    </div>
                    <div className="mb-2">
                      <i className="bi bi-geo-alt me-2"></i>
                      {travel.hotel}
                    </div>
                    <div>
                      <i className="bi bi-person-check me-2"></i>
                      Accompagnatore: <strong>{travel.companion}</strong>
                    </div>
                  </div>

                  {/* Pulsante per entrare nel dettaglio (Rubrica) */}
                  <button className="btn btn-outline-primary w-100 fw-semibold mt-auto">
                    See more info
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Stile inline rapido per l'effetto hover (stile Boolean) */}
      <style>{`
        .transition-card { transition: transform 0.3s ease; }
        .transition-card:hover { transform: translateY(-5px); }
      `}</style>
    </div>
  );
}
