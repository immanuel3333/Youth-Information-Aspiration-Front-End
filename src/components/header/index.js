import React from "react";
import { useNavigate,Link } from "react-router-dom";
import logo from "../../assets/image/yia-logo.png";

function Header() {
  const navigate = useNavigate()
  function onFormSubmit(e) {
    e.preventDefault();
    const [name,category] = this.state
    navigate('/detail-news')
  }
  return (
    <header id="header" class="fixed-top">
      <div class="container-fluid d-flex align-items-center justify-content-between">
        <Link to="/" class="logo">
          <img
            src={logo}
            alt=""
            className="img-fluid"
            style={{ height: "50px !important", width: "100px", objectFit: "cover" }}
          />
        </Link>
        {/* <h1 class="logo">
          <a href="/">Youth Information Aspiration</a>
        </h1> */}

        <nav id="navbar" class="navbar">
          <ul>
            <li>
              <Link class="nav-link scrollto active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link class="nav-link scrollto" to="/aspiration">
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
                <Link class="getstarted scrollto" to="/login">
                  Login
                </Link>
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
