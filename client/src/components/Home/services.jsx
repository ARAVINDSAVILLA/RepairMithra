import "./Services.css";
import ServiceCard from "../common/ServiceCard";

import {
  Snowflake,
  Zap,
  Wrench,
  Bug,
  Droplets,
  Camera,
  Hammer,
  Paintbrush,
  Smartphone,
  Laptop,
  Monitor,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "AC Repair",
    description: "Professional AC installation and repair.",
    icon: <Snowflake size={50} color="#0F4C81" />,
  },
  {
    title: "Electrician",
    description: "Safe and reliable electrical services.",
    icon: <Zap size={50} color="#0F4C81" />,
  },
  {
    title: "Plumbing",
    description: "Leakage, fittings and pipe repair.",
    icon: <Wrench size={50} color="#0F4C81" />,
  },
  {
    title: "Pest Control",
    description: "Keep your home pest free.",
    icon: <Bug size={50} color="#0F4C81" />,
  },
  {

  title: "Refrigerator Repair",
  description: "Fast refrigerator repair services.",
  icon: <Monitor size={50} color="#0F4C81" />,
},
  
  {
   title: "Washing Machine",
  description: "Repair for all washing machine brands.",
  icon: <ShieldCheck size={50} color="#0F4C81" />,
  },
  {
    title: "RO Water Purifier",
    description: "RO installation and maintenance.",
    icon: <Droplets size={50} color="#0F4C81" />,
  },
  {
    title: "CCTV Installation",
    description: "Home and office security solutions.",
    icon: <Camera size={50} color="#0F4C81" />,
  },
  {
    title: "Carpenter",
    description: "Furniture repair and woodwork.",
    icon: <Hammer size={50} color="#0F4C81" />,
  },
  {
    title: "Painting",
    description: "Interior and exterior painting.",
    icon: <Paintbrush size={50} color="#0F4C81" />,
  },
  {
    title: "Mobile Repair",
    description: "Screen, battery and hardware repair.",
    icon: <Smartphone size={50} color="#0F4C81" />,
  },
  {
    title: "Laptop Repair",
    description: "Laptop servicing and upgrades.",
    icon: <Laptop size={50} color="#0F4C81" />,
  },
];

function Services() {
  return (
    <section className="services">
      <div className="container">
        <h2>Our Popular Services</h2>

        <p className="subtitle">
          Trusted professionals for all your repair and maintenance needs.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;