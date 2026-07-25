import "./WhyChooseUs.css";

const features = [
  {
    title: "Verified Technicians",
    description: "Every technician is verified and trained to deliver quality service."
  },
  {
    title: "Affordable Pricing",
    description: "Transparent pricing with no hidden charges."
  },
  {
    title: "Fast Doorstep Service",
    description: "Book a service and get help at your doorstep quickly."
  },
  {
    title: "100% Satisfaction",
    description: "We strive to provide the best customer experience every time."
  }
];

function WhyChooseUs() {
  return (
    <section className="why-choose">
      <div className="container">
        <h2>Why Choose RepairMithra?</h2>

        <p className="subtitle">
          Reliable home services delivered by trusted professionals.
        </p>

        <div className="feature-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;