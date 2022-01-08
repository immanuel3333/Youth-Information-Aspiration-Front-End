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
      <h3><strong>READ</strong></h3>
      <p>Get the valid information needed here.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-aboutUs"
      src="https://i.ibb.co/7YLTB5t/yia-talent2.png" alt="yia-talent2" 
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3><strong>EXPRESS</strong></h3>
      <p>Express your concerns and convey your best aspirations.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-aboutUs"
      src="https://i.ibb.co/WyFyScy/yia-talent3.png" alt="yia-talent3" 
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3><strong>DISCUSS</strong></h3>
      <p>Discuss it and find a solution</p>
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
            <strong>The Youth Information Aspiration (YIA)</strong> is an educational platform that aims to mobilize youth in ASEAN to obtain valid information. And provide open space for ASEAN youth to be able to voice their aspirations and concerns about certain issues in order to achieve a better ASEAN. YIA provides services for a discussion forum for ASEAN youth to provide arguments regarding issues that are happening in ASEAN.
            </p>
            
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
            <strong>Youth Information Aspiration (YIA)</strong> is part of the ASEAN Youth Forum, this platform aims to become a branch of the youth movement in ASEAN to focus engagement on important local issues. We hope that youth in ASEAN can participate in making a good impact by knowing the issues that occur in ASEAN, and voicing their opinions regarding this matter.
            </p>
            {/* <a href="#" className="btn-learn-more">Learn More</a> */}
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
            <p>We really support the youth movement in ASEAN through a program organized by our challenge partner. Without them, we couldn't have made a platform as good as this one. So we would like to introduce you to our challenge partner, the supportive organization behind the success of this platform. ASEAN YOUTH FORUM (AYF).</p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="https://aseanyouthforum.org/">Visit Them</a>
          </div>
        </div>

      </div>
    </section>
    {/* Challenge Partner CTA */}



    {/* <!-- ======= Feature Section ======= --> */}
    <section id="services" className="services service-text container-card">

      <div className="container" data-aos="fade-up">

        <header className="section-header service-text">     

        <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2 className="section-title"> Our Feature</h2>
          </div>
          </div>
          {/* <p className="card-about-text">Veritatis et dolores facere numquam et praesentium</p> */}
      
        </header>

        <br />

        <div className="row gy-4">

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-box blue">
            <img src="https://i.ibb.co/FYcNZSr/valid-information-icon.png" alt="valid-information-icon"   className='img-fluid shadow-4 '/>
              <h3>Valid Information</h3>
              <p>We present a feature that provides a variety of factual information through various trusted reference sources. You don't have to worry about the correctness of the information we provide. We are committed to always providing reliable information.</p>
              <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-box orange">
            <img src="https://i.ibb.co/VNhSr8x/aspiration-icon.png"  alt="aspiration-icon"    className='img-fluid shadow-4 '/>
              <h3>Aspiration</h3>
              <p>We provide an open space for youth in ASIA to voice their concerns and strategies to achieve a better ASEAN. Youth can express their opinion on certain issues freely without coercion.</p>
              <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-box green">
            <img src="https://i.ibb.co/2gWCt38/discuss-group-icon.png"  alt="discussion-forum-icon"  className='img-fluid shadow-4 '/>
              <h3>Discussion Forum</h3>
              <p>We provide a forum for youth to discuss with other ASIA youth related to certain issues. We hope that the youth can present their arguments well.</p>
              <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>


        </div>

      </div>

    </section>
    {/* <!-- End Feature Section --> */}


    {/* Topic Category Section */}
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Our Topic Category</h2>
          <p>We provide various kinds of information with a variety of categories, we are committed to providing factual information with these varied categories. And provide an open space for youth to voice their voices among these categories.</p>
        </div>

        <div className="row">
          <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box">
            <img href="" src="https://i.ibb.co/zrsCCQk/mental-health.png" alt="mental-health" className='img-fluid shadow-4 '/>
              <h4><a href="">Mental Health</a></h4>
              <p>We provide a topic about mental health. We understand that mental health is very important at this time, and young in ASEAN must know the importance of mental health.</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
            <img href="" src="https://i.ibb.co/VJgLv5j/human-rights.png" alt="human-rights"  className='img-fluid shadow-4 '/>
              <h4><a href="">Human Rights</a></h4>
              <p>We hope that by providing the topic of human rights, ASEAN youth can understand, as well as voice their opinions regarding the rights of youth in ASEAN.</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
            <img href="" src="https://i.ibb.co/GdvXkVD/job.png" alt="job"   className='img-fluid shadow-4 '/>
              <h4><a href="">Jobs</a></h4>
              <p>We present an interesting topic about work. Our hope, ASEAN youth can know about the things of the world of work. At the same time can learn from the information we provide.</p>
            </div>
          </div>

         <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
            <img href="" src="https://i.ibb.co/LRJX9Pr/climate.png" alt="climate"   className='img-fluid shadow-4 '/>
              <h4><a href="">Climate</a></h4>
              <p>We also support ASEAN against climate change. We want youth in ASEAN to be informed about climate change and its impacts. We want to raise awareness among young people about climate change events that have occurred.</p>
            </div>
          </div>


        </div>

      </div>
    </section>
    {/* Topic Category Section */}

       

{/*     
        <br />
        <br />
        <br />
        <br /> */}
        <Footer />
        </div>
     </div>


    )



}

export default AboutUsPage;