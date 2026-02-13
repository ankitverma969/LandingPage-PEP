import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">

        <h2 className="logo">BlueTech</h2>

        <ul className="nav-links">
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>

        <button className="btn-primary">Get Started</button>

      </div>
    </nav>
  );
};

export default Navbar;
