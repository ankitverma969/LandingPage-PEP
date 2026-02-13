import "../styles/Features.css";

const Features = () => {
  return (
    <section className="features">

      <div className="container">

        <h2 className="section-title">
          Features
        </h2>

        <div className="features-grid">

          <div className="feature-card">
            <h3>Fast</h3>
            <p>Lightning fast performance</p>
          </div>

          <div className="feature-card">
            <h3>Secure</h3>
            <p>Top level security</p>
          </div>

          <div className="feature-card">
            <h3>Responsive</h3>
            <p>Mobile friendly design</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Features;
