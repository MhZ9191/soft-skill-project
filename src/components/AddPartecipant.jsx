import { useState } from "react";

export default function Addpartecipant({ idForTravel }) {
  return (
    <div>
      <div className="new-part">
        <label htmlFor="add-partecipant">Add New partecipant</label>
        <div>
          <i className="bi bi-plus-square-fill"></i>
        </div>
        <div></div>
      </div>
    </div>
  );
}
