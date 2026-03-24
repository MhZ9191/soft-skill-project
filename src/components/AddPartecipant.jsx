import { useState } from "react";
import { useNewTrav } from "../contexts/newtravelerContext";

export default function Addpartecipant({ idTravel }) {
  const [isHidden, setIsHidden] = useState(true);
  const { setViaggiatori, createIdTraveler, viaggiatori } = useNewTrav();

  const changeHidden = () => {
    setIsHidden(!isHidden);
  };

  const initData = {
    id: null,
    travel_id: null,
    nome: "",
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
    user.id = createIdTraveler() + 1;
    user.travel_id = idTravel;
    setViaggiatori([...viaggiatori, user]);
    setUser(initData);
    changeHidden();
  };

  return (
    <div>
      <div></div>
      <div className="new-part">
        <label htmlFor="add-partecipant">Add New Partecipant</label>
        <div onClick={changeHidden}>
          <i
            className={
              isHidden ? "bi bi-plus-square-fill" : "bi bi-dash-square-fill"
            }
          ></i>
        </div>
        <div className={isHidden ? "hidden-info" : "visualize"}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={user.nome}
              onChange={handleUser}
            />
            <label htmlFor="cognome">Cognome</label>
            <input
              type="text"
              id="cognome"
              name="cognome"
              value={user.cognome}
              onChange={handleUser}
            />
            <label htmlFor="codice_fiscale">Codice Fiscale</label>
            <input
              type="text"
              id="codice_fiscale"
              name="codice_fiscale"
              value={user.codice_fiscale}
              onChange={handleUser}
            />
            <label htmlFor="telefono">Telefono</label>
            <input
              type="text"
              id="telefono"
              name="telefono"
              value={user.telefono}
              onChange={handleUser}
            />
            <label htmlFor="mail">Mail</label>
            <input
              type="text"
              id="mail"
              name="mail"
              value={user.mail}
              onChange={handleUser}
            />
            <button>send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
