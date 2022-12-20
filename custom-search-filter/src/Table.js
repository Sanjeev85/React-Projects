import React from "react";

function Table({ data }) {
   return (
      <table>
         <tbody>
            <tr>
               <th>Name</th>
               <th>Surname</th>
               <th>Email</th>
            </tr>
            {data.map((curr_user) => {
               return (
                  <tr key={curr_user.id}>
                     <td>{curr_user.first_name}</td>
                     <td>{curr_user.last_name}</td>
                     <td>{curr_user.email}</td>
                  </tr>
               );
            })}
         </tbody>
      </table>
   );
}

export default Table;
