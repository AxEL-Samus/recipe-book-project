import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Card from './Card/Card';
import Header from './Header';
// import '../styles/styles.css';

export default function App() {
  return (
    <>
      <Header />
      <Card />
      {/* <Routes>
        <Route path="/api/:id" element={<Card />} />
      </Routes> */}
    </>
  );
}
