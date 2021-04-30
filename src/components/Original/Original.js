import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Original.css";
const Original = () => {
  const [, , , , , , origin] = useContext(UserContext);
  console.log(origin);
  return (
    <div className="original__container">
      <h4>Originals</h4>
      <div className="original__content">
        {origin &&
          origin.map((ori, key) => (
            <div key={key} className="original__wrap">
              {ori.id}
              <Link to={`/detail/` + ori._id}>
                <img
                  className="original__img"
                  src={ori.cardImg}
                  alt={ori.title}
                />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Original;
