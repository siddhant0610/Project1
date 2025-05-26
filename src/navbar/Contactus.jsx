import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-primaryBg py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Static Info */}
        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-md border border-secondaryAccent">
          <h2 className="text-3xl font-bold text-primaryAccent mb-6">Get in Touch</h2>
          <div className="space-y-6 text-textMain">
            <div>
              <h3 className="font-semibold text-lg">Name</h3>
              <p>Tatvaalignment </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p>contact@tatvaalignment.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p>+91-9876543210</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <p>Dwarka new Delhi </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Business Hours</h3>
              <p>Mon - Sat: 10 AM - 6 PM</p>
            </div>
          </div>
        </div>

        {/* Dynamic Form */}
        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-md border border-secondaryAccent">
          <h2 className="text-3xl font-bold text-primaryAccent mb-6">Send Us a Message</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-textMain">Full Name</label>
              <input
                type="text"
                name="name"
                className="w-full mt-1 p-2 border rounded-lg shadow-sm bg-white border-secondaryAccent focus:ring-highlight focus:border-highlight"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-textMain">Email</label>
              <input
                type="email"
                name="email"
                className="w-full mt-1 p-2 border rounded-lg shadow-sm bg-white border-secondaryAccent focus:ring-highlight focus:border-highlight"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-textMain">Message</label>
              <textarea
                name="message"
                rows="5"
                className="w-full mt-1 p-2 border rounded-lg shadow-sm bg-white border-secondaryAccent focus:ring-highlight focus:border-highlight"
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="bg-highlight text-white px-6 py-2 rounded-lg hover:bg-primaryAccent transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
{/*routes for services, detailed info for each session */}