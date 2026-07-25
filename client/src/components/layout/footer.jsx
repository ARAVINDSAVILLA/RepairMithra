import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <h2>RepairMithra</h2>

          <p>
            Trusted home repair services. Connecting customers with
            skilled and verified technicians.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Coming Soon</li>
          </ul>
        </div>

        <div className="footer-services">
          <h3>Popular Services</h3>

          <ul>
            <li>AC Repair</li>
            <li>Electrician</li>
            <li>Plumbing</li>
            <li>Carpenter</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 RepairMithra. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;