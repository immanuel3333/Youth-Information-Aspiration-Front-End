import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

import '../../assets/css/style.css'


function Footer() {
  return (
    <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h6>About</h6>
                <p className="text-justify">
                The Youth Information Aspiration (YIA) is an educational platform that aims to mobilize youth in ASEAN to obtain valid information. And provide open space for ASEAN youth to be able to voice their aspirations and concerns about certain issues in order to achieve a better ASEAN. YIA provides services for a discussion forum for ASEAN youth to provide arguments regarding issues that are happening in ASEAN.
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
    // <footer>
    //   <div id="footer">
    //     <div class="footer-top">
    //       <div className="container">
    //         <div className="row">
    //           <div className="col-lg-3 col-md-6 footer-contact">
    //             <h3>YIA</h3>
    //             <p>
    //               A108 Adam Street <br />
    //               New York, NY 535022
    //               <br />
    //               United States <br />
    //               <br />
    //               <strong>Phone:</strong> +1 5589 55488 55
    //               <br />
    //               <strong>Email:</strong> info@example.com
    //               <br />
    //             </p>
    //           </div>

    //           <div class="col-lg-2 col-md-6 footer-links">
    //             <h4>Useful Links</h4>
    //             <ul>
    //               <li>
    //                 <i class="bx bx-chevron-right"></i> <a href="#">Home</a>
    //               </li>
    //               <li>
    //                 <i class="bx bx-chevron-right"></i> <a href="#">About us</a>
    //               </li>
    //               <li>
    //                 <i class="bx bx-chevron-right"></i> <a href="#">Services</a>
    //               </li>
    //               <li>
    //                 <i class="bx bx-chevron-right"></i>{" "}
    //                 <a href="#">Terms of service</a>
    //               </li>
    //               <li>
    //                 <i class="bx bx-chevron-right"></i>{" "}
    //                 <a href="#">Privacy policy</a>
    //               </li>
    //             </ul>
    //           </div>

    //           <div class="col-lg-3 col-md-6 footer-links">
    //             <h4>Our Services</h4>
    //             <ul>
    //               <li>
    //                 <i class="bx bx-chevron-right"></i>{" "}
    //                 <Link href="#">Web Design</Link>
    //               </li>
    //               <li>
    //                 <i class="bx bx-chevron-right"></i>{" "}
    //                 <Link href="#">Web Development</Link>
    //               </li>
    //               <li>
    //                 <i class="bx bx-chevron-right"></i>{" "}
    //                 <Link href="#">Product Management</Link>
    //               </li>
    //               <li>
    //                 <i class="bx bx-chevron-right"></i>{" "}
    //                 <Link href="#">Marketing</Link>
    //               </li>
    //               <li>
    //                 <i class="bx bx-chevron-right"></i>{" "}
    //                 <Link href="#">Graphic Design</Link>
    //               </li>
    //             </ul>
    //           </div>

    //           <div class="col-lg-4 col-md-6 footer-newsletter">
    //             <h4>Join Our Newsletter</h4>
    //             <p>
    //               Tamen quem nulla quae legam multos aute sint culpa legam
    //               noster magna
    //             </p>
    //             <form action="" method="post" />
    //             <input type="email" name="email">
    //               <input type="submit" value="Subscribe" />
    //             </input>
    //             <form />
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div class="container d-md-flex py-4">
    //       <div class="me-md-auto text-center text-md-start">
    //         <div class="copyright">
    //           &copy; Copyright{" "}
    //           <strong>
    //             <span>OnePage</span>
    //           </strong>
    //           . All Rights Reserved
    //         </div>
    //         <div class="credits"></div>
    //       </div>
    //       <div class="social-links text-center text-md-right pt-3 pt-md-0">
    //         <a href="#" class="twitter">
    //           <i class="bx bxl-twitter"></i>
    //         </a>
    //         <a href="#" class="facebook">
    //           <i class="bx bxl-facebook"></i>
    //         </a>
    //         <a href="#" class="instagram">
    //           <i class="bx bxl-instagram"></i>
    //         </a>
    //         <a href="#" class="google-plus">
    //           <i class="bx bxl-skype"></i>
    //         </a>
    //         <a href="#" class="linkedin">
    //           <i class="bx bxl-linkedin"></i>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
      
  );
}

export default Footer;
