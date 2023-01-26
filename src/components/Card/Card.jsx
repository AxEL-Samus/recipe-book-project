import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Card() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  // if (id !== '') {
  useEffect(() => {
    try {
      axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52767`)
        .then((res) => setItem(res.data.meals[0]));
    } catch (error) {
      console.log(error);
    }
  }, []);
  // }
  const keys = Object.keys(item);
  const vals = Object.values(item);
  const neededIngr = keys.slice(9, 29);
  const neededMeasures = keys.slice(29, 49);
  const neededValsIngr = vals.slice(9, 29);
  const neededValsVeasures = vals.slice(29, 49);
  const ingrRegexp = /strIngredient\d\d?/gm;
  const measuresRegexp = /strMeasure\d\d?/gm;
  const ingrNamesArr = keys.filter((el) => el.match(ingrRegexp));
  const measuresArr = keys.filter((el) => el.match(measuresRegexp));
  let vId = '';
  if (item.strYoutube) {
    const ourUrl = item.strYoutube;
    // console.log(ourUrl);
    const str = ourUrl.split('=');
    vId = str[str.length - 1];
  }
  const clickHandler = () => {

  };
  return (
    <>
      <div className="content">
        <div className="innerContent">
          <img src={item.strMealThumb} alt="" />
          <div className="dish-btn">
            <h1>{item.strMeal}</h1>
            <button className="btn" type="button" onClick={clickHandler}>Add to favourites</button>
          </div>
          <h4>
            {item.strArea}
            {' '}
            Cuisine
          </h4>
          <h4>
            Category:
            {item.strCategory}
          </h4>

        </div>
      </div>
      <div className="recepie-details">

        <h2>
          Ingridients for:
          {item.strMeal}
        </h2>
        {ingrNamesArr.map((el, i) => ((neededValsIngr[i] !== null && neededValsIngr[i] !== '') ? (
          <div key={i}>
            {neededValsIngr[i]}
            {' '}
            :
            {' '}
            {neededValsVeasures[i]}
          </div>
        ) : null))}
        <div className="instructions">
          <h2>Instructions:</h2>
          <h5>
            {item.strInstructions}
          </h5>
        </div>
        <div className="video">

          <iframe className='ifr' src={`https://www.youtube.com/embed/${vId}`} />
        </div>
      </div>
    </>

  );
}
