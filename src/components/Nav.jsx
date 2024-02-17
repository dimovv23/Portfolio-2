import logo from "../assets/Picture12.png";
import SlideRight from "./utils/SlideRight";

const Nav = () => {
  return (
    <SlideRight height="100vh">
      <nav className="nav">
        <img src={logo} alt="Logo" width={40} />
        <SlideRight delay={0.3}>
          <a href="#about">About</a>
        </SlideRight>
        <SlideRight delay={0.4}>
          <a href="#projects">Projects</a>
        </SlideRight>
        <SlideRight delay={0.5}>
          <a href="#contacts">Contact</a>
        </SlideRight>
      </nav>
    </SlideRight>
  );
};

export default Nav;
