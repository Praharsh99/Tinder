import React, { useState, useEffect } from "react";

import db from "../../firebase/firebase";

import TinderCard from "react-tinder-card";

import "./tinder-cards.style.css";

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    db.collection("people").onSnapshot((snapshot) => {
      setPeople(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.id}
            preventSwipe={["up", "down"]}
          >
            <div
              className="tinderCards__card"
              style={{ backgroundImage: `url(${person.data.url})` }}
            >
              <h3>{person.data.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
