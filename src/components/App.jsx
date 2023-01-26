import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Card from './Card';
import Header from './Header';
import LoginPage from './LoginPage';
import Recipe from './Recipe';
import SignUpPage from './SignUpPage';

export default function App({ user }) {
  return (
    <>
      <Header user={user} />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/logout" element={<Recipe />} />
        <Route path="/:id" element={<Card user={user} />} />
        <Route path="/" element={<Recipe />} />
      </Routes>
    </>
  );
}
