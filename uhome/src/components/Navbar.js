import React from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar({ setCurrentPage }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">My Website</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button className="nav-link btn btn-link" onClick={() => setCurrentPage("home")}>Home</button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-link" onClick={() => setCurrentPage("about")}>About</button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-link" onClick={() => setCurrentPage("projects")}>Projects</button>
          </li>
          <li className="nav-item">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
