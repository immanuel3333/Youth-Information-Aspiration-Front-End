import React from "react";
import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function DropdownCategoryAspiration(props) {
  let navigate = useNavigate();
  // console.log(props);
  return (
    <NavDropdown.Item
      onClick={() => {
        navigate(`/searchAspiration/${props._id}`);
      }}
    >
      {props.category_name}
    </NavDropdown.Item>
  );
}

export default DropdownCategoryAspiration;
