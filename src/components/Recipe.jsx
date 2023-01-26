import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Absorber from "./Absorber";

function Recipe() {
  const [search, setSearch] = useState();
  const [show, setShow] = useState(false);
  const [item, setItem] = useState("");
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals);
        setShow(true);
      });
  }, [url]);

  const searchRecipe = (julia) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  };
  const findRecipe = (find) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${find}`);
  };
  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>Search recipe</h1>
          <h4>JULIA TARASOVA</h4>
        </div>
        <div className="searchBox">
          <input
            type="search"
            className="search-bar"
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchRecipe}
          />
        </div>
        <div className="container">
          {show ? <Absorber data={item} /> : "Not Found"}
        </div>
      </div>
    </>
  );
}
export default Recipe;
