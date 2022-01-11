import React, { useEffect, useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { useSelector, useDispatch, connect } from "react-redux";
import { getAspiration } from "../../../actions/aspiration-action";
import { useNavigate } from "react-router-dom";

import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import SearchOffIcon from "@mui/icons-material/SearchOff";

function SearchAspiration() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const aspirationData = useSelector((state) => state.aspiration);
  const { aspiration } = aspirationData;

  useEffect(() => {
    dispatch(getAspiration());
  }, [dispatch]);

  //   return (
  //     <Form className="d-flex">
  //       <FormControl
  //         type="search"
  //         placeholder="Search"
  //         className="me-2"
  //         aria-label="Search"
  //       />
  //       {/* <Button variant="outline-success">Search</Button> */}
  //     </Form>
  //   );
  // }

  console.log(aspiration);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = aspiration.data.Aspiration.filter((value) => {
      return value.aspiration_title
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  return (
    <div className="search">
      <div className="searchInputs">
        <Form className="d-flex">
          <FormControl
            type="text"
            placeholder="Enter the aspiration title..."
            value={wordEntered}
            onChange={handleFilter}
          />
          <div className="searchIcon">
            {filteredData.length === 0 ? (
              <SearchIcon />
            ) : (
              <SearchOffIcon id="clearBtn" onClick={clearInput} />
            )}
          </div>
        </Form>
        {/* <input
          type="text"
          placeholder="enter the aspiration title"
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <SearchOffIcon id="clearBtn" onClick={clearInput} />
          )}
        </div> */}
      </div>

      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            // console.log(value);
            return (
              <div
                className="dataItem link"
                onClick={() => {
                  navigate(`/detail-aspiration/${value._id}`);
                }}
              >
                <p>{value.aspiration_title} </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default SearchAspiration;
