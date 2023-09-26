import { useState, useEffect, useCallback } from "react";
import "../../sass/components/textChanger.scss";
import { AiFillCaretDown } from "react-icons/ai";
import { BsFillCaretDownSquareFill } from "react-icons/bs";

export default function TextChange({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [updatedSlides, setUpdatedSlides] = useState(slides);

  const nextArrowHeadHandler = useCallback(() => {
    const isLastSlide = currentIndex === updatedSlides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, updatedSlides]);

  useEffect(() => {
    setTimeout(() => {
      nextArrowHeadHandler();
    }, 5000);
  }, [nextArrowHeadHandler]);

  return (
    <div className="textChanger">
      <h1>
        <span></span>
        <div className="message">
          <div className="word1">HI</div>
          {/* <div className="word3">नमस्ते</div> */}
          <div className="word2">നമസ്കാരം</div>
          <div className="word3">こんにちは</div>
        </div>
      </h1>
      <div className="scroll">
        Scroll Down
        <AiFillCaretDown />{" "}
      </div>
    </div>
  );
}
