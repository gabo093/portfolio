import "./Skills.css";

function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <h3>Frontend</h3>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>REST APIs</li>
            <li>Basic SQL</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Tools & Methods</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Vite</li>
            <li>Responsive Design</li>
            <li>Kaizen / Continuous Improvement</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
