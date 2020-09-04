import React from "react";

import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import TinderCards from "./components/tinder-cards/tinder-cards.component";
import SwipeButtons from "./components/swipe-buttons/swipe-buttons.component";
import Chats from "./components/chats/chats.component";
import ChatScreen from "./components/chat-screen/chat-screen.component";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/chats/:person">
          <ChatScreen />
        </Route>

        <Route exact path="/chats">
          <Chats />
        </Route>

        <Route path="/">
          <TinderCards />
          <SwipeButtons />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
