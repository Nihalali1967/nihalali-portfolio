import React, { useState } from "react";
import { Send, Phone, MapPin, Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("Please fill in all required fields correctly.");
      return;
    }

    // Create a new FormData object to send to Web3Forms API
    const form = new FormData();
    form.append("access_key", "e611d2cc-8b48-4c1c-a74d-22553e0adbb0"); // Replace with your Web3Forms access key
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject || "New Contact Form Submission");
    form.append("message", formData.message);

    try {
      // Send form data to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        setStatus(result.message || "There was an error sending your message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <main
      className="pt-20 lg:pt-0 bg-[#04081A] text-white min-h-screen"
    >
      <section className="min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section header */}
          <div className="flex flex-col items-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-gray-400 font-medium">Let's Talk</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-center">
              Get in Touch
            </h2>
            <p className="text-gray-400 text-base md:text-lg text-center max-w-2xl">
              Have a project in mind or looking for a Full Stack Developer? Let's connect.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="space-y-6">
                <a href="mailto:nihalali1967@gmail.com" className="flex items-center space-x-4 group">
                  <div className="bg-purple-500/10 p-3 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-gray-300">Email</h3>
                    <p className="text-gray-400 text-sm">nihalali1967@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+916282981209" className="flex items-center space-x-4 group">
                  <div className="bg-green-500/10 p-3 rounded-lg group-hover:bg-green-500/20 transition-colors">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-gray-300">Phone / WhatsApp</h3>
                    <p className="text-gray-400 text-sm">+91 6282981209</p>
                  </div>
                </a>

                <div className="flex items-center space-x-4">
                  <div className="bg-pink-500/10 p-3 rounded-lg">
                    <MapPin className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-gray-300">Location</h3>
                    <p className="text-gray-400 text-sm">Malappuram, Kerala, India</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-4">
                <h3 className="font-semibold text-sm text-gray-300 mb-3">Connect</h3>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/Nihalali1967"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:text-white hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nihal-ali-a72784235"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:text-white hover:scale-105"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:nihalali1967@gmail.com"
                    aria-label="Email"
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:text-white hover:scale-105"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="backdrop-blur-lg bg-white/5 p-5 sm:p-6 md:p-8 rounded-2xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.name ? "border-red-500" : "border-gray-700"
                      } focus:border-blue-500 focus:outline-none transition-colors`}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.email ? "border-red-500" : "border-gray-700"
                      } focus:border-blue-500 focus:outline-none transition-colors`}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.subject ? "border-red-500" : "border-gray-700"
                      } focus:border-blue-500 focus:outline-none transition-colors`}
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.message ? "border-red-500" : "border-gray-700"
                      } focus:border-blue-500 focus:outline-none transition-colors resize-none`}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Status Message */}
              {status && (
                <div
                  className={`mt-4 text-center ${
                    status.includes("success")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  <p>{status}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
