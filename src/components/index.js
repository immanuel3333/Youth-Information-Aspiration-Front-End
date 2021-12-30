import React from "react";

function Hero() {
  const style = {
    left: 0,
    "object-fit": "cover",
    "height": "500px",
    "width" : "100%",

  };
  return (
    <div className="container-fluid w-100">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={
                "https://picsum.photos/1080/1920"
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
