import React, { useState, useEffect } from "react";
import { Button, NavDropdown, Form, FormControl, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../../actions/auth-action";
import logo from "../../assets/image/yia-logo.png";
import newsJson from "../../data/json/news.json";
import "../search/search_aspirasi/SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import Swal from "sweetalert2";
import { getCategory } from "../../actions/category-action";
import { getNews } from "../../actions/news-action";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [newsList, setNewsList] = useState();
  

  const { isLoggedIn } = useSelector((state) => state.auth);
  const user = useSelector((state) => state.auth.user);
  const { news } = useSelector((state) => state.news);
  let userTrue;

  if (isLoggedIn) {
    userTrue = user.msg;
  } else {
    userTrue = "belum login";
  }

  function onFormSubmit(e) {
    e.preventDefault();
    const [name, category] = this.state;
    navigate("/detail-news");
  }

  const handleLogout = () => {
    setLoading(true);

    dispatch(logout());
  };

  // const onChangeSearch = (e) => {
  //   const word = e.target.value;
  //   setWordEntered(word);
  //   console.log(word);
  // };

  // const handleSearch = (e) => {
  //   e.preventDefault();
  // };

  // const updateInput = async (input) => {
  //   const filtered = news.filter((country) => {
  //     return country.name.toLowerCase().includes(input.toLowerCase());
  //   });
  //   setWordEntered(input);
  //   setNewsList(filtered);

  //   console.log(filtered);
  // };

  // const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = news.filter((value) => {
      return value.news_title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const handleLogin = async () => {
    Swal.fire({
      position: "top-center",
      icon: "warning",
      title: "Login First!",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const categoryData = useSelector((state) => state.category);
  const { category } = categoryData;

  useEffect(() => {
    dispatch(getCategory());
    // dispatch(getNews());
  }, [dispatch]);
  // console.log(category);

  return (
    <header id="header" className="fixed-top header-nav">
      <div class="container-fluid d-flex align-items-center justify-content-between">
        <Link
          to="/"
          class="logo"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <img
            src={logo}
            alt=""
            className="img-fluid"
            style={{
              height: "50px !important",
              width: "100px",
              objectFit: "cover",
            }}
          />
        </Link>
        {/* <h1 class="logo">
          <a href="/">Youth Information Aspiration</a>
        </h1> */}

        <Nav id="navbar" class="navbar">
          <ul>
            <li>
              <Link
                class="nav-link scrollto active"
                to="/"
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Home
              </Link>
            </li>
            {isLoggedIn ? (
              <li>
                <Link
                  class="nav-link scrollto"
                  to="/aspiration"
                  onClick={() => {
                    window.location.href = "/aspiration";
                  }}
                >
                  Aspiration
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  class="nav-link scrollto"
                  to="/login"
                  onClick={handleLogin}
                >
                  Aspiration
                </Link>
              </li>
            )}

            <li class="dropdown">
              <NavDropdown
                title="Article Category"
                id="collasible-nav-dropdown"
              >
                {category.map((e) => {
                  return (
                    <NavDropdown.Item
                      onClick={() => {
                        window.location.href = `/search/${e._id}`;
                      }}
                    >
                      {e.category_name}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            </li>
            <li>
              <Link class="nav-link scrollto" to="/about">
                About
              </Link>
            </li>

            <div className="search">
            <div className="searchInputs">
              <div className="inputWithIcon">
            <i class="fas fa-search"></i>
              <input
                
                type="text"
                placeholder="Search"
                value={wordEntered}
                onChange={handleFilter}
                id="clearBtn" 
                onClick={clearInput}
              />
              </div>
              
              {/* <div className="searchIcon">
                {filteredData.length === 0 ? (
                  ""
                ) : (
                  <SearchOffIcon  />
                )}
               </div> */}

              

              </div>

                {filteredData.length != 0 ? (
                  <div className="dataResult">
                    {filteredData.slice(0, 15).map((value, key) => {
                      // console.log(value);
                      return (
                        <div
                          className="dataItem link"
                          onClick={() => {
                            navigate(`/detail-news/${value._id}`);
                          }}
                        >
                          <p>{`${value.news_title.slice(0, 35)} ....`} </p>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div></div>
                )}
              </div>

              {/* {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )} */}

              {/* {loading ? (
                  <h4>Loading ...</h4>
                ) : (
                  newsJson.filter((value) => {
                    if(searchTitle == "") {
                      return value
                    } else if (value.title.toLowerCase().includes(searchTitle.toLowerCase())) {
                      return value;
                    }
                  })
                )} */}

              {/* {news.filter((val) => {
                if (newsList == "") {
                  return val
                } else if  (val.news_title.toLowerCase().include(newsList.toLowerCase())) {
                  return val 
                };
              }).map((val, key) => {
                return (
                  <div className="news" key={key}>
                    <p>{val.news_title}</p>

                  </div>
                )
              })} */}

              <li>
                {isLoggedIn ? (
                  <NavDropdown
                    title={
                      <span>
                        <i
                          className="far fa-user-circle"
                          style={{ fontSize: "24px" }}
                        >{userTrue.image}</i>
                      </span>
                    }
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="/profile">
                      {userTrue.username}
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Your Aspiration
                    </NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item className="bg" onClick={handleLogout}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <Link class="getstarted scrollto" to="/login">
                    Login
                  </Link>
                )}
              </li>
            
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </Nav>
      </div>
    </header>
  );
}

export default Header;
