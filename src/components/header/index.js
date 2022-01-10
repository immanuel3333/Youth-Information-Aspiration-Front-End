import React, { useState } from "react";
import { Button, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../../actions/auth-action";
import logo from "../../assets/image/yia-logo.png";
import newsJson from "../../data/json/news.json";


function Header() {
  const navigate = useNavigate();
  function onFormSubmit(e) {
    e.preventDefault();
    const [name, category] = this.state;
    navigate("/detail-news");
  }

  const { isLoggedIn } = useSelector((state) => state.auth);
  const user = useSelector((state) => state.auth.user);

  const userTrue = user.msg;
  console.log(userTrue);

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {/* Render custom icon here */}
      &#x25bc;
      {children}
    </a>
  ));

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    setLoading(true);

    dispatch(logout());
  };

  // const [filteredData, setFilteredData] = useState([]);
  // const [wordEntered, setWordEntered] = useState("");

  // const handleFilter = (event) => {
  //   const searchWord = event.target.value;
  //   setWordEntered(searchWord);
  //   const newFilter = data.filter((value) => {
  //     return value.title.toLowerCase().includes(searchWord.toLowerCase());
  //   });

  //   if (searchWord === "") {
  //     setFilteredData([]);
  //   } else {
  //     setFilteredData(newFilter);
  //   }
  // };

  // const clearInput = () => {
  //   setFilteredData([]);
  //   setWordEntered("");
  // };


  return (
    <header id="header" class="fixed-top">
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

        <nav id="navbar" class="navbar">
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

            <li class="dropdown">
              <Link to="#">
                <span>Article Category</span> <i class="bi bi-chevron-down"></i>
              </Link>
              <ul>
                <li>
                  <Link to="/search/humanright">Human Right</Link>
                </li>
                {/* <li class="dropdown">
                    <a to="#">
                      <span>Deep Drop Down</span>{" "}
                      <i class="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a to="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a to="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a to="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a to="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a to="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li> */}
                <li>
                  <Link to="/search/mentalhealth">Mental Health</Link>
                </li>
                <li>
                  <Link to="/search/jobs">Jobs</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link class="nav-link scrollto" to="/about">
                About
              </Link>
            </li>


            <form class="d-flex ms-4">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={wordEntered}
                onSubmit={handleFilter}
              />

      

                  
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
                if (searchTerm == "") {
                  return val
                } else if  (val.news_title.toLowerCase().include(searchTerm.toLowerCase())) {
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
                          className="far fa-user-circle d-flex flex-column"
                          
                          style={{ fontSize: "24px" }}
                        ></i>
                        
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
            </form>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
