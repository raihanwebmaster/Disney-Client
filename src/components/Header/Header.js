import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import {
  handleGoogleSignIn,
  handleSignOut,
  initializeLoginFrameWork,
} from "./firebaseManager";
import logo from "../../images/logo.svg";
import home from "../../images/home-icon.svg";
import search from "../../images/search-icon.svg";
import watchlist from "../../images/watchlist-icon.svg";
import original from "../../images/original-icon.svg";
import movie from "../../images/movie-icon.svg";
import series from "../../images/series-icon.svg";
import "./Header.css";

const Header = (props) => {
  initializeLoginFrameWork();

  const [loggedInUser, setLoggedInUser, setToken] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/home" } };

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      if (res) {
        handleRes(res, true);
      }
    });
  };
  const signOut = () => {
    setToken(null);
    sessionStorage.removeItem("token");
    handleSignOut().then((res) => {
      history.replace("/");
      handleRes(res, false);
    });
  };

  const handleRes = (res, redirect) => {
    setLoggedInUser(res);
    if (redirect && res.isSignedIn) {
      history.replace(from);
    }
  };
  return (
    <nav>
      <Link to="/">
        <a className="Logo">
          <img src={logo} alt="Disney+" />
        </a>
      </Link>
      {!loggedInUser.name ? (
        <div className="Login" onClick={googleSignIn}>
          Login
        </div>
      ) : (
        <>
          <div className="NavMenu">
            <a href="/home">
              <img src={home} alt="HOME" />
              <span>HOME</span>
            </a>
            <a>
              <img src={search} alt="SEARCH" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src={watchlist} alt="WATCHLIST" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src={original} alt="ORIGINALS" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src={movie} alt="MOVIES" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src={series} alt="SERIES" />
              <span>SERIES</span>
            </a>
          </div>
          <div className="signout">
            <img
              className="userImg"
              src={loggedInUser.photo}
              alt={loggedInUser.name}
            />
            <div className="dropdown">
              <span onClick={signOut}>Sign out</span>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;
