import React from "react";
import "./navbar.scss";

export default function navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <button className="nav-btn nav-btn-list">List</button>
        <button className="nav-btn nav-btn-today">Today</button>
        <button className="nav-btn nav-btn-week">Week</button>
      </nav>
    </div>
  );
}
