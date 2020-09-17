import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const nightModeButton = useRef(null);

  function toggleNightMode() {
    let item = nightModeButton.current;

    if (!props.darkmode) {
      item.className = "fas fa-moon";
      props.setDarkmode(true);
    } else {
      item.className = "far fa-moon";
      props.setDarkmode(false);
    }
  }

  if (props.darkmode) {
    nightModeButton.current.className = "fas fa-moon";
  }

  return (
    <header>
      <nav>
        <Link to="/" className="home">
          <h1>Where in the world?</h1>
        </Link>

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
};

export default Navbar;
