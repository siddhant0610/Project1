import React, { useState } from 'react';
import axios from 'axios';

export default function Contactus() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      console.log('Server response:', response.data);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to send message. Please try again.');
    }
  };

  return (
    <section className="py-16 px-6 text-center min-h-screen bg-indigo-700 dark:bg-indigo-900 text-white">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="mb-6">Have questions or want to book a session? We'd love to hear from you.</p>
      {success && <p className="text-green-300">Message sent successfully!</p>}
      {error && <p className="text-red-300">{error}</p>}
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md text-black"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md text-black"
          required
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md text-black"
          required
        ></textarea>
        <button type="submit" className="bg-white text-indigo-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
