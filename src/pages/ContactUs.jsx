import React from "react";

const ContactUs = () => {
  return (
    <section id="contact" className="bg-gradient-to-b from-gray-100 to-gray-300 py-16">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
        <p className="mt-3 text-gray-600 text-lg">We are here to assist you with seamless logistics solutions.</p>

        <div className="mt-6 text-gray-700 space-y-3">
          <p>📍 <strong>Location:</strong> Pune, Maharashtra, India</p>
          <p>📞 <strong>Call Us:</strong> +91 9588442375</p>
          <p>✉️ <strong>Email:</strong> info@trucktek.in</p>
        </div>

        <a 
          href="mailto:info@trucktek.in"
          className="mt-6 inline-block bg-[#FFBE2E] text-black font-semibold px-8 py-3 rounded-full shadow-md hover:bg-yellow-500 transition duration-300"
        >
          Contact Now
        </a>
      </div>
    </section>
  );
};

export default ContactUs;
