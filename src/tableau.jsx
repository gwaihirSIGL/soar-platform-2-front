import { createUseStyles } from "react-jss";
import React, { useEffect, useState } from "react";

const useStyles = createUseStyles(() => ({
  mainContainer: {
    display: "block",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    maxHeight: 50,
    justifyContent: "space-evenly",
    marginTop: "10px",
    marginBottom: "10px",
    borderRadius: 5,
    padding: [10, 20],
    backgroundColor: "#358df1",
  },
  listContainer: {
    display: "flex",
    flexBasis: "100%",
    flexDirection: "column",
  },
  itemContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    padding: [10, 20],
    border: `1px solid`,
    "&:hover": {
      backgroundColor: "#e7e7e7",
    },
    "&:nthChild(odd)": {
      backgroundColor: "#d9d9d9",
    },
    // td:nthChild(odd)
  },
  itemContainerTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    padding: [10, 20],
    border: `1px solid #EAEAEA`,
    backgroundColor: "#c1c1c1",
  },
  entryContainer: {
    display: "flex",
    flex: "1 1 0px",
    fontSize: 12,
    margin: [5, 5],
    justifyContent: "space-evenly",
  },
  inputContainer: {
    alignItems: "center",
    bordeRight: "@border",
    height: "100%",
    minWidth: "0",
    width: "40%",
    textAlign: "center",
    marginLeft: "66px",
  },
  entryContainerTitle: {
    display: "flex",
    flex: "1 1 0px",
    fontSize: 12,
    color: "#1010BE",
    justifyContent: "space-evenly",
    margin: [5, 70],
  },
  titleContainer: {
    color: "#FFFFFF",
    margin: 0,
  },
  displayTeamsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: "5px",
  },
  button: {
    // -webkit-appearance: 'button',
    // -webkit-writing-mode: 'horizontal-tb !important',
    textRendering: "auto",
    color: "buttontext",
    letterSpacing: "normal",
    wordSpacing: "normal",
    textTransform: "none",
    textIndent: "0px",
    textShadow: "none",
    display: "inline-block",
    textAlign: "center",
    alignItems: "flex-start",
    cursor: "default",
    backgroundColor: "buttonface",
    boxSizing: "border-box",
    margin: "0em",
    font: "400 11px system-ui",
    padding: "1px 7px 2px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186)",
    borderImage: "initial",
  },
  buttonMod: {
    "&:hover": {
      color: "#358df1",
      boxShadow: "0px 0px 6px 0px #358df1",
    },
    "&:focus": {
      boxShadow: "inset 0 0 0 2em var(--hover)",
    },
  },
  buttonCancel: {
    "&:hover": {
      color: "red",
      boxShadow: "0px 0px 6px 0px red",
    },
    "&:focus": {
      boxShadow: "inset 0 0 0 2em var(--hover)",
    },
  },
}));

const BASE_URL = process.env.REACT_APP_BASE_URL;

export function Tableau() {
  const [userList, setUserList] = useState([
    {
      id: 1,
      name: "Dodo est nul",
    },
    {
      id: 1,
      name: "Walid est magique",
    },
  ]);

  const loadGet = () => {
    fetch(`http://${BASE_URL}/user`)
      .then((res) => res.json())
      .then((result) => {
        console.log("Tableau -- Res ", result)
        setUserList(result);
      });
  };

  const patch = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Test POST",
        // code_postal: "91600",
        // valeur_fonciere: 1,
        // type_local: "Maison",
        // nb_pieces_principales: 2,
      }),
    };

    loadGet();
  };

  useEffect(() => {
    loadGet();
  }, []);


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {userList.map((elem) => {
            return (
            <tr>
              <td>{elem.id}</td>
              <td>{elem.name}</td>
              <td>Supprimer</td>
            </tr>);
          })}
        </tbody>
      </table>
      <div>
        <button onClick={patch}>POST</button>
      </div>
    </div>
  );

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
