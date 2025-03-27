import React, { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Base URL for server
  const BASE_URL = "https://cmi-project-backend.onrender.com/api";

  // const BASE_URL = "http://localhost:5000/api";

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");


    try {
      const response = await axios.post(
        `${BASE_URL}/contact`,
        formData
      );
      
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form
      console.log(status);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("error");
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-300 py-16">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
        <p className="mt-3 text-gray-600 text-lg">
          We are here to assist you with seamless logistics solutions.
        </p>

        <div className="mt-6 text-gray-700 space-y-3">
          <p>📍 <strong>Location:</strong> Pune, Maharashtra, India</p>
          <p>📞 <strong>Call Us:</strong> +91 9588442375</p>
          <p>✉️ <strong>Email:</strong> info@trucktek.in</p>
        </div>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required 
            value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
          <input type="email" name="email" placeholder="Your Email" required 
            value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
          <input type="tel" name="phone" placeholder="Your Phone" required 
            value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
          <textarea name="message" placeholder="Your Message" required 
            value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />

          <button type="submit" className="bg-[#FFBE2E] text-black font-semibold px-8 py-3 rounded-full shadow-md hover:bg-yellow-500 transition">
            Send Message
          </button>
        </form>

        {status === "loading" && <p className="mt-3 text-gray-600">Sending...</p>}
        {status === "success" && <p className="mt-3 text-green-600">Message sent successfully!</p>}
        {status === "error" && <p className="mt-3 text-red-600">Something went wrong. Try again.</p>}
      </div>
    </section>
  );
};

export default ContactUs;
