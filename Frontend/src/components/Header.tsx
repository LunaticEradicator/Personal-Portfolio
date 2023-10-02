import "../sass/components/header.scss";
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
// import DropDown from "./Reuseable/DropDown";
import Button from "./Reuseable/Button";
// import type { RootState } from "../store/store";

export default function Header() {
  //   const navigate = useNavigate();

  // for nav we add a new class which will make all li be block only when screen is medium
  const [isNavExpanded, setIsNavExpanded] = useState(true);
  const navBarExpandHandler = () => {
    setIsNavExpanded((prevIsNavExpanded) => !prevIsNavExpanded);
  };

  //? "expanded" is a class that will only be added if the display is a phone [medium media query]
  return (
    <nav id="navbarParent">
      <ul className={isNavExpanded ? "navbar" : "navbar expanded"}>
        {/*DropDown li ONE*/}
        <li className="navbar__item">
          <Link to="/" className="navbar__item__title">
            Home
          </Link>
        </li>
        {/* DropDown li Two*/}
        <li
          className={isNavExpanded ? "navbar__item" : "navbar__item expanded"}
        >
          <Link to="/resume" className="navbar__item__link">
            <div
              className="navbar__item__link__innerChild"
              style={{ display: "flex" }}
            >
              Resume
            </div>
          </Link>
        </li>
        {/* DropDown li Last [hamburger icon ] */}
        {/* <div onClick={navBarExpandHandler}> */}
        <Button className="navbar__item" onClick={navBarExpandHandler}>
          <IoMenuSharp />
        </Button>
        {/* </div> */}
      </ul>
    </nav>
  );
}
