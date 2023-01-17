import React from "react";
import "./modal.styles.css";

const Modal = ({ character, modalClick }) => {
  console.log("modal " + character.name);
  return (
    <div className="modal-container">
      <div className="modal">
        <label>{character.gender + " " + character.species}</label> <br />
        <label>{character.name}</label>
        <img src={character.url} alt="character-img" />
        <button className="modal-close-button" onClick={modalClick}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
