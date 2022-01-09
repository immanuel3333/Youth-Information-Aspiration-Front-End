import React, { useState, useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
import logo from "../../assets/image/yia-logo.png";
import { useSelector } from "react-redux";
import newsJson from "../../data/json/news.json";


function Header() {
  const navigate = useNavigate()
  function onFormSubmit(e) {
    e.preventDefault();
    const [name,category] = this.state
    navigate('/detail-news')
  }

  // const [searchTerm, setSearchTerm] = useState("");
  const newsData = useSelector((state) => state.news);
  const { news } = newsData;


//   const [loading, setLoading] = useState(false);
//   const [post, setPosts] = useState("");
//   const [news, setNews] = useState("");
//   const [searchTitle, setSearchTitle] = useState("");

//   useEffect(() => {
//     const loadPosts = async () => {
//       setLoading(true);
//    const response = await axios.get(
//       "https://youth-information-aspiration.herokuapp.com/news"
//       );
//       setNews(response.data);
//       setLoading(false);
//     };
//     loadPosts();
    
// },[]);

const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

   const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
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
                  onChange={handleFilter}  
              />

      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}


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
