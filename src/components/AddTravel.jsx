import { useState } from "react";
import { companions } from "../data/data";
import { useNewTrav } from "../contexts/newtravelerContext";
export default function AddTravel() {
  const { createIdTravel, setViaggi, viaggi } = useNewTrav();
  const initData = {
    to: "",
    start: "",
    end: "",
    image: "",
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
    setViaggi([...viaggi, { ...fields, id: newIdTravel, travelers: [] }]);
    setFields(initData);
  };

  return (
    <main>
      <section>
        <div>
          <fieldset>
            <legend>Add New Travel</legend>
            <form onSubmit={submitNewTravel}>
              <label htmlFor="to">Destination</label>
              <input
                type="text"
                id="destination"
                name="to"
                onChange={handleFields}
                value={fields.to}
              />
              <label htmlFor="start">Start</label>
              <input
                type="date"
                name="start"
                id="start"
                onChange={handleFields}
                value={fields.start}
              />
              <label htmlFor="end">End</label>
              <input
                type="date"
                id="end"
                name="end"
                onChange={handleFields}
                value={fields.end}
              />
              <label htmlFor="image">Image</label>
              <input
                type="text"
                name="image"
                id="image"
                onChange={handleFields}
                value={fields.image}
              />
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                id="price"
                onChange={handleFields}
                value={fields.price}
              />
              <label htmlFor="companion">Companion</label>
              <select
                onChange={handleFields}
                id="companion"
                name="companion"
                value={fields.companion}
              >
                {companions.map((el, i) => {
                  return (
                    <option key={i} value={el}>
                      {el}
                    </option>
                  );
                })}
              </select>
              <label htmlFor="hotel">hotel</label>
              <input
                type="text"
                id="hotel"
                name="hotel"
                onChange={handleFields}
                value={fields.hotel}
              />
              <button>Send</button>
            </form>
          </fieldset>
        </div>
      </section>
    </main>
  );
}
