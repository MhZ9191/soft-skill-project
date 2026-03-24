import { useState } from "react";
import { companions } from "../data/data";
import { useNewTrav } from "../contexts/newtravelerContext";
import { useNavigate } from "react-router"; // Importiamo il navigatore

export default function AddTravel() {
  const { createIdTravel, setViaggi, viaggi } = useNewTrav();
  const navigate = useNavigate(); // Inizializziamo il navigatore

  const initData = {
    to: "",
    start: "",
    end: "",
    image: "", // Questo campo raccoglierà l'URL dell'immagine
    price: "",
    companion: companions[0] || "",
    hotel: "",
  };

  const [fields, setFields] = useState(initData);

  const handleFields = (e) => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };

  const submitNewTravel = (e) => {
    e.preventDefault();
    let newIdTravel = createIdTravel() + 1;

    // Aggiungiamo il nuovo viaggio allo stato globale
    setViaggi([...viaggi, { ...fields, id: newIdTravel, travelers: [] }]);

    // Reset del form
    setFields(initData);

    // TORNA ALLA HOME: dopo il salvataggio riportiamo l'utente alla lista
    navigate("/");
  };

  return (
    <main className="container py-5">
      <section className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 p-4">
            <h2 className="fw-bold text-primary mb-4">
              Aggiungi Nuovo Viaggio
            </h2>

            <form onSubmit={submitNewTravel}>
              {/* Destinazione */}
              <div className="mb-3">
                <label htmlFor="destination" className="form-label fw-semibold">
                  Destinazione
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="destination"
                  name="to"
                  placeholder="Es: Tokyo, Giappone"
                  onChange={handleFields}
                  value={fields.to}
                  required
                />
              </div>

              <div className="row">
                {/* Data Inizio */}
                <div className="col-md-6 mb-3">
                  <label htmlFor="start" className="form-label fw-semibold">
                    Data Inizio
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    name="start"
                    id="start"
                    onChange={handleFields}
                    value={fields.start}
                    required
                  />
                </div>
                {/* Data Fine */}
                <div className="col-md-6 mb-3">
                  <label htmlFor="end" className="form-label fw-semibold">
                    Data Fine
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="end"
                    name="end"
                    onChange={handleFields}
                    value={fields.end}
                    required
                  />
                </div>
              </div>

              {/* URL Immagine */}
              <div className="mb-3">
                <label htmlFor="image" className="form-label fw-semibold">
                  URL Immagine
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="image"
                  id="image"
                  placeholder="Incolla il link della foto"
                  onChange={handleFields}
                  value={fields.image}
                />
              </div>

              <div className="row">
                {/* Prezzo */}
                <div className="col-md-6 mb-3">
                  <label htmlFor="price" className="form-label fw-semibold">
                    Prezzo (€)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="price"
                    id="price"
                    onChange={handleFields}
                    value={fields.price}
                    required
                  />
                </div>
                {/* Hotel */}
                <div className="col-md-6 mb-3">
                  <label htmlFor="hotel" className="form-label fw-semibold">
                    Hotel
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="hotel"
                    name="hotel"
                    onChange={handleFields}
                    value={fields.hotel}
                    required
                  />
                </div>
              </div>

              {/* Accompagnatore */}
              <div className="mb-4">
                <label htmlFor="companion" className="form-label fw-semibold">
                  Accompagnatore
                </label>
                <select
                  className="form-select"
                  onChange={handleFields}
                  id="companion"
                  name="companion"
                  value={fields.companion}
                >
                  {companions.map((el, i) => (
                    <option key={i} value={el}>
                      {el}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pulsanti */}
              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-primary px-4 fw-bold">
                  Salva Viaggio
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary px-4"
                  onClick={() => navigate("/")}
                >
                  Annulla
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
