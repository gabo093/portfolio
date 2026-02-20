import "./Experience.css";

function Experience() {
  return (
    <section className="experience">
      <h2 className="section-title">Experience</h2>

      <div className="xp-item">
        <div className="xp-time">Aug 2024 – Present</div>
        <div className="xp-content">
          <h3>Manufacturing / OP II — Jabil (Dublin)</h3>
          <ul>
            <li>
              Certified rack testing, troubleshooting, rework, and test
              documentation.
            </li>
            <li>
              Quality inspection (Body Check) and build verification to
              specifications.
            </li>
            <li>
              Lean/Kaizen participation to reduce defects and improve workflow.
            </li>
          </ul>
        </div>
      </div>

      <div className="xp-item">
        <div className="xp-time">2020 – 2023</div>
        <div className="xp-content">
          <h3>
            Industrial / Manufacturing Engineer Support — Tecaltema (Bolivia)
          </h3>
          <ul>
            <li>
              Optimised engineering workflows and coordinated technical teams.
            </li>
            <li>
              Delivered renewable energy projects including solar installations.
            </li>
          </ul>
        </div>
      </div>

      <div className="xp-item">
        <div className="xp-time">2019 – 2022</div>
        <div className="xp-content">
          <h3>Trainer & Researcher — Renewable Energy Systems (EECOGUZ)</h3>
          <ul>
            <li>
              Designed and installed PV systems, using data to improve
              performance.
            </li>
            <li>
              Provided training and technical documentation for new staff.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
