import "../src/assets/css/style.css";
import Hero from "./components";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <br />
      <br />
      <br />
      <br />
      <Hero />
      {/* <Footer/> */}
      <footer className="site-footer fixed-bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                The ASEAN Youth Forum (AYF) is a movement that represents and
                fights for the young people in ASEAN to voice out their concerns
                and strategies for ways to achieve a better ASEAN. AYF has been
                a platform of the youth in the ASEAN to raise their voice and
                claim for their rights for a sustainable, inclusive,
                people-centered, and youth-driven regional community. 
              </p>
            </div>

            <div className="col-xs-6 col-md-6">
              <h6>Categories</h6>
              <ul class="footer-links">
                <li>
                  <a href="http://scanfcode.com/category/c-language/">C</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/front-end-development/">
                    UI Design
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/back-end-development/">
                    PHP
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/java-programming-language/">
                    Java
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/android/">Android</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/templates/">
                    Templates
                  </a>
                </li>
              </ul>
            </div>

            <div class="container">
              <div class="row">
                <div class="col-md-8 col-sm-6 col-xs-12">
                  <p class="copyright-text">
                    Copyright &copy; 2017 All Rights Reserved by
                    <a href="#">YIA</a>.
                  </p>
                </div>

                <div class="col-md-4 col-sm-6 col-xs-12">
                  <ul class="social-icons">
                    <li>
                      <a class="facebook" href="#">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a class="twitter" href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a class="dribbble" href="#">
                        <i class="fa fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a class="linkedin" href="#">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
