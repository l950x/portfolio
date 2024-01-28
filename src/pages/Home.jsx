import { Link } from "react-scroll";
import ProjectPreview from "../components/ProjectPreview";
import "../assets/css/home.css";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="top">
      <Navbar />
      <div className="partOne">
        <h1>l.950</h1>
        <h2>Full Stack Developper</h2>
        <h3>Since 2023</h3>
      </div>
      <Link to="scrolltohere" smooth={true}>
        <button className="ProjectBtn">See my projects</button>
      </Link>
      <div className="scrolltohere"></div>
      {/* <h2>Projets</h2> */}
      {/* <hr /> */}
      <div className="Home">
        <div className="HomePreview" id="HomePreview">
          <ProjectPreview preview={1} />
          <ProjectPreview preview={2} />
          <ProjectPreview preview={3} />
        </div>
        <div className="ProjectPreviewBtn">
          <Link to="top" smooth={true}>
            <button className="OtherBtn">Back</button>
          </Link>
          <Link to="scrolltohere" smooth={true}>
            <button className="OtherBtn">Informations</button>
          </Link>
        </div>
      </div>
      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
    </div>
  );
};

export default Home;
