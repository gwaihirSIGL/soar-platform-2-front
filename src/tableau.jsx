import { createUseStyles } from "react-jss";
import React, { useEffect, useState } from "react";

import deleteICON from "./delete.png";
import editICON from "./edit.png";
import { autocompleteClasses } from "@mui/material";

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
    margin: "auto",
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
    margin: "auto",
    font: "400 11px system-ui",
    padding: "1px 7px 2px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186)",
    borderImage: "initial",
    margin: "auto",
  },
  buttonMod: {
    margin: "auto",
    "&:hover": {
      color: "#358df1",
      boxShadow: "0px 0px 6px 0px #358df1",
    },
    "&:focus": {
      boxShadow: "inset 0 0 0 2em var(--hover)",
    },
  },
  buttonCancel: {
    margin: "auto",

    "&:hover": {
      color: "red",
      boxShadow: "0px 0px 6px 0px red",
    },
    "&:focus": {
      boxShadow: "inset 0 0 0 2em var(--hover)",
    },
  },
  editimg: {
    width: "3%",
    borderRadius: "50%",
    "&:hover": {
      color: "red",
      boxShadow: "0px 0px 6px 0px red",
    },
  },
  deleteimg: {
    width: "3%",
    borderRadius: "50%",

    "&:hover": {
      color: "red",
      boxShadow: "0px 0px 6px 0px red",
    },
  },

  imgcontainer: {
    minHeight: "37px",
    minWidth: "200",
  },
  itemContainer: {
    minHeight: "37px",
    minWidth: "200px",
    maxWidth: "205px",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
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
      id: 2,
      name: "Walid est magique",
    },
  ]);

  const loadGet = () => {
    fetch(`http://${BASE_URL}/user`)
      .then((res) => res.json())
      .then((result) => {
        console.log("Tableau -- Res ", result);
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

  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null,
  });
  const [unitValue, setUnitValue] = useState("");

  const onEdit = ({ id, currentUnit }) => {
    setInEditMode({
      status: true,
      rowKey: id,
    });
    setUnitValue(currentUnit);
  };

  const onSave = ({ id, newUnitVALUE }) => {
    // POST HERTE
  };

  const onCancel = () => {
    // reset the inEditMode state value
    setInEditMode({
      status: false,
      rowKey: null,
    });
    // reset the unit  state value
    setUnitValue("");
  };

  const styles = useStyles();
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
                <td>
                  <div className={styles.itemContainer}>
                    {inEditMode.status && inEditMode.rowKey === elem.id ? (
                      <input
                        value={unitValue}
                        className={styles.inputContainer}
                        onChange={(event) => setUnitValue(event.target.value)}
                      />
                    ) : (
                      elem.name
                    )}
                  </div>
                </td>
                <td>
                  {inEditMode.status && inEditMode.rowKey === elem.id ? (
                    <div className={styles.imgcontainer}>
                      <button
                        className={`${styles.button} ${styles.buttonMod}`}
                        onClick={() =>
                          onSave({ id: elem.id, newUnitVALUE: unitValue })
                        }
                      >
                        Save
                      </button>

                      <button
                        className={`${styles.button} ${styles.buttonCancel}`}
                        style={{ marginLeft: 8 }}
                        onClick={() => onCancel()}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className={styles.imgcontainer}>
                      <img
                        src={editICON}
                        className={styles.editimg}
                        alt="Edit"
                        onClick={() =>
                          onEdit({ id: elem.id, currentUnit: elem.id })
                        }
                      />
                      <img
                        src={deleteICON}
                        className={styles.deleteimg}
                        alt="Delete"
                        onClick={() =>
                          onEdit({ id: elem.id, currentUnit: elem.id })
                        }
                      />
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={patch}>POST</button>
      </div>
    </div>
  );
}
