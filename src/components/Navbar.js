import React from "react";
import app from "../base";

import "./style.css";
function Navbar() {
  return (
    <div>
      <header>
        <a href="#" className="logo"></a>
        <ul>
          <li>
            <a href="#catalogue">Catalogue</a>
          </li>
          <li>
            <a href="/" onClick={() => app.auth().signOut()}>
              Sign out
            </a>
          </li>
        </ul>
      </header>
      <section className="banner"></section>
    </div>
  );
}

export default Navbar;
