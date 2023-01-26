import React, { useState } from 'react';
import axios from 'axios';

export default function SignUpPage() {
  const [error, setError] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    axios.post('/api/user/signup', formData)
      .then(() => {
        window.location = '/';
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="exampleInputName" className="form-label">Login</label>
        <input type="text" name="login" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputName" className="form-label">Name</label>
        <input type="text" name="name" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" name="email" className="form-control" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" name="pass" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      {error.message && <div style={{ color: 'red' }}>{error.message}</div>}
    </form>
  );
}
