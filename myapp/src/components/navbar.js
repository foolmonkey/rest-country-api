import React from "react";

function Navbar() {
  return (
    <header>
      <nav>
        <h1>Where in the world?</h1>

        <button id="button-darkmode">
          <i id="icon-darkmode" className="far fa-moon"></i>
          <i className="fas fa-moon"></i>

          <p>Dark Mode</p>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
