import React, { useEffect } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DropdownCategoryAspiration from "../dropdown-aspiration";
import { getCategory } from "../../actions/category-action";

function CategoryAspiration() {
  const dispatch = useDispatch();
  const categoryData = useSelector((state) => state.category);
  const { category } = categoryData;

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  let navigate = useNavigate();

  // console.log(category);
  return (
    <div className="col-3">
      <NavDropdown title="Categories" id="collasible-nav-dropdown">
        {category.map((e) => {
          return <DropdownCategoryAspiration key={e._id} {...e} />;
        })}
      </NavDropdown>
    </div>
  );
}

export default CategoryAspiration;
