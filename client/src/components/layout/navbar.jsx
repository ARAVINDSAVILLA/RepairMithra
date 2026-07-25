import "./Navbar.css";
import logo from "../../assets/images/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="RepairMithra Logo" />
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
        <li>Become a Technician</li>
      </ul>

      <button className="book-btn">
        Book a Service
      </button>
    </nav>
  );
}

export default Navbar;