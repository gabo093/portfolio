import "./Skills.css";

function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <h3>Manufacturing & Test (Jabil)</h3>
          <ul>
            <li>
              Rack server testing, verification, fault diagnosis, and rework
              procedures
            </li>
            <li>
              Quality inspection (Body Check) and build verification to
              engineering specs
            </li>
            <li>
              Server/rack assembly, hardware integration, and cabling to
              technical drawings
            </li>
            <li>Test documentation and failure analysis (iFactory, Excel)</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Process Improvement</h3>
          <ul>
            <li>Lean / Kaizen continuous improvement</li>
            <li>A3 problem solving, defect reduction, workflow optimisation</li>
            <li>Data analysis & reporting for quality and productivity</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Software & Development</h3>
          <ul>
            <li>React (component-based UI), JavaScript (ES6+)</li>
            <li>TypeScript (basic), Git/GitHub, Vite, VS Code</li>
            <li>Java (Spring Boot foundations), MySQL fundamentals</li>
            <li>Debugging & troubleshooting mindset</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
