import "./App.css";
import JSONDATA from "./MOCK_DATA.json";
import { useState } from "react";


function App() {
  
  const [searchTerm, setSearchTerm] = useState("");

  const ifConsist = (currItem) => {
    if (searchTerm == "") return currItem
    else if (currItem.first_name.toLowerCase().startsWith(searchTerm.toLowerCase())) 
      return currItem
  }

  const mapData = (currItem, index) => {
    return (
      <div key={index}>
        <p>{currItem.first_name}</p>
      </div>
    )
  }


  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm((searchTerm) =>  (event.target.value));
        }}
      />
      {
        JSONDATA.filter(ifConsist).map(mapData)
      }
    </div>
  );
}

export default App;

