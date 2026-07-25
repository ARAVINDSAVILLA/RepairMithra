import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">
<h1>
  Trusted Home Repair Services
  <br />
  at Your Doorstep
</h1>
        <p>
          Book verified electricians, plumbers, AC technicians,
          carpenters, and more with RepairMithra.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Book a Service
          </button>

          <button className="secondary-btn">
            Become a Technician
          </button>
        </div>

      </div>

    </section>
  );
}

export default Hero;