import React from "react";
import { Routes, Route } from "react-router-dom";
import Recipe from "./Recipe";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Recipe />} />
      </Routes>
    </>
  );
}
