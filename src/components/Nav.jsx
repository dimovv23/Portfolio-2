import logo from "../assets/Picture12.png";

const Nav = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="Logo" width={40} />
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="">Contact</a>
    </nav>
  );
};

export default Nav;
