import { useState, useEffect } from "react";
import "./App.css";

// Good luck with the exercise 💪
function App() {
  const [allGender, setAll] = useState(false);
  const [womenGender, setWomen] = useState(false);
  const [menGender, setMan] = useState(false);
  const [byName, setByName] = useState(false);
  const [byAge, setByAge] = useState(false);

  const previousValueAll = false;

/* console.log("All genders::::", allGender ? "0" : "1 or 2");
console.log("womenGender:", womenGender ? "0" : "1");
console.log("menGender:", menGender ? "0" : "2");
console.log("byName ascending:", byName ? true : false);
console.log("byAge ascending:", byAge ? true : false);
 */

  useEffect(() => {
    console.log("All genders: ", allGender ? "0" : "1 or 2");
  }, [allGender]);
  
  useEffect(() => {
    console.log("womenGender: ", womenGender ? "0" : "1");
  }, [womenGender]);
  
  useEffect(() => {
    console.log("menGender: ", menGender ? "0" : "2");
  }, [menGender]);

  useEffect(() => {
    console.log("byName ascending: ", byName ? true : false);
  }, [byName]);

  useEffect(() => {
    console.log("byAge ascending: ", byAge ? true : false);
  }, [byAge]);



  function handleAllClick() {
    setAll((previousValueAll) => !previousValueAll);
  }
  function handleWomenClick() {
    setWomen((previousValueWomen) => !previousValueWomen);
  } 
  function handleMenClick() {
    setMan((previousValueMen) => !previousValueMen);
  }
function handleByNameClick() {
    setByName((previousValueByName) => !previousValueByName);
  }
function handleByAgeClick() {
    setByAge((previousValueByAge) => !previousValueByAge);
  }

  return <>

        <button onClick={() => handleAllClick()} className="buttonAll">
          {allGender ? "Deselceted" : "All Genders"}
        </button>

        <button onClick={() => handleWomenClick()} className="buttonWomen">
          {womenGender ? "Deselceted" : "Only Women"}
        </button>

        <button onClick={() => handleMenClick()} className="buttonMen">
          {menGender ? "Deselceted" : "Only Men"}
        </button>

        <button onClick={() => handleByNameClick()} className="buttonName">
          {byName ? "Deselceted" : "Order by Name - Ascending"}
        </button>

        <button onClick={() => handleByAgeClick()} className="buttonAge">
          {byAge ? "Deselected" : "Order by age - Ascending"}
        </button>
          
        </>;
}

export default App;
