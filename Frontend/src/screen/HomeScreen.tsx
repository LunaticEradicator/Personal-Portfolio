import "../sass/screens/homeScreen.scss";
import { useEffect } from "react";
import { useGetAllProjectsQuery } from "../store/apis/projectApi";
import {
  BiLogoMongodb,
  BiLogoReact,
  BiLogoTypescript,
  BiLogoRedux,
} from "react-icons/bi";
import { SiExpress, SiWebpack } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";

import { IoLogoJavascript, IoLogoSass } from "react-icons/io";
import { AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import Spinner from "../components/Reuseable/Spinner";
import Project from "./util/Project";
import { useState } from "react";
import ScrollAnimation from "../components/Reuseable/ScrollAnimation";

interface postProps {
  _id: string;
  name: string;
  live: string;
  git: string;
  image: string;
  stack: string;
}

export default function HomeScreen() {
  const { data, isLoading, isError } = useGetAllProjectsQuery();
  const [isCopied, SetIsCopied] = useState(false);
  const [urlPath, setUrlPath] = useState(window.location.pathname);

  // console.log(isCopied);
  // console.log(data);
  useEffect(() => {
    // updated urlPath
    function urlPath() {
      setUrlPath(window.location.pathname);
    }
    window.addEventListener("click", urlPath);
    return () => {
      window.removeEventListener("click", urlPath);
    };
  }, []);
  useEffect(() => {
    // whenever url changes run function
    ScrollAnimation();
  }, [urlPath]);

  let renderData;
  if (isLoading) {
    renderData = <Spinner />;
  } else if (isError) {
    renderData = "Error Loading Page ";
  } else {
    // run animation by default
    ScrollAnimation();
    renderData = data.map((project: postProps) => {
      return <Project key={project._id} {...project} />;
    });
  }

  return (
    <section className="home">
      <section className="home__intro hide">
        <div className="home__intro__inner hideText">
          <h4>出会う</h4>
          {/* <h4>出会う</h4> */}
          <div className="content">
            <h3>Yedukrishnan.A</h3>
            <h3>Yedukrishnan.A</h3>
          </div>
          <h2>Software Developer</h2>
          <h5>
            I build responsive and scalable web apps <div>MERN</div>
          </h5>
        </div>
      </section>
      <section className="home__skills hide">
        <div className="home__skills__header__one">技術</div>
        <div className="home__skills__header__two">Language and Tools</div>
        <div className="hideText">
          <div className="home__skills__language">
            <div className="home__skills__language__mongoDB">
              <BiLogoMongodb />
              <span>MongoDB</span>
            </div>
            <div className="home__skills__language__express">
              <SiExpress />
              <span>Express</span>
            </div>
            <div className="home__skills__language__react">
              <BiLogoReact />
              <span>React</span>
            </div>
            <div className="home__skills__language__node">
              <FaNode />
              <span>Node</span>
            </div>
            <div className="home__skills__language__javascript">
              <IoLogoJavascript />
              <span>JavaScript</span>
            </div>
            <div className="home__skills__language__sass">
              <IoLogoSass />
              <span>Sass</span>
            </div>
            <div className="home__skills__language__typescript">
              <BiLogoTypescript />
              <span>TypeScript</span>
            </div>
            <div className="home__skills__language__webPack">
              <SiWebpack />
              <span>WebPack</span>
            </div>
            <div className="home__skills__language__redux">
              <BiLogoRedux />
              <span>Redux</span>
            </div>
            <div className="home__skills__language__git">
              <FaGithubAlt />
              <span>Git</span>
            </div>
          </div>
        </div>
      </section>
      <section className="home__projects hide">
        <div className="">
          <div className="home__projects__header__one">ワークショップ</div>
          <div className="home__projects__header__two">Personal Projects</div>
          <div className="home__projects__content hideText">{renderData}</div>
        </div>
      </section>
      <section className="home__contact hide">
        <div className="home__contact__header__one">ソーシャルメディア</div>
        <div className="home__contact__header__two">Let's Connect</div>
        <div className="home__contact__content hideText">
          <div className="home__contact__content__git">
            <a href="https://github.com/LunaticEradicator" target="_blank">
              <FaGithubAlt />
            </a>
            <div className="home__contact__content__git__hover">
              https://github.com/LunaticEradicator
            </div>
          </div>
          <div className="home__contact__content__linkedin">
            <a
              href=" https://www.linkedin.com/in/yedukrishnan-a-984709219"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <div className="home__contact__content__git__hover">
              www.linkedin.com/in/yedukrishnan-a-984709219
            </div>
          </div>
          <div className="home__contact__content__facebook">
            <a
              href="
              https://www.facebook.com/profile.php?id=100011571796145"
              target="_blank"
            >
              <AiFillFacebook />
            </a>
            <div className="home__contact__content__git__hover">
              https://www.facebook.com/profile.php?id=100011571796145
            </div>
          </div>
          <div
            onClick={() => {
              navigator.clipboard.writeText("yedukrishnandotappu@gmail.com");
              SetIsCopied(true);
              setTimeout(() => SetIsCopied(false), 1200);
            }}
            className="home__contact__content__gmail"
          >
            <div className="home__contact__content__gmail__message">
              <BiLogoGmail />
              {isCopied && (
                <div className="home__contact__content__gmail__message__content">
                  Copied To Clipboard
                </div>
              )}
            </div>
            <div className="home__contact__content__git__hover">
              yedukrishnandotappu@gmail.com
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
