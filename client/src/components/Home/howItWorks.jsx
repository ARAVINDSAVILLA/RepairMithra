import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    title: "Choose a Service",
    description: "Select the repair or maintenance service you need."
  },
  {
    number: "02",
    title: "Book a Time",
    description: "Choose a convenient date and time for your appointment."
  },
  {
    number: "03",
    title: "Technician Visits",
    description: "A verified technician arrives at your doorstep."
  },
  {
    number: "04",
    title: "Service Completed",
    description: "Get your work done professionally and pay securely."
  }
];

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2>How It Works</h2>

        <p className="subtitle">
          Book your service in four simple steps.
        </p>

        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-card" key={step.number}>
              <div className="step-number">{step.number}</div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;