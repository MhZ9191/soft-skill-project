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
    <main>
      <h1>Dettaglio Viaggiatore</h1>
      <div className="card-detail">
        <h2>
          {travelerDetail.nome} {travelerDetail.cognome}
        </h2>
        <p>
          <strong> Telefono:</strong> {travelerDetail.telefono}
        </p>
        <p>
          <strong> Codice fiscale: </strong> {travelerDetail.codice_fiscale}
        </p>
        <p>
          <strong> Email: </strong> {travelerDetail.mail}
        </p>
      </div>
    </main>
  );
}
