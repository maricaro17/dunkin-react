import React from "react";
import CardDonas from "./CardDonas";

const CardListDonas = ({ data }) => {
  return (
    <div className="d-flex">
      {data.map((item) => (
        <CardDonas key={item.id} dona={item} />
      ))}
    </div>
  );
};

export default CardListDonas;
