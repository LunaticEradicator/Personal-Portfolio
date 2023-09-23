// import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./sass/style.scss";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
