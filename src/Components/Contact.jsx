import emailjs from "@emailjs/browser";
import React, { useRef } from 'react';
import { motion } from "motion/react"

const Contact = () => {
    const from = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_o98kjah", "template_qfvodrq", from.current, {
        publicKey: "j7kaVBGgEPMIxxfJj"
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-900 text-white p-8 lg:p-16 gap-8">
      {/* Left Section */}
      <div className="flex-1 space-y-4">
        <motion.h2 
        initial={{ x: -100, opacity:0 }} 
        animate={{ x:0, opacity:1}}
        transition={{duration:0.5,delay:1}}
        className="text-3xl font-bold">Contact Me</motion.h2>
        <motion.p className="text-gray-400">I'd really love to hear your feedback</motion.p>
        <div className="space-y-6">
          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <span className="text-xl">📞</span>
            <p>01758759327</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-xl">📍</span>
            <p>Dhaka, Bangladesh</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-xl">📧</span>
            <p>jannatunfima67@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-gray-800 p-8 rounded-lg shadow-lg">
        <form ref={from}  onSubmit={sendEmail} className="space-y-6">
          {/* Name, Email, Phone */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              className="w-full p-3 bg-gray-700 rounded-lg placeholder-gray-400 text-white"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="w-full p-3 bg-gray-700 rounded-lg placeholder-gray-400 text-white"
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-3 bg-gray-700 rounded-lg placeholder-gray-400 text-white"
            />
          </div>

          {/* Subject */}
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 bg-gray-700 rounded-lg placeholder-gray-400 text-white"
            required
          />

          {/* Message */}
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full p-3 bg-gray-700 rounded-lg placeholder-gray-400 text-white"
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
