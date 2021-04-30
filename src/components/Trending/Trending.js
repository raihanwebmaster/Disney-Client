import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Trending.css";
const Trending = () => {
  const [, , , , , , , trend] = useContext(UserContext);
  console.log(trend);
  return (
    <div className="trending__container">
         <h4>Trending</h4>
      <div className="trending__content">
        {trend &&
          trend.map((tre, key) => (
            <div key={key} className="trending__warp">
              {tre.id}
              <Link to={`/detail/` + tre._id}>
                <img
                  className="trending__img"
                  src={tre.cardImg}
                  alt={tre.title}
                />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Trending;
