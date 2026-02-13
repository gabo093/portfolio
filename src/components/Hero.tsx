import profileImg from "../assets/profile.jpeg";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Hi, I’m Gabriel 👋</h1>
        <h2>Industrial Engineer | Front-End Developer (React, JavaScript)</h2>
        <p>
          I build clean, responsive web applications with React and modern
          JavaScript. I bring a strong engineering mindset from
          manufacturing—focused on quality, efficiency, and continuous
          improvement.
        </p>
        <div className="hero-actions">
          <a
            className="btn primary"
            href={`${import.meta.env.BASE_URL}Gabriel_Rasguido_CV.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profileImg} alt="Gabriel Rasguido Copa" />
      </div>
    </section>
  );
}

export default Hero;
