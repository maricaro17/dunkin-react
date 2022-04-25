import React, { useEffect, useState } from "react";
import CardListDonas from "../components/CardListDonas";
import donasRequest from "../services/donas"


const Main = () => {
    const [donas, setDonas] = useState([])
    useEffect(() => {
      donasRequest.getDonas().then((data)=>{
          setDonas(data)
      })
    }, [donas])
    
  return (
    <div id="donas">
      <div className="container">
        <h1 className="text-center">Productos</h1>
        <div className="row">
        <CardListDonas data={donas} />
        </div>
      </div>
    </div>
  );
};

export default Main;
