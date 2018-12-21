import React from "react";

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {props.totalCount}
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
