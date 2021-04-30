import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";
import playIcon from "../../images/play-icon-black.png";
import playIcon2 from "../../images/play-icon-white.png";
import groupIcon from "../../images/group-icon.png";
import loadSpiner from '../../images/loadSpiner.gif';
const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState([]);
  useEffect(() => {
    fetch("https://disney-server.herokuapp.com/detail/" + id, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setDetailData(data);
      });
  }, [id]);
  return (
    <>
      {detailData.backgroundImg ? (
        <div className="detail__container">
          <div className="Background">
            <img src={detailData.backgroundImg} alt={detailData.title} />
          </div>
          <div className="ImageTitle">
            <img src={detailData.titleImg} alt={detailData.title} />
          </div>
          <div className="contentMeta">
            <div className="detail__controls">
              <button className="Player">
                <img src={playIcon} alt="" />
                <span>play</span>
              </button>
              <button className="Trailer">
                <img src={playIcon2} alt="" />
                <span>Trailer</span>
              </button>
              <div className="AddList">
                <span />
                <span />
              </div>
              <div className="GroupWatch">
                <div className="GroupWatch2">
                  <img src={groupIcon} alt="" />
                </div>
              </div>
            </div>
            <div className="Subtitle">{detailData.subTitle}</div>
            <div className="detail__Description">{detailData.description}</div>
          </div>
        </div>
      ) : (
        <div  className="text-center d-flex justify-content-center align-items-center categories_container w-100">
          <img className="loading_spin" src={loadSpiner} alt="loading" />
        </div>
      )}
    </>
  );
};

export default Detail;
