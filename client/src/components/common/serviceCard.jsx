import "./ServiceCard.css";

function ServiceCard({ title, description, icon }) {
  return (
    <div className="service-card">
      <div className="service-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <button>Book Service</button>
    </div>
  );
}

export default ServiceCard;