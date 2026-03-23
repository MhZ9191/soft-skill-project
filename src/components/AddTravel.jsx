export default function AddTravel() {
  return (
    <main>
      <section>
        <div>
          <fieldset>
            <legend>Add New Travel</legend>
            <form>
              <label htmlFor="">Destination</label>
              <input type="text" />
              <label htmlFor="">Start</label>
              <input type="date" />
              <label htmlFor="">End</label>
              <input type="date" />
              <label htmlFor="">Image</label>
              <input type="file" />
              <label htmlFor="">Price</label>
              <input type="number" />
              <label htmlFor="">Companion</label>
              <select></select>
              <label htmlFor="">hotel</label>
              <input type="text" />
            </form>
          </fieldset>
        </div>
      </section>
    </main>
  );
}
