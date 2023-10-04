// import React from "react";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./sass/style.scss";
import TextChange from "./components/Reuseable/TextChange";
import StickyNavbar from "./components/Reuseable/StickyNavbar";

export default function App() {
  const [urlPath, setUrlPath] = useState(window.location.pathname);

  useEffect(() => {
    StickyNavbar();
    // updated urlPath
    function urlPath() {
      setUrlPath(window.location.pathname);
    }
    window.addEventListener("click", urlPath);
    return () => {
      window.removeEventListener("click", urlPath);
    };
  }, []);

  // console.log(urlPath);
  return (
    <div className="app">
      {urlPath === "/" && (
        <TextChange slides={["HI", "こんにちは", "नमस्ते"]} />
      )}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
