import { useEffect, useState } from "react";
import { travelers } from "../data/data";

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
        el.name.toLowerCase().includes(search.toLowerCase()),
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
      <section className="address-sec">
        <div>
          <fieldset className="field-search">
            <legend>Search</legend>
            <input
              type="text"
              name="search"
              id="search-filter"
              value={search}
              onChange={handleSearch}
              placeholder="Type here"
            />
          </fieldset>
          <div>
            {results &&
              results.map((el) => {
                return (
                  <div className="div-add" key={el.id}>
                    <span
                      className="spec-span"
                      onClick={() => handleInfo(el.id)}
                    >
                      {el.cognome} {el.name}
                    </span>
                    <div
                      className={
                        el.id === seeInfo
                          ? "info visualize"
                          : "info hidden-info"
                      }
                    >
                      <div>{el.phone}</div>
                      <div>
                        <i className="bi bi-telephone-fill"></i>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </main>
  );
}
