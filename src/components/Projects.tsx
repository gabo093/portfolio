import "./Projects.css";

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        <div className="project-card">
          <h3>Personal Portfolio</h3>
          <p>
            A modern, responsive portfolio built with React and Vite to showcase
            my skills and experience.
          </p>
          <p className="tech">React · JavaScript · CSS</p>
        </div>

        <div className="project-card">
          <h3>Process Improvement Dashboard</h3>
          <p>
            A dashboard concept focused on visualizing manufacturing KPIs and
            continuous improvement metrics.
          </p>
          <p className="tech">React · Charts · Data Visualization</p>
        </div>

        <div className="project-card">
          <h3>Contact Form App</h3>
          <p>
            A simple web application with a contact form and form validation.
          </p>
          <p className="tech">React · JavaScript · Forms</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
