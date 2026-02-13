import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Hi, I’m Gabriel 👋</h1>
        <h2>Industrial Engineer & Frontend Developer</h2>
        <p>
          I build modern, responsive web applications using React, JavaScript,
          and clean UI principles.
        </p>
      </div>

      <div className="hero-image">
        <img src="/profile.jpeg" alt="Gabriel Rasguido Copa" />
      </div>
    </section>
  );
}

export default Hero;
