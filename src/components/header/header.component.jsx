import React from "react";

import { Link, useLocation, useHistory, history } from "react-router-dom";

import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import "./header.style.css";

function Header() {
  const location = useLocation();
  const history = useHistory();

  return (
    <div className="header">
      <IconButton onClick={() => history.push("/")}>
        {location.pathname === "/" ? <PersonIcon /> : <ArrowBackIcon />}
      </IconButton>
      {console.log(location)}
      <Link to="/">
        <img
          className="header__logo"
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          alt="Tinder"
        />
      </Link>

      <Link to="/chats">
        <IconButton>
          <ForumIcon />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
