import "../../sass/screens/utils/project.scss";
import { useState, useEffect, useRef } from "react";
import Button from "../../components/Reuseable/Button";
import { AiFillGithub } from "react-icons/ai";
import { CgMediaLive } from "react-icons/cg";
import {
  BiLogoMongodb,
  BiLogoReact,
  BiLogoTypescript,
  BiLogoRedux,
} from "react-icons/bi";
import { SiExpress, SiWebpack } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { IoLogoJavascript, IoLogoSass } from "react-icons/io";

import Carousel from "../../components/Reuseable/Carousel";

interface postProps {
  name: string;
  live: string;
  git: string;
  image: string;
  stack: string;
}

export default function Project({ name, live, git, image, stack }: postProps) {
  const ref = useRef<any>(null);
  const [windowSize, setWindowSize] = useState(
    ref.current ? ref?.current?.offsetWidth : 0
  );

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(ref.current ? ref?.current?.offsetWidth : 0);
    }
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  // console.log(windowSize);

  return (
    <>
      <div className="home__projects__content__each">
        {/* <div className="home__projects__content__each__name">{name}</div> */}
        <div ref={ref} className="carousel">
          <Carousel name={name} slides={image} parentWidth={windowSize} />
        </div>
        <div className="home__projects__content__each__button">
          <Button>
            <a href={live} target="_blank">
              <span>Live</span>
              <CgMediaLive />
            </a>
          </Button>
          <Button>
            <a href={git} target="_blank">
              <span>Git</span>
              <AiFillGithub />
            </a>
          </Button>
        </div>
        <div className="home__projects__content__each__stack">
          {stack.includes("Javascript") && (
            <div className="home__projects__content__each__stack__javascript">
              <IoLogoJavascript />
              <span>Javascript</span>
            </div>
          )}
          {stack.includes("TypeScript") && (
            <div className="home__projects__content__each__stack__typescript">
              <BiLogoTypescript />
              <span>TypeScript</span>
            </div>
          )}
          {stack.includes("Sass") && (
            <div className="home__projects__content__each__stack__sass">
              <IoLogoSass />
              <span>Sass</span>
            </div>
          )}
          {stack.includes("Webpack") && (
            <div className="home__projects__content__each__stack__webPack">
              <SiWebpack />
              <span>Webpack</span>
            </div>
          )}
          {stack.includes("MongoDB") && (
            <div className="home__projects__content__each__stack__mongoDB">
              <BiLogoMongodb />
              <span>MongoDB</span>
            </div>
          )}
          {stack.includes("Express") && (
            <div className="home__projects__content__each__stack__express">
              <SiExpress />
              <span>Express</span>
            </div>
          )}
          {stack.includes("React") && (
            <div className="home__projects__content__each__stack__react">
              <BiLogoReact />
              <span>React</span>
            </div>
          )}
          {stack.includes("Node") && (
            <div className="home__projects__content__each__stack__node">
              <FaNode />
              <span>Node</span>
            </div>
          )}
          {stack.includes("Redux") && (
            <div className="home__projects__content__each__stack__redux">
              <BiLogoRedux />
              <span>Redux</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
