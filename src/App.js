import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [listOfFriends, setListOfFriends] = useState([]);

  const addFriend = () => {
    Axios.post("http://localhost:3001/addfriend", {
      name: name,
      birthdate: birthdate,
    }).then((response) => {
      setListOfFriends([
        ...listOfFriends,
        { _id: response.data._id, name: name, birthdate: birthdate },
      ]);
    });
  };

  const updateFriend = (id) => {
    const newBirthdate = prompt("Enter new birthdate (YYYY-MM-DD): ");

    Axios.put("http://localhost:3001/update", {
      newBirthdate: newBirthdate,
      id: id,
    }).then(() => {
      setListOfFriends(
        listOfFriends.map((val) => {
          return val._id == id
            ? { _id: id, name: val.name, birthdate: newBirthdate }
            : val;
        })
      );
    });
  };

  const deleteFriend = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then(
      () => {
        setListOfFriends(
          listOfFriends.filter((val) => {
            return val._id != id;
          })
        );
      });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/read")
      .then((response) => {
        setListOfFriends(response.data);
      })
      .catch(() => {
        console.log("ERR");
      });
  }, []);

  return (
    <div className="App">
      <h1 className="heading">Birthday Tracker</h1>
      <div className="inputs">
        <input
          type="text"
          placeholder="Friend name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="date"
          placeholder="Friend birthdate..."
          onChange={(event) => {
            setBirthdate(event.target.value);
          }}
        />
        <button onClick={addFriend}>Add Friend</button>
      </div>

      <div className="listOfFriends">
        {listOfFriends.map((val) => {
          return (
            <div className="friendContainer">
              <div className="friend">
                <h3>Name: {val.name}</h3>
                <h3>Birthdate: {val.birthdate}</h3>
              </div>
              <button
                onClick={() => {
                  updateFriend(val._id);
                }}
              >
                Update
              </button>
              <button
                id="removeBtn"
                onClick={() => {
                  deleteFriend(val._id);
                }}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;