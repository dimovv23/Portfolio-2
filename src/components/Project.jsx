const Project = ({ url, name, description, technologies }) => {
  return (
    <a target="_blank" href={url}>
      <div className="project-card">
        <h4>{name}</h4>
        <p className="project-tech">{technologies}</p>
        <p className="project-desc">{description}</p>
      </div>
    </a>
  );
};

export default Project;
