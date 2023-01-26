import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Absorber from "./Absorber";

function Recipe() {
  const [search, setSearch] = useState();
  const [show, setShow] = useState(false);
  const [item, setItem] = useState("");
  c
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [list, setList] = useState([]);
  const [cat, setCat] = useState({})

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals);
        setShow(true);
      });
  }, [url]);

  //кнопки

  useEffect(() => { 
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals);
        setList(data.meals.map((el) => el.strCategory));
      });
  }, []);

  // useEffect(() => {
  //   fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setItem(data.meals)
  //     });
  // }, []);

  console.log(list);

  const searchRecipe = (julia) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  };
  const findRecipe = (find) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${find}`);
  };

  function buttonHandler(nameTag){
  setCat(nameTag)
  }

  console.log(item)
  return (
    <>
      <div className="main">
        <div className="heading">
          <h4>Search recipe:</h4>
        </div>
        <div className="searchBox">
          <input
            type="search"
            className="search-bar"
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchRecipe}
          />
          {list.map((el) => (
            <button onClick={() => buttonHandler(el)}>{el}</button>
          ))}
        </div>
        <div className="container">
          {show ? <Absorber data={item} /> : "Not Found"}
        </div>
      </div>
    </>
  );
}
export default Recipe;
