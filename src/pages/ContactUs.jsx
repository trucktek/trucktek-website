// src/pages/ContactUs.jsx

import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // "loading" | "success" | "error" | null

  // 🔗 Use your new Apps Script Web App URL (the /exec one)
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzExYTPkqSmxbRDhytvmvFoJWUtF3PE365acIQ31_cKpV4BEBJ-rQIhq-mRczcxQELysQ/exec";

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Build URL-encoded body (name=...&email=... etc.)
      const payload = new URLSearchParams();
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("message", formData.message);

      // Use fetch with no-cors so browser doesn't block it
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: payload.toString(),
      });

      // In no-cors mode we can't read the response,
      // but if no exception was thrown, we assume it went through.
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
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
          <p>
            📍 <strong>Location:</strong> Pune, Maharashtra, India
          </p>
          <p>
            📞 <strong>Call Us:</strong> +91 9588442375
          </p>
          <p>
            ✉️ <strong>Email:</strong> info@trucktek.in
          </p>
        </div>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <button
            type="submit"
            className="bg-[#FFBE2E] text-black font-semibold px-8 py-3 rounded-full shadow-md hover:bg-yellow-500 transition"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-3 text-green-600">
            Message sent successfully! We will get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="mt-3 text-red-600">
            Something went wrong. Please try again later.
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactUs;
