import { projects } from "../constants/constants";
import Project from "../components/Project";
import Reveal from "../components/utils/Reveal";

const Projects = () => {
  return (
    <section id="projects" className="section-wrapper">
      <Reveal>
        <div className="about-heading-wrapper" style={{ flexDirection: "row" }}>
          <div className="header-line"></div>
          <h3>
            Projects<span>.</span>
          </h3>
        </div>
      </Reveal>
      <div className="projects-content">
        {projects.map((project) => (
          <Reveal>
            <Project
              name={project.name}
              description={project.description}
              url={project.url}
              technologies={project.tecnologies}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
