import React from "react";
import ServiceCard from "../components/ServiceCard.jsx";
import servicesData from "../data/servicesData.js";

const Services = () => {
  return (
    <section id="services" className="bg-white py-16">
      <h2 className="text-3xl font-bold text-center text-black">Our Services</h2>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
