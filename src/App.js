import './App.css';
import React, { useState, useEffect } from "react";
import { IconButton, TableBody, TableRow, TableCell } from '@mui/material';
import { DeleteIcon, EditIcon } from '@mui/icons-material';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [userList, setUserList] = useState([]);
  const userListPrint = [];

  function Patch() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          code_postal: "91600"
        }
      )
    };

    useEffect(() => {
      fetch(`${BASE_URL}/property`, requestOptions)
        .then(res => res.json())
        .then(
          (result) => {
            setUserList(result);
          }
        )
    })
  }

  useEffect(() => {
    fetch(`${BASE_URL}/property`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUserList(result);
        },
      )
  }, [])

  if (!isLoaded)
    return <div>Chargement...</div>;
  else
    console.table(userList);
    for (var i = 0; i < userList.length; i++) {
      userListPrint.push(
          <tr>
            <td>
              {userList[i].id}
            </td>
            <td>
              {userList[i].code_postal}
            </td>
            <td>
              {/* <button onClick={Patch()}>oui</button> */}
            </td>
          </tr>
      )
    }

    return (
      <div>
         <table>
           <thead>
             <tr>
               <th>Id</th>
               <th>Code Postal</th>
             </tr>
           </thead>
           <tbody>
             {userListPrint}
           </tbody>
         </table>
         <div>
          
         </div>
       </div>
    )

    // return (
    //   <div>
    //     <table>
    //       <thead>
    //         <tr>
    //           <th>Id</th>
    //           <th>Code Postal</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {userListPrint}
    //       </tbody>
    //     </table>
    //     <div>
          
    //     </div>
    //   </div>
    // );

    // return(
    //   <TableBody>
    //   {this.state.serviceData.map(n => {
    //     return (
    //       <TableRow key={n.id}>
    //         <TableCell component="th" scope="row">
    //           {deleteIcon}
    //           {editIcon}
    //         </TableCell>
    //         <TableCell>{n.domain}</TableCell>
    //         <TableCell>{n.service_name}</TableCell>
    //       </TableRow>
    //     )
    //   })}
    //   </TableBody>
    // )
}

export default App;
