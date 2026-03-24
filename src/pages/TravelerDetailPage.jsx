import { useParams } from "react-router";
import { travelers } from "../data/data";

export default function TravelerDetailPage() {
  // recupero l'id
  const { id } = useParams();

  //Recupero il singolo viaggiatore dall'array tramite l'ID ottenuto dai parametri
  const travelerDetail = travelers.find((traveler) => traveler.id == id);

  // se non trovo il viaggiatore ritorno "viaggiatore non trovato"
  if (!travelerDetail) return <p>Viaggiatore non trovato!</p>;

  return (
    // recupero i dati del viaggiatore
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
            <div className="card-header bg-primary bg-gradient text-white p-4 text-center">
              <h2 className="h4 mb-0">
                {travelerDetail.nome} {travelerDetail.cognome}
              </h2>
              <small className="opacity-75">Scheda Viaggiatore</small>
            </div>

            <div className="card-body p-4">
              <div className="mb-3 d-flex align-items-center">
                <div>
                  <label className="text-muted small d-block">Telefono</label>
                  <span className="fw-medium">{travelerDetail.telefono}</span>
                </div>
              </div>

              <hr />

              <div className="mb-3 d-flex align-items-center">
                <div>
                  <label className="text-muted small d-block">
                    Codice Fiscale
                  </label>
                  <span className="fw-medium text-uppercase">
                    {travelerDetail.codice_fiscale}
                  </span>
                </div>
              </div>

              <hr />

              <div className="mb-0 d-flex align-items-center">
                <div>
                  <label className="text-muted small d-block">Email</label>
                  <span className="fw-medium">{travelerDetail.mail}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
