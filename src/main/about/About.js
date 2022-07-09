import { Link } from "react-router-dom";
import "./About.css";
import { Footer } from "../../common/footer/Footer";
import { Header } from "../../common/header/Header";

function About() {
  return (
    <div className="About">
      <Header></Header>
      {/* Temporary */}
      <p className="Interim">this is the about page</p>
      <Link to="/about"></Link>
      <Footer></Footer>
    </div>
  );
}

export default About;
