import React, { useState } from "react";
import { Button, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../../actions/auth-action";
import logo from "../../assets/image/yia-logo.png";

function Header() {
  const navigate = useNavigate();
  function onFormSubmit(e) {
    e.preventDefault();
    const [name, category] = this.state;
    navigate("/detail-news");
  }

  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    setLoading(true);

    dispatch(logout());
  };

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
                onSubmit={onFormSubmit}
              />
              <li>
                {isLoggedIn ? (
                  <NavDropdown title="Your Account" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Your Name
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
