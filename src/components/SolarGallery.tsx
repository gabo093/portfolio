import "./SolarGallery.css";

import s1 from "../assets/solar/solar-01.jpg";
import s2 from "../assets/solar/solar-02.jpg";
import s3 from "../assets/solar/solar-03.jpg";
import s4 from "../assets/solar/solar-04.jpg";
import s5 from "../assets/solar/solar-05.jpg";

const photos = [s1, s2, s3, s4, s5];

function SolarGallery() {
  return (
    <section className="solar">
      <h2 className="section-title">Solar & Renewable Energy Work</h2>
      <p className="solar-sub">
        A selection of renewable energy projects and installations I
        supported/managed (Bolivia).
      </p>

      <div className="solar-grid">
        {photos.map((src, idx) => (
          <img key={idx} src={src} alt={`Solar project ${idx + 1}`} />
        ))}
      </div>
    </section>
  );
}

export default SolarGallery;
