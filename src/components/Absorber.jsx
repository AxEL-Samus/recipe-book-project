import React from "react";
import { useNavigate } from "react-router-dom";

function Absorber({ data }) {
  const navigate = useNavigate();
  console.log(data);
  const navigateHandler = (item) => {
    console.log(item);
    navigate(`/${item.idMeal}`);
  };
  return (
    <>
      {data ? (
        data.map((item) => {
          return (
            <div
              className="card"
              key={item.idMeal}
              onClick={() => navigateHandler(item)}
            >
              <img src={item.strMealThumb} alt="" />
              <h3>{item.strMeal}</h3>
            </div>
          );
        })
      ) : (
        <h1>Not Found Object, but i found Juliu Tarasovu</h1>
      )}
    </>
  );
}
export default Absorber;
