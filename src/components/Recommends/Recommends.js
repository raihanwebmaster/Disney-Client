import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Recommends.css";
const Recommends = () => {
  const [,,,,recommen] = useContext(UserContext)
    console.log(recommen);
  return (
    <div className="recommends__container">
      <h4>Recommended for You</h4>
      <div className="recommends__content">
        {
         recommen && 
         recommen.map((rec,key)=>(
          <div className="recommends__wrap" key={key}>
            {rec._id}
            {rec._id}
            <Link to={`/detail/`+ rec._id} >
            <img className="recommends__img" src={rec.cardImg} alt={rec.title} />
            </Link>
          </div>

         ))}
      </div>
    </div>
  );
};

export default Recommends;
