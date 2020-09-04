import React from "react";

import { Link } from "react-router-dom";

import { Avatar } from "@material-ui/core";

import "./chat.style.css";

const Chat = ({ profilePic, message, timestamp, name }) => {
  return (
    <Link to={`/chats/${name}`}>
      <div className="chat">
        <Avatar className="chat__image" alt={name} src={profilePic} />

        <div className="chat__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>

        <p className="chat__timestamp">{timestamp}</p>
      </div>
    </Link>
  );
};

export default Chat;
