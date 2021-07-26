import React, { useState } from "react";
import "../CSS/ImageSlider.css";
import { slides } from "../../features/SlideData";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length-1 : current - 1);
  };

  return (
    <div className="imageslider">
      <ChevronLeftIcon className="left_arrow" onMouseOver={prevSlide} />
      <ChevronRightIcon className="right_arrow" onMouseOver={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            key={index}
            className={index === current ? "slide active" : "slide"}
          >
            {index === current && (
              <img src={slide.image} alt="" className="image" />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ImageSlider;
