import "./App.css";

import { useState } from "react";
import users from "./Mock_Data.json";
import Table from "./Table";

function App() {
   const [query, setquery] = useState("");
   const search_keys = ["first_name", "last_name", "email"];

   const search = (data) => {
      return data.filter((item) =>
         search_keys.some((curr_key) =>
            item[curr_key].toLowerCase().includes(query)
         )
      );
   };

   return (
      <div className='app'>
         <input
            className='search'
            type='text'
            placeholder='Search...'
            onChange={(event) =>
               setquery((query) => event.target.value.toLowerCase())
            }
         />
         <Table data={search(users)} />
      </div>
   );
}

export default App;
