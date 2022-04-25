import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import donas from "../services/donas";

const deleteDonas = (id) => {
  donas.deleteDonas(id).then((data) => data);
};
const handleClick = (e) => {
  deleteDonas(e.target.id);
};

const CardDonas = ({ dona }) => {
  return (
    <div className="card col-md-3 my-2 mx-2" style={{ width: "16rem" }}>
      <img
        src={dona.imageUrl}
        className="card-img-top"
        alt={dona.name}
        height="200"
      />
      <div className="card-body">
        <h5 className="card-title text-center">{dona.name}</h5>
        <h3 className="text-center">Precio: {dona.price}</h3>
      </div>
      <div className="text-center p-3">
        <button
          id={dona.id}
          className="btn btn-danger delete"
          onClick={handleClick}
        >
          <i className="fa-solid fa-trash"></i>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default CardDonas;
