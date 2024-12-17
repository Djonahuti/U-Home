import React from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar({ currentPage, setCurrentPage, toggleSidebar }) {
  return (
    <nav className="sb-topnav navbar navbar-expand">
      {/* Navbar-Brand */}
      <a
        className="navbar-brand ps-3 text-gradient"
        href="#!"
        onClick={() => setCurrentPage("home")}
      >
        U Home
      </a>
      {/* Sidebar Toggle */}
      <button
        className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
        id="sidebarToggle"
        onClick={toggleSidebar}
      >
        <i className="fas fa-bars"></i>
      </button>
      {/* Navbar Search */}
      <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
        <div className="input-group dav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
            {/* Repeat Navbar links */}
            {["home", "about", "work", "education", "certificate", "projects", "contact"].map(
              (page) => (
                <li key={page} className="nav-item">
                  <a
                    className={`nav-link ${currentPage === page ? "active-link" : ""}`}
                    href={`#${page}`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </form>
      {/* Navbar */}
      <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li className="nav-item">
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
