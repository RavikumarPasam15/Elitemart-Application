import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Helpdesk = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      alert("⚠️ Please fill in all fields before submitting.");
      return;
    }

    alert("✅ Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className=" min-h-screen py-12 px-4 md:px-16">
      {/* Section Title */}
      

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Contact Form */}
        <div className="flex-1">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 bg-white bg-opacity-5 backdrop-blur-md p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-3 xl md:text-4xl font-extrabold text-start text-orange-500 mb-10">
        Contact Us
      </h2>
      <p className="text-gray-500 mb-6">We'd love to hear from you!</p>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            ></textarea>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition-all duration-300"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Right: Contact Info + Map */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Contact Info */}
          <div className="space-y-4 text-gray-800">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-orange-500" />
              123 Tech Lane, Whitefield, Bangaluru City
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-orange-500" />
              +1 (555) 123 667
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-orange-500" />
              elitemart@ecommerce.com
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 text-orange-500">
            <FaLinkedin className="cursor-pointer hover:text-orange-700 transition" />
            <FaTwitter className="cursor-pointer hover:text-orange-700 transition" />
            <FaFacebook className="cursor-pointer hover:text-orange-700 transition" />
            <FaInstagram className="cursor-pointer hover:text-orange-700 transition" />
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden shadow-md h-64 md:h-80 w-full">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.873157897106!2d77.5945627147193!3d12.9715987908589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670d4a9d4f9%3A0x7c0cbef1c5a8ef2a!2sTech%20Solutions!5e0!3m2!1sen!2sin!4v1696783000000!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Helpdesk;
