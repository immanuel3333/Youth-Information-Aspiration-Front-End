import React, { useEffect } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  getAspiration,
  getAspirationByCategory,
} from "../../actions/aspiration-action";

function DropdownCategoryAspiration(props) {
  const aspirationData = useSelector((state) => state.aspiration);
  const { aspiration } = aspirationData;
  const dispatch = useDispatch();
  let navigate = useNavigate();
  // console.log(props);

  const getCategoryName = props.category_id.map((e) => {
    return e.category_name;
  });

  const getCategoryId = props.category_id.map((e) => {
    return e._id;
  });
  // console.log(getCategoryName);
  // console.log(getCategoryId);

  return (
    <NavDropdown.Item
      onClick={() => {
        navigate(`/searchAspiration/${getCategoryId}`);
      }}
    >
      {getCategoryName}
    </NavDropdown.Item>
  );
}

export default DropdownCategoryAspiration;
