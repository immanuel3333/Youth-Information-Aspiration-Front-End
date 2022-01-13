import React, { useEffect } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  getAspiration,
  getAspirationByCategory,
} from "../../actions/aspiration-action";
import DropdownCategoryAspiration from "../dropdown-aspiration";

function CategoryAspiration() {
  const aspirationData = useSelector((state) => state.aspiration);
  const { aspiration } = aspirationData;
  const dispatch = useDispatch();
  let navigate = useNavigate();

  // const getCategoryName = aspiration.user_id.map((e) => {
  //   return e;
  // });

  // console.log(aspiration);
  // console.log(getCategoryName);
  return (
    <div className="col-3">
      <NavDropdown title="Categories" id="collasible-nav-dropdown">
        {aspiration.map((e) => {
          return <DropdownCategoryAspiration key={e._id} {...e} />;
        })}
      </NavDropdown>
    </div>
  );
}

export default CategoryAspiration;
