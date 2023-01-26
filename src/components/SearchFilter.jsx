import React, { useEffect, useState } from 'react';

import axios from 'axios';

export default function SearchFilter() {
  const [foodCard, setfoodCard] = useState([]);
  const [value, setValue] = useState('');

  //   const search = () => {
  //     axios.get('')
  //       .then((response) => {
  //         setfoodCard(response.data);
  //       });
  //   };
  //   useEffect(() => {
  //     search();
  //   }, []);
  
  const filterFood = foodCard.filter((el) => {
    if (el.strArea.toLowerCase() === value.toLowerCase()) {
      return el;
    } if (el.strCategory.toLowerCase() === value.toLowerCase()) {
      return el;
    } if (el.strMeal.toLowerCase() === value.toLowerCase()) {
      return el;
    }
  });

  return (
    <>
      <div className="input-group input-group-lg">
        <label className="input-group-text" id="inputGroup-sizing-lg">
          Search Your Food Recipe
          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
        </label>
        <input type="submit" value="Search" onChange={(evt) => setValue(evt.target.value)} />
      </div>
      <div className="content">
        {filterFood.map((e, i) => {
          <Card e={e} key={i} />;
        })}
        ,
      </div>
    </>
  );
}
