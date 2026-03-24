import { useState } from "react";
import { useNewTrav } from "../contexts/newtravelerContext";

export default function Addpartecipant({ idTravel }) {
  const [isHidden, setIsHidden] = useState(true);
  const { setViaggiatori, createIdTraveler, viaggiatori, setViaggi, viaggi } =
    useNewTrav();

  const changeHidden = () => {
    setIsHidden(!isHidden);
  };

  const initData = {
    id: null,
    travel_id: null,
    name: "",
    cognome: "",
    codice_fiscale: "",
    telefono: "",
    mail: "",
  };

  const [user, setUser] = useState(initData);

  const handleUser = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      ...user,
      id: createIdTraveler() + 1,
      travel_id: idTravel,
    };
    setViaggiatori([...viaggiatori, newUser]);
    const tmpUser = newUser.name + " " + newUser.cognome;
    setViaggi(
      viaggi.map((v) => {
        if (v.id === idTravel) {
          return {
            ...v,
            travelers: [...v.travelers, tmpUser],
          };
        }
        return v;
      }),
    );
    setUser(initData);
    changeHidden();
  };

  return (
    <div className="container">
      <div
        className="d-flex justify-content-between align-items-center mb-2"
        onClick={changeHidden}
        style={{ cursor: "pointer" }}
      >
        <label
          htmlFor="add-partecipant"
          className="mb-0"
          style={{ cursor: "pointer" }}
        >
          Aggiungi Partecipante:
        </label>

        <div className="text-primary">
          <i
            className={`fs-5 bi ${
              isHidden ? "bi-plus-square-fill" : "bi-dash-square-fill"
            }`}
          ></i>
        </div>
      </div>
      <div className={isHidden ? "d-none" : "visualize pt-2 border-top"}>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6 mt-2">
              <label className="form-label" htmlFor="nome">
                Nome:
              </label>
              <input
                className="form-control form-control-sm"
                type="text"
                id="nome"
                name="nome"
                value={user.nome}
                onChange={handleUser}
                required
              />
            </div>
            <div className="col-6 mt-2">
              <label className="form-label" htmlFor="cognome">
                Cognome:
              </label>
              <input
                className="form-control form-control-sm"
                type="text"
                id="cognome"
                name="cognome"
                value={user.cognome}
                onChange={handleUser}
                required
              />
            </div>
            <div className="col-12 mt-2">
              <label className="form-label" htmlFor="codice_fiscale">
                Codice Fiscale:
              </label>
              <input
                className="form-control form-control-sm"
                type="text"
                id="codice_fiscale"
                name="codice_fiscale"
                value={user.codice_fiscale}
                onChange={handleUser}
                required
              />
            </div>
            <div className="col-6 mt-2">
              <label className="form-label" htmlFor="telefono">
                Telefono:
              </label>
              <input
                className="form-control form-control-sm"
                type="text"
                id="telefono"
                name="telefono"
                value={user.telefono}
                onChange={handleUser}
                required
              />
            </div>
            <div className="col-6 mt-2">
              <label className="form-label" htmlFor="mail">
                Mail:
              </label>
              <input
                className="form-control form-control-sm"
                type="text"
                id="mail"
                name="mail"
                value={user.mail}
                onChange={handleUser}
                required
              />
            </div>
            <div className="col-12 mt-2">
              <button className="btn btn-primary btn-sm">Invia</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
