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
    const newUser = {
      ...user,
      id: createIdTraveler() + 1,
      travel_id: idTravel,
    };
    setViaggiatori([...viaggiatori, newUser]);
    const tmpUser = newUser.nome + " " + newUser.cognome;
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
              required
            />
            <label htmlFor="cognome">Cognome</label>
            <input
              type="text"
              id="cognome"
              name="cognome"
              value={user.cognome}
              onChange={handleUser}
              required
            />
            <label htmlFor="codice_fiscale">Codice Fiscale</label>
            <input
              type="text"
              id="codice_fiscale"
              name="codice_fiscale"
              value={user.codice_fiscale}
              onChange={handleUser}
              required
            />
            <label htmlFor="telefono">Telefono</label>
            <input
              type="text"
              id="telefono"
              name="telefono"
              value={user.telefono}
              onChange={handleUser}
              required
            />
            <label htmlFor="mail">Mail</label>
            <input
              type="text"
              id="mail"
              name="mail"
              value={user.mail}
              onChange={handleUser}
              required
            />
            <button>send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
