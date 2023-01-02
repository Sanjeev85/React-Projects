import React, { useState } from "react";
import "./App.css";
function ContactCard({ person }) {
  const [showAge, setShowAge] = useState(false);
  console.log("person ", person);
  return (
    <div className="contact-card">
      <img
        src={person.picture.large}
        alt="profile"
      />
      <div className="user-details">
        <p>Name: {`${person.name.first} ${person.name.last}`}</p>
        <p>Email: {person.email}</p>
        <button onClick={() => setShowAge(!showAge)}>Show Age</button>
        {showAge ? <p>Age: {person.dob.age}</p> : null}
      </div>
    </div>
  );
}

export default ContactCard;
