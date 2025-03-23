"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="web3-text-gradient">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-web3-purple to-web3-cyan mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out to
            me. I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 web3-text-gradient">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-web3-dark border border-web3-cyan flex items-center justify-center mr-4">
                  <FaEnvelope className="text-web3-cyan text-xl" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Email</h4>
                  <a
                    href="mailto:akshatmeena368@gmail.com"
                    className="text-white hover:text-web3-cyan transition-colors"
                  >
                    akshatmeena368@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-web3-dark border border-web3-cyan flex items-center justify-center mr-4">
                  <FaTwitter className="text-web3-cyan text-xl" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Twitter</h4>
                  <a
                    href="https://twitter.com/akshatmeena368"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-web3-cyan transition-colors"
                  >
                    @akshatmeena368
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-web3-dark border border-web3-cyan flex items-center justify-center mr-4">
                  <FaLinkedin className="text-web3-cyan text-xl" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/akshat-meena20/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-web3-cyan transition-colors"
                  >
                    akshat-meena20
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-web3-dark border border-web3-cyan flex items-center justify-center mr-4">
                  <FaGithub className="text-web3-cyan text-xl" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">GitHub</h4>
                  <a
                    href="https://github.com/Akshat-cs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-web3-cyan transition-colors"
                  >
                    Akshat-cs
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="web3-card p-8">
              <h3 className="text-2xl font-bold mb-6 web3-text-gradient">
                Send Me a Message
              </h3>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-900 bg-opacity-30 border border-green-500 text-green-400 rounded">
                  Your message has been sent but better to reach out on Linkedin
                  or Twitter. I' ll respond much faster there.
                </div>
              )}

              {submitError && (
                <div className="mb-6 p-4 bg-red-900 bg-opacity-30 border border-red-500 text-red-400 rounded">
                  {submitError}
                </div>
              )}

              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-web3-dark border border-gray-700 rounded focus:outline-none focus:border-web3-cyan text-white"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-web3-dark border border-gray-700 rounded focus:outline-none focus:border-web3-cyan text-white"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-web3-dark border border-gray-700 rounded focus:outline-none focus:border-web3-cyan text-white resize-none"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="web3-border-gradient px-6 py-3 text-web3-cyan font-medium w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-web3-cyan"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
