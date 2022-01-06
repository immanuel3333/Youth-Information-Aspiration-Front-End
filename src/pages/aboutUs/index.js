import React from "react";
import { Card, Carousel } from "react-bootstrap";
import Footer from "../../components/footer";
import Header from "../../components/header";
// import { MdQuestionAnswer } from "react-icons/md";

function AboutUsPage () {



    return (
    <div>
      <div className="container-fluid-c">
        <Header />

        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-aboutUs"
      src="https://i.ibb.co/YZdCRJy/yia-talent1.png" 
      alt="yia-talent1"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-aboutUs"
      src="https://i.ibb.co/7YLTB5t/yia-talent2.png" alt="yia-talent2" 
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-aboutUs"
      src="https://i.ibb.co/WyFyScy/yia-talent3.png" alt="yia-talent3" 
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

   

       {/* About Us Section  */}
   
       <section id="about" className="about">
      <div className="container" data-aos="fade-up">
      <img className="yia-logo-about"
      src="https://i.ibb.co/0cZnLJK/YIA-Logo.png" alt="YIA-Logo" 
    />
            <br />

        <div className="section-title">
          <h2>About Us</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
              <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
              <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="#" className="btn-learn-more">Learn More</a>
          </div>
        </div>

      </div>
    </section>

    {/* About Us */}


 {/* Challenge Partner CTA */}
 <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">

        <div className="row">
          <div className="col-lg-9 text-center text-lg-start">
            <h3>Our Challenge Partner</h3>
            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="https://aseanyouthforum.org/">Visit Us</a>
          </div>
        </div>

      </div>
    </section>
    {/* Challenge Partner CTA */}



    {/* <!-- ======= Feature Section ======= --> */}
    <section id="services" className="services service-text container-card">

      <div className="container" data-aos="fade-up">

        <header className="section-header service-text">     

          <h2 className="h2-feature"> Our Feature</h2>
          {/* <p className="card-about-text">Veritatis et dolores facere numquam et praesentium</p> */}
      
        </header>

        <br />

        <div className="row gy-4">

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-box blue">
              <i className="ri-discuss-line icon"></i>
              <h3>Nesciunt Mete</h3>
              <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
              <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-box orange">
              <i className="ri-discuss-line icon"></i>
              <h3>Eosle Commodi</h3>
              <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
              <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-box green">
              <i className="ri-discuss-line icon"></i>
              <h3>Ledo Markt</h3>
              <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
              <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>

          

          

        </div>

      </div>

    </section>
    {/* <!-- End Services Section --> */}

       

    
        <br />
        <br />
        <br />
        <br />
        <Footer />
        </div>
     </div>
    )

}

export default AboutUsPage;