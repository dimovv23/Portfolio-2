import Reveal from "../components/utils/Reveal";

const Hero = () => {
  return (
    <section className="section-wrapper">
      <div className="hero-wrapper">
        <Reveal>
          <h1>
            Hey, I'm Georgi<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2>
            I'm a <span>Software Engineer</span>
          </h2>
        </Reveal>
        <Reveal>
          <p>
            I've spent the last 2 years developing my skills and knowledge for
            software development. If you need a passionate software engineer for
            your project, don't hesitate to contact me! Let's connect and bring
            your vision to life!
          </p>
        </Reveal>
        <Reveal width="fit-content" padding="0.5rem 0">
          <a href="#contacts">Contact me</a>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
