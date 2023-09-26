import "../sass/screens/homeScreen.scss";
import { useGetAllProjectsQuery } from "../store/apis/projectApi";
import {
  BiLogoMongodb,
  BiLogoReact,
  BiLogoTypescript,
  BiLogoRedux,
} from "react-icons/bi";
import { SiExpress, SiWebpack } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { IoLogoJavascript, IoLogoSass } from "react-icons/io";

export default function HomeScreen() {
  const { data, isLoading, isError } = useGetAllProjectsQuery();

  // console.log(data);
  return (
    <div className="home">
      <div className="home__intro">
        <div className="home__intro__inner">
          <h4>出会う</h4>
          {/* <h4>出会う</h4> */}
          <h3>Yedukrishnan.A</h3>
          <h2>MERN Stack Developer</h2>
        </div>
      </div>
      <div className="home__skills">
        <div className="home__skills__header__one">技術</div>
        <div className="home__skills__header__two">Language and Tools</div>
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
        </div>
      </div>
      {/* <div style={{ fontSize: "2rem" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, magni
        sapiente et libero reiciendis rem nisi optio delectus iusto ullam!
        Repudiandae, minima! Eveniet doloremque temporibus rem, dicta officiis
        modi voluptatum? Voluptatibus minima eveniet accusantium excepturi quia
        voluptatum, autem maxime esse suscipit laborum. Libero excepturi
        repellendus quaerat labore eos nisi natus, possimus sequi, iure dolorem
        quasi minima? Ipsam nemo dolor tenetur? Corporis magni veritatis commodi
        eligendi aliquam saepe ut iusto corrupti aspernatur, voluptates est unde
        ipsa dignissimos sint officiis inventore vero iste adipisci aliquid,
        quas consequuntur laborum enim fuga. Ipsa, nihil. Ipsum quas excepturi
        corrupti cumque doloribus omnis voluptatum voluptates quos ab mollitia.
        Nemo, similique. Voluptas odit, error molestias ullam qui eveniet quae
        numquam consectetur, aperiam, eos accusantium. Tenetur, neque quaerat.
        Sed totam officia quas necessitatibus. Temporibus natus, voluptatem
        velit, quas exercitationem suscipit corporis qui eius eligendi provident
        ullam. Autem voluptas odio dolorem dolorum sapiente a mollitia
        praesentium ratione possimus dolore. Totam fuga dolor pariatur mollitia
        nihil ea deserunt sunt unde harum? Illum repudiandae architecto delectus
        maxime eveniet, dolor natus perspiciatis perferendis corporis cum atque
        itaque nihil facere, quasi fugiat veniam. Aspernatur, minima est nemo
        blanditiis vel cum veritatis? Fugiat sapiente eveniet dolorum, nostrum
        mollitia ducimus ad molestiae non obcaecati, id qui, debitis nobis.
        Corrupti impedit sit amet facilis quo dignissimos! Expedita natus velit
        dolores. Corrupti culpa vero totam ex aspernatur accusantium. Dolore
        facere cumque veniam quia consequatur! Libero provident velit impedit
        temporibus cumque aut, et, perspiciatis officiis veniam aliquam
        sapiente. Eius dolore optio veniam id ipsa! Corporis eius natus
        accusantium reiciendis, dolores sapiente officiis sunt labore.
        Recusandae dolorum ab non veritatis fugiat, aperiam minus autem esse
        nisi, iusto sed optio. Asperiores repudiandae et repellendus at! Ullam
        culpa quos odit? Asperiores magni omnis placeat odit fugit, at quos
        cupiditate! Vero dolorum esse quisquam maxime et natus aperiam inventore
        officiis architecto! Facilis? Minima ea atque asperiores laudantium sed
        ipsam, recusandae fuga corrupti harum? Minima itaque nihil hic velit,
        quae reprehenderit recusandae exercitationem! Vitae perspiciatis
        distinctio libero sint, nostrum veniam voluptatum iste molestiae?
        Ratione nulla animi magnam accusantium pariatur veniam sit recusandae
        eaque explicabo libero esse quibusdam architecto perspiciatis laborum
        illo, asperiores possimus atque consequatur dolorum delectus
        exercitationem, tempore fuga. Deleniti, repudiandae fugiat? Corporis aut
        libero nulla mollitia magnam unde sunt quibusdam alias error dicta a
        nemo deserunt quae saepe officiis facere, impedit quisquam! Rerum nihil
        commodi quis suscipit rem similique aliquam placeat! Aliquam distinctio
        accusantium dolorum vel! Asperiores enim quod perferendis iusto dolor
        rerum corrupti fugiat deserunt impedit molestiae, illum obcaecati in at
        nobis necessitatibus vero sit dignissimos et quisquam est earum. Saepe,
        consectetur ex? Saepe nam ex dignissimos dolor totam magni, nisi fugiat
        natus cumque tempore eveniet voluptate magnam maxime error impedit
        accusantium distinctio dolorum aut? Dolorum maiores beatae aut
        recusandae? Libero pariatur asperiores iusto corrupti dicta beatae et
        possimus laborum cum quidem, deleniti voluptatibus eum, voluptates hic
        porro vel vitae natus culpa? Saepe maiores cumque vel tempore
        accusantium doloremque minima! Exercitationem ipsum, dolores dolorem
        magnam commodi tenetur itaque impedit harum corrupti. Doloribus vitae
        est possimus provident minus voluptas, optio illo non, consequatur unde
        animi harum officiis error, natus excepturi magni! Earum dolor quos,
        pariatur est quaerat porro laudantium ut! Accusamus quae quia similique
        impedit, facere nam exercitationem, praesentium modi quidem cum magni
        cupiditate fugit esse, voluptatem quaerat! Mollitia, neque. Doloremque.
        Nobis, ad recusandae! Pariatur doloribus libero voluptatem, facilis
        cupiditate ipsa laborum iusto veniam possimus explicabo quos sint ab ut,
        error exercitationem sequi consectetur perspiciatis iure hic ullam!
        Sint, non perferendis! Porro accusamus veritatis molestias tenetur
        maxime qui cum illum quaerat soluta, dolores sint facilis eveniet fugit,
        amet quae sed placeat atque animi harum quibusdam ipsa! Ullam incidunt
        delectus eos temporibus.
      </div> */}
    </div>
  );
}
