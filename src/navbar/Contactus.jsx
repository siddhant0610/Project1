import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    const response = await fetch('https://backend-4-1eac.onrender.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const contentType = response.headers.get("content-type");

    if (!response.ok) {
      let errorMessage = "Something went wrong.";
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        errorMessage = data.message || errorMessage;
      } else {
        errorMessage = await response.text();
      }
      throw new Error(errorMessage);
    }

    const data = await response.json(); // safe to parse now
    if (data.success) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setSubmitStatus("error");
      console.error("Backend error:", data);
    }
  } catch (error) {
    setSubmitStatus("error");
    console.error("Fetch error:", error.message);
  }

  setIsSubmitting(false);
  setTimeout(() => setSubmitStatus(null), 5000);
};


  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F1] to-[#E8DBC5] py-16 px-4 sm:px-6 dark:bg-gradient-to-b dark:from-[#4B3869] dark:to-[#3A2A54]">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#4B3869] mb-4 dark:text-[#F5F0E6]">Contact Tatva Alignment</h1>
          <p className="text-lg text-[#3E3E3E] max-w-2xl mx-auto dark:text-[#DACFBB]">
            Reach out for spiritual guidance, session inquiries, or any questions you may have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information Card */}
          <div className="bg-[#FAF8F1]/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-[#CBA135]/50 hover:shadow-xl transition-shadow duration-300 dark:bg-[#4B3869]/80 dark:border-[#DDBEC3]/50">
            <h2 className="text-3xl font-bold text-[#4B3869] mb-6 dark:text-[#F5F0E6]">Contact Information</h2>
            <div className="space-y-6 text-[#3E3E3E] dark:text-[#DACFBB]">
              <div className="flex items-start">
                <div className="bg-[#CBA135]/20 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-[#CBA135]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Name</h3>
                  <p className="text-[#3E3E3E] dark:text-[#DACFBB]">Neelu Khajuria</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#CBA135]/20 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-[#CBA135]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-[#3E3E3E] dark:text-[#DACFBB]">neelukhajuria11@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#CBA135]/20 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-[#CBA135]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-[#3E3E3E] dark:text-[#DACFBB]">+91 81305 64144</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#CBA135]/20 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-[#CBA135]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Address</h3>
                  <p className="text-[#3E3E3E] dark:text-[#DACFBB]">Dwarka, New Delhi, India</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#CBA135]/20 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-[#CBA135]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Business Hours</h3>
                  <p className="text-[#3E3E3E] dark:text-[#DACFBB]">Monday - Saturday: 10 AM - 6 PM</p>
                  <p className="text-[#3E3E3E] dark:text-[#DACFBB]">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#FAF8F1]/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-[#CBA135]/50 hover:shadow-xl transition-shadow duration-300 dark:bg-[#4B3869]/80 dark:border-[#DDBEC3]/50">
            <h2 className="text-3xl font-bold text-[#4B3869] mb-6 dark:text-[#F5F0E6]">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#3E3E3E] mb-1 dark:text-[#DACFBB]">
                  Full Name <span className="text-[#CBA135]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#DDBEC3] rounded-lg focus:ring-2 focus:ring-[#CBA135] focus:border-[#CBA135] transition dark:bg-[#3A2A54]/50 dark:border-[#DDBEC3] dark:text-[#F5F0E6]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#3E3E3E] mb-1 dark:text-[#DACFBB]">
                  Email <span className="text-[#CBA135]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#DDBEC3] rounded-lg focus:ring-2 focus:ring-[#CBA135] focus:border-[#CBA135] transition dark:bg-[#3A2A54]/50 dark:border-[#DDBEC3] dark:text-[#F5F0E6]"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#3E3E3E] mb-1 dark:text-[#DACFBB]">
                  Message <span className="text-[#CBA135]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#DDBEC3] rounded-lg focus:ring-2 focus:ring-[#CBA135] focus:border-[#CBA135] transition dark:bg-[#3A2A54]/50 dark:border-[#DDBEC3] dark:text-[#F5F0E6]"
                  placeholder="Your message or inquiry..."
                ></textarea>
              </div>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-100 text-green-700 rounded-lg dark:bg-green-900 dark:text-green-100">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-lg font-medium transition ${isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-[#CBA135] hover:bg-[#4B3869] text-white shadow-md hover:shadow-lg dark:bg-[#DDBEC3] dark:hover:bg-[#CBA135] dark:text-[#4B3869]'}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;