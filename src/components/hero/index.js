import React from "react";
import { Row } from "react-bootstrap";
import { useNavigate } from "react-router";

function Hero() {
  const navigate = useNavigate();
  const style = {
    "object-fit": "cover",
    "height": "55vh", 
    "width" : "100%",
    "border-radius" : "10px"
  };
  return (
    <div className="container-fluid p-0">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
          
            <img
              src={
                "https://i.ibb.co/VS6TCRJ/image.png"
              }
              style={style}
            />
            <div className="text-carousel-centered">
              <h1 className="h2-text">Youth Information Aspiration</h1>

              <h3 className="h3-text">Our Service :</h3> 

              <div className="feature-carousel d-flex flex-column">
          
              <Row>
              <i className="fas fa-check-circle"> Valid Information
              </i>
              </Row>
              <br />
              <Row>
              <i className="fas fa-check-circle"> Express Aspiration
              </i>
              </Row>
              <br />
              <Row>
               
              <i className="fas fa-check-circle"> Discuss an issue   
              </i>
             
              
              </Row>
           
            </div>
            <br />
              <button type="button" class="btn btn-primary button-read-more"  onClick={() => {
              navigate(`/about`)}}>Read More</button>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
