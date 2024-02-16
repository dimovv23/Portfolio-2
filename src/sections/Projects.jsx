import { projects } from "../constants/constants";
import Project from "../components/Project";

const Projects = () => {
  return (
    <section id="projects" className="section-wrapper">
      <div className="about-heading-wrapper" style={{ flexDirection: "row" }}>
        <div className="header-line"></div>
        <h3>
          Projects<span>.</span>
        </h3>
      </div>
      <div className="projects-content">
        {projects.map((project) => (
          <Project
            name={project.name}
            description={project.description}
            url={project.url}
            technologies={project.tecnologies}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
