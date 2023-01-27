import axios from "axios";
import React, { useEffect, useState } from "react";
import Absorber from "./Absorber";

export default function Collection({ user }) {
  const [show, setShow] = useState(false);
  const [collection, setCollection] = useState([]);
  //   console.log(user);

  useEffect(() => {
    axios(`http://localhost:3002/collection/${user.id}`).then(
      (res) => setCollection(res.data),
      setShow(true)
    );
  }, []);

  return (
    <>
      <h2>My collection</h2>;
      <div className="container">
        {show ? <Absorber data={collection} /> : "Not Found"}
      </div>
    </>
  );
}
