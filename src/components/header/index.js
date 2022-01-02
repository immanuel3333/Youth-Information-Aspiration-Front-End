import React from "react";

function Header() {
  return (
    <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center justify-content-between">
        <h1 class="logo">
          <a href="index.html">YIA</a>
        </h1>

        {/* <a href="index.html" class="logo">
        <img src="assets/img/logo.png" alt="" class="img-fluid"/></a> */}
        <nav id="navbar" class="navbar">
          <ul>
            <li>
              <a class="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="/aspiration">
                Aspiration
              </a>
            </li>

            <li class="dropdown">
              <a href="#">
                <span>Article Category</span> <i class="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Human Right</a>
                </li>
                {/* <li class="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{" "}
                      <i class="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li> */}
                <li>
                  <a href="#">Mental Health</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
              </ul>
            </li>
            <li>
              <a class="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <form class="d-flex ms-4">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <li>
                <a class="getstarted scrollto" href="#about">
                  Login
                </a>
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
