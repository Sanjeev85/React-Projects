import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setContacts(data.results);
      });
  }, []);

  return contacts.map((person, ind) => (
    <ContactCard
      key={ind}
      person={person}
    />
  ));
}

export default App;
