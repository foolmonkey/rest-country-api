import React, { useRef } from "react";

function Navbar() {
  const nightModeButton = useRef(null);

  function toggleNightMode() {
    let item = nightModeButton.current;

    if (item.className === "far fa-moon") {
      item.className = "fas fa-moon";
    } else {
      item.className = "far fa-moon";
    }
  }

  return (
    <header>
      <nav>
        <h1>Where in the world?</h1>

        <button id="button-darkmode" onClick={toggleNightMode}>
          <i
            id="icon-darkmode"
            className="far fa-moon"
            ref={nightModeButton}
          ></i>
          <p>Dark Mode</p>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
