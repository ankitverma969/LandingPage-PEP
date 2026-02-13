import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">

      <div className="container hero-container">

        <div className="hero-text">
          <h1>
            Build Modern Websites Faster
          </h1>

          <p>
            Create professional landing pages with clean design and powerful performance.
          </p>

          <button className="btn-primary">
            Start Now
          </button>
        </div>

        <div className="hero-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/906/906324.png"
            alt="hero"
          />
        </div>

      </div>

    </section>
  );
};

export default Hero;
