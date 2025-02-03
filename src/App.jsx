import { useState } from "react";
//import { users } from "./data/users.js";
import { users } from "./data/usersComplete.js";

import "./App.css";

// Good luck with the exercise 💪
function App() {

  const [usersList, setUsersList] = useState(users);

  const [allGender, setAll] = useState(false);
  const [womenGender, setWomen] = useState(false);
  const [menGender, setMan] = useState(false);
  const [byName, setByName] = useState(false);
  const [byAge, setByAge] = useState(false);
  const previousValueAll = false;


function handleAllClick() {    
    console.log("All genders: ", allGender ? "0" : "1 or 2");
    setAll((previousValueAll) => !previousValueAll);
    if (allGender) {
        setUsersList([]);
        return
    }
    setUsersList(users);
  }
function handleWomenClick() {
    console.log("womenGender: ", womenGender ? "0" : "1");
    setWomen((previousValueWomen) => !previousValueWomen);
    if (womenGender) {
        setUsersList(users);
        return;
    }
    setUsersList(users.filter((user) => user.gender=="female"));
  } 
function handleMenClick() {
    console.log("menGender: ", menGender ? "0" : "2");
    setMan((previousValueMen) => !previousValueMen);
    if (menGender) {
        setUsersList(users);
        return;
    }
    setUsersList(users.filter((user) => user.gender=="male"));
  }
function handleByNameClick() {
    console.log("byName ascending: ", byName ? true : false);
    setByName((previousValueByName) => !previousValueByName);
    setUsersList(users.sort((a, b) => {
        if (a.name.last < b.name.last) {
          return byName ? 1 : -1;
        } else {
          return byName ? -1 : 1;
        }
      }));
  }
function handleByAgeClick() {
    console.log("byAge ascending: ", byAge ? true : false);
    setByAge((previousValueByAge) => !previousValueByAge);
    setUsersList(users.sort((a, b) => {
        if (a.dob.age < b.dob.age) {
          return byAge ? -1 : 1;
        } else {
          return byAge ? 1 : -1;
        }
      }));
  }

  return <>

        <button onClick={() => handleAllClick()} className="buttonAll">
          {allGender ? "None" : "All Genders"}
        </button>

        <button onClick={() => handleWomenClick()} className="buttonWomen">
          {womenGender ? "Deselceted" : "Only Women"}
        </button>

        <button onClick={() => handleMenClick()} className="buttonMen">
          {menGender ? "Deselceted" : "Only Men"}
        </button>

        <button onClick={() => handleByNameClick()} className="buttonName">
          {byName ? "Order by name - DESC" : "Order by name - ASC"}
        </button>

        <button onClick={() => handleByAgeClick()} className="buttonAge">
          {byAge ? "Order by age - DESC" : "Order by age - ASC"}
        </button>
          
        <p> 
          User Liste: { usersList.map((user)=>{
            return <li>{ user.name.first } { user.name.last } { user.dob.age }</li>
          }) }
        </p>

        </>;
}

export default App;
