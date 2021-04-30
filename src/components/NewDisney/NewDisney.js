import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./NewDisney.css";
const NewDisney = () => {
  const [, , , , , newDisney] = useContext(UserContext);
  console.log(newDisney);
  return (
    <div className="newDisney__container">
      <h4>New to Disney+ </h4>
      <div className="newDisney__content">
        {newDisney &&
          newDisney.map((newDis, key) => (
            <div key={key} className="newDisney__warp">
              {newDis.id}
              <Link to={`/detail/` + newDis._id}>
                <img
                  className="newDisney__img"
                  src={newDis.cardImg}
                  alt={newDis.title}
                />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewDisney;
