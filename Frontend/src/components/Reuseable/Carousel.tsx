import { useState, useRef, useEffect, useCallback } from "react";

const leftArrowStyle = {
  position: "absolute",
  top: "50%",
  transform: "translate(0,-50%)",
  left: "32px",
  fontSize: "4rem",
  color: "white",
  zIndex: 1,
  cursor: "pointer",
};
const rightArrowStyle = {
  position: "absolute",
  top: "50%",
  transform: "translate(0,-50%)",
  right: "32px",
  fontSize: "4rem",
  color: "white",
  zIndex: 1,
  cursor: "pointer",
};
const sliderContainerStyle = {
  height: "90%",
  position: "relative",
};
const sliderStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundPosition: "center",
  backgroundSize: "cover",
};
const dotContainerStyles = {
  display: "flex",
  justifyContent: "center",
  color: "black",
};
const slidesContainerStyles = {
  display: "flex",
  height: "100%",
  transition: "transform ease-out 0.7s",
};
const slidesContainerStylesOverflowHidden = {
  overflow: "hidden",
  height: "100%",
};

export default function Carousel({ slides, parentWidth }) {
  const timeRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [updatedSlides, setUpdatedSlides] = useState(
    slides.map((slide) => {
      return { ...slide, isCheckedColor: false };
    })
  );

  const previousArrowHeadHandler = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? updatedSlides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextArrowHeadHandler = useCallback(() => {
    const isLastSlide = currentIndex === updatedSlides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    // Automatically Change Dot Color
    // If the AutomaticIndex [newIndex] === Dot Index
    // Dot will change color [ if isCheckedColor === true ]
    setUpdatedSlides((prevUpdatedSlides) =>
      prevUpdatedSlides.map((slide, index) => {
        return index === newIndex
          ? { ...slide, isCheckedColor: true }
          : { ...slide, isCheckedColor: false };
      })
    );
  }, [currentIndex, updatedSlides]);

  const dotHandler = (dotIndex, id) => {
    setCurrentIndex(dotIndex);
    // Change Dot Color when user clicks
    // If functionId  === Dot Id
    // Dot will change color [ if isCheckedColor === true ]
    setUpdatedSlides((prevUpdatedSlides) =>
      prevUpdatedSlides.map((slide) => {
        return slide._id === id
          ? { ...slide, isCheckedColor: true }
          : { ...slide, isCheckedColor: false };
      })
    );
  };

  const getSlideStylesWidthBackground = (slideIndex) => {
    return {
      ...sliderStyle,
      backgroundImage: `url('${updatedSlides[slideIndex].img}')`,
      width: `${parentWidth}px`,
    };
  };

  const getSlidesContainerStylesWithWidth = () => {
    return {
      ...slidesContainerStyles,
      width: parentWidth * updatedSlides.length,
      transform: `translateX(${-(currentIndex * parentWidth)}px)`,
    };
  };

  useEffect(() => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    timeRef.current = setTimeout(() => {
      nextArrowHeadHandler();
    }, 3000);
    return () => clearTimeout(timeRef.current);
  }, [nextArrowHeadHandler]);

  // console.log(updatedSlides);
  return (
    <div style={sliderContainerStyle}>
      <div style={leftArrowStyle} onClick={previousArrowHeadHandler}>
        &#11160;
      </div>
      <div style={rightArrowStyle} onClick={nextArrowHeadHandler}>
        &#11162;
      </div>
      {/* Animation */}
      {/* <div style={slideStylesWidthBackground}></div> */}
      <div style={slidesContainerStylesOverflowHidden}>
        <div style={getSlidesContainerStylesWithWidth()}>
          {updatedSlides.map((_, slideIndex) => {
            return (
              <div
                key={slideIndex}
                style={getSlideStylesWidthBackground(slideIndex)}
              ></div>
            );
          })}
        </div>

        {/* Animation */}
      </div>
      <div style={dotContainerStyles}>
        {updatedSlides.map((slide, index) => {
          return (
            <div
              style={{
                color: slide.isCheckedColor ? "red" : "black",
                margin: "8px",
                cursor: "pointer",
              }}
              key={index}
              onClick={() => dotHandler(index, slide._id)}
            >
              &#11044;
            </div>
          );
        })}
      </div>
    </div>
  );
}
