import React from "react";
import sachin from "../assets/deepak.jpg"; 
import rajiv from "../assets/deepak.jpg"; 
import deepak from "../assets/deepak.jpg"; 
import shreyas from "../assets/deepak.jpg"; 
import yogesh from "../assets/deepak.jpg"; 
import harshita from "../assets/harshita.jpg"; 
import sapna from "../assets/harshita.jpg"; 
import aboutBanner from "../assets/about-banner.jpg"; // Import the image

const AboutUs = () => {
  const teamMembers = [
    { name: "Sachin Bamnolkar", role: "Founder & CEO", img: sachin },
    { name: "Rajiv Kumar Jain", role: "Advisor", img: rajiv },
    { name: "Deepak Bamel", role: "Head-Operations", img: deepak },
    { name: "Yogesh Bargude", role: "Operations Manager", img: yogesh },
    { name: "Shreyas Walture", role: "Business Development Manager", img: shreyas },
    { name: "Harshita Purandare", role: "Head-Customer Support", img: harshita },
    { name: "Sapna Atre", role: "Business Support Executive", img: sapna },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${aboutBanner})` }}>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl font-extrabold tracking-wide">About TruckTek</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto">
            **India’s Leading Logistics Partner** - Reliable, Efficient & Technology-Driven.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At <span className="text-[#FFBE2E] font-semibold">TruckTek</span>, we specialize in seamless logistics solutions powered by technology and an extensive transportation network.
            Our goal is to **redefine efficiency in supply chain management** and provide businesses with **top-tier transportation services**.
          </p>
          <div className="flex flex-wrap justify-center mt-8 gap-8">
            {[
              { title: "Nationwide Fleet", desc: "Reliable and extensive network covering all major regions." },
              { title: "Real-Time Tracking", desc: "24/7 monitoring and live tracking for complete transparency." },
              { title: "Trusted by Industries", desc: "We work with top businesses for their transport needs." },
            ].map((feature, index) => (
              <div key={index} className="w-80 bg-white p-6 rounded-lg shadow-md border-t-4 border-[#FFBE2E]">
                <h3 className="text-xl font-semibold text-gray-700">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 text-center">
          {[
            { title: "Our Mission", desc: "To provide seamless and efficient logistics solutions for businesses across industries." },
            { title: "Our Vision", desc: "To be India’s most trusted logistics partner, driving innovation in transportation." },
          ].map((item, index) => (
            <div key={index} className="bg-white shadow-lg p-8 rounded-lg border-t-4 border-[#FFBE2E]">
              <h3 className="text-2xl font-semibold text-gray-700">{item.title}</h3>
              <p className="mt-4 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="container mx-auto my-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 w-72 text-center">
              <img src={member.img} alt={member.name} className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-[#FFBE2E]" />
              <h3 className="text-xl font-semibold text-gray-700 mt-4">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Why Choose TruckTek?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              { title: "24/7 Operations", desc: "We operate round the clock to keep your goods moving." },
              { title: "Smart Logistics", desc: "AI-driven logistics ensures **faster & optimized deliveries**." },
              { title: "Customer Satisfaction", desc: "Dedicated support team for seamless transportation services." },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-[#FFBE2E]">
                <h3 className="text-xl font-semibold text-gray-700">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#FFBE2E] text-white text-center py-12">
        <h2 className="text-3xl font-bold">Partner with TruckTek</h2>
        <p className="mt-2 opacity-90">Looking for a reliable logistics partner? Let’s discuss how we can help!</p>
        <a href="/contact-us" className="mt-4 inline-block bg-white text-[#FFBE2E] font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
