import React from "react";

function Hero() {
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;