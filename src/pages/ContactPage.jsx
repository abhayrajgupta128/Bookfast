import React from "react";

const ContactPage = () => {
  return (
    <div className="text-white grow flex items-center justify-around ">
      <div className="">
        <h1 className="text-4xl text-center mb-8 font-bold">Contact Us</h1>
        <div className="text-center">
          <p>
            Have questions, feedback, or need support? Feel free to reach out
            to us!
          </p>
          <p>
            We're here to help and would love to hear from you. Whether you
            have inquiries about bookings, <br /> suggestions for improving our
            services, or any other concerns, our team is ready to assist you.
          </p>
          <h2 className="text-2xl text-center mt-8">Contact Information</h2>
          <p className="mt-4">
            Email: support@example.com
          </p>
          <p>
            Phone: +1 (123) 456-7890
          </p>
          <h2 className="text-2xl text-center mt-8">Visit Us</h2>
          <p className="mt-4">
            Address: 123 Main Street, City, Country
          </p>
          <p>
            We're open Monday to Friday, 9am - 5pm.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
