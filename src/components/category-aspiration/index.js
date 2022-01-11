import React from "react";
import { NavDropdown } from "react-bootstrap";
function CategoryAspiration() {
  return (
    <div className="col-3">
      <NavDropdown title="Categories" id="collasible-nav-dropdown">
        <NavDropdown.Item>HAM</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}

export default CategoryAspiration;
