import { useEffect, useState } from "react";
import { travelers } from "../data/data";
import AddTravel from "../components/AddTravel";

export default function AddressBookPage() {
  const travelersSorted = [...travelers];
  travelersSorted.sort((a, b) => a.cognome.localeCompare(b.cognome));

  const [search, setSearch] = useState("");
  const [results, setResults] = useState(undefined);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const output = () => {
    if (!search) return setResults(travelersSorted);
    const tempo = travelersSorted.filter(
      (el) =>
        el.cognome.toLowerCase().includes(search.toLowerCase()) ||
        el.nome.toLowerCase().includes(search.toLowerCase()),
    );
    setResults(tempo);
  };

  useEffect(output, [search]);

  const [seeInfo, setSeeInfo] = useState(null);
  const handleInfo = (id_user) => {
    if (seeInfo == id_user) {
      setSeeInfo(null);
    } else {
      setSeeInfo(id_user);
    }
  };

  return (
    <main>
      <section>
        <div>
          <fieldset className="field-search">
            <legend>Search filter</legend>
            <input
              type="text"
              name="search"
              id="search-filter"
              value={search}
              onChange={handleSearch}
            />
          </fieldset>
          <div>
            {results &&
              results.map((el) => {
                return (
                  <div
                    className="div-add"
                    key={el.id}
                    onClick={() => handleInfo(el.id)}
                  >
                    <span>
                      {el.cognome} {el.nome}
                    </span>
                    <div
                      className={
                        el.id === seeInfo
                          ? "info visualize"
                          : "info hidden-info"
                      }
                    >
                      <div>{el.telefono}</div>
                      <div>
                        <i className="bi bi-telephone-fill"></i>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <AddTravel />
        </div>
      </section>
    </main>
  );
}
