import React from "react";
import heroImage from "../assets/full-load.jpg"; // Add a relevant image in src/assets/

const HeroSection = () => {
  return (
    <section
      className="relative text-white text-center py-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-bold">Delivering Commitments</h2>
        <p className="mt-4 text-lg">Reliable and efficient transport solutions for businesses.</p>
        <button className="mt-6 bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-600">
          Get a Quote
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

