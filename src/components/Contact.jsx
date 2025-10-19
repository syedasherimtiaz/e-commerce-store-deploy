import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div id="contact" className="py-20 bg-gradient-to-b from-[#200E01] to-[#5B0202]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#e0ded2] mb-4">Get In Touch</h2>
          <p className="text-[#e0ded2] text-lg opacity-90">We'd love to hear from you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slideRight">
            <div className="bg-[#e0ded2] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#8B0000] p-3 rounded-full">
                  <Mail className="text-[#e0ded2]" size={24} />
                </div>
                <div>
                  <h3 className="text-[#200E01] font-semibold text-xl mb-2">Email Us</h3>
                  <p className="text-[#5B0202]">support@noctura.com</p>
                  <p className="text-[#5B0202]">info@noctura.com</p>
                </div>
              </div>
            </div>

            <div className="bg-[#e0ded2] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#8B0000] p-3 rounded-full">
                  <Phone className="text-[#e0ded2]" size={24} />
                </div>
                <div>
                  <h3 className="text-[#200E01] font-semibold text-xl mb-2">Call Us</h3>
                  <p className="text-[#5B0202]">+92 (21) 123-4567</p>
                  <p className="text-[#5B0202]">Mon-Fri: 9AM - 6PM</p>
                </div>
              </div>
            </div>

            <div className="bg-[#e0ded2] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-[#8B0000] p-3 rounded-full">
                  <MapPin className="text-[#e0ded2]" size={24} />
                </div>
                <div>
                  <h3 className="text-[#200E01] font-semibold text-xl mb-2">Visit Us</h3>
                  <p className="text-[#5B0202]">2-B, East Street, Phase-I</p>
                  <p className="text-[#5B0202]">DHA, Karachi-75500</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#e0ded2] p-8 rounded-lg shadow-2xl animate-slideLeft">
            <h3 className="text-3xl font-bold text-[#200E01] mb-6">Send us a message</h3>
            
            {submitted ? (
              <div className="text-center py-12 animate-fadeIn">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="text-white" size={32} />
                </div>
                <h4 className="text-2xl font-bold text-[#200E01] mb-2">Message Sent!</h4>
                <p className="text-[#5B0202]">We'll get back to you soon.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#5B0202] focus:border-[#8B0000] outline-none bg-white transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#5B0202] focus:border-[#8B0000] outline-none bg-white transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#5B0202] focus:border-[#8B0000] outline-none bg-white transition-colors"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#5B0202] focus:border-[#8B0000] outline-none bg-white transition-colors resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#8B0000] text-[#e0ded2] py-4 rounded-full font-semibold text-lg hover:bg-[#5B0202] transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Send Message <Send size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
