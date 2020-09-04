import React, { useState } from "react";

import { Avatar } from "@material-ui/core";

import "./chat-screen.style.css";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Hunterwolf",
      message: "What's up",
      image:
        "https://lh3.googleusercontent.com/ogw/ADGmqu9W1rP_TN9_2YInP7nQZmQhZKwyf3J5nJtShBO1=s32-c-mo",
    },
    {
      name: "Hunterwolf",
      message: "Where are u?",
      image:
        "https://lh3.googleusercontent.com/ogw/ADGmqu9W1rP_TN9_2YInP7nQZmQhZKwyf3J5nJtShBO1=s32-c-mo",
    },
    {
      message: "Hi! I am at home!",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chat-screen">
      <p className="chatScreen__alert">YOU MATCHED WITH ELLEN ON 10/08/2020</p>

      {messages.map((message, idx) =>
        message.name ? (
          <div className="chatScreen__message" key={idx}>
            <Avatar src={message.image} alt={message.name} />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message" key={idx}>
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <div>
        <form className="chatScreen__inputForm" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chatScreen__inputField"
            placeholder="Type a message..."
          />
          <button className="chatScreen__inputButton">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ChatScreen;
