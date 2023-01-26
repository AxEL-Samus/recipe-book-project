import React from 'react';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">ХЪ</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/register">register</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/logout">logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  // <header role="banner" className="mar-t-5 pad-t-2 pad-b-4 pad-s-1 wrap-float bg-white">
  //   <div className="max-w-700 center wrap-float">
  //     <nav className="clearfix mar-b-1">
  //       <ul className="no-bullets no-margin no-padding right">
  //         <li className="pipe-separate t-light-green left"><a href="/register">register</a></li>
  //         <li className="pipe-separate t-light-green left"><a href="/login">login</a></li>
  //         <li className="pipe-separate t-light-green left"><a href="/home">home</a></li>
  //       </ul>
  //       <div className="pipe-separate t-light-green left"><a href="/logout">logout</a></div>
  //     </nav>
  //   </div>
  // </header>
  );
}
