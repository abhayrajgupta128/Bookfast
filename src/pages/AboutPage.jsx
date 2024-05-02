import React from "react";

const AboutPage = () => {
  return (
    <div className="text-white grow flex items-center justify-around">
      <div>
        <h1 className="text-4xl text-center mb-8 font-bold">About Us</h1>
        <div className="text-center">
          <p>
            Welcome to our application! We strive to provide the best booking
            experience for our users.
          </p>
          <p>
            Our mission is to make travel planning easy and convenient, allowing
            our customers to focus on enjoying their trips.
          </p>
          <p>
            If you have any questions or feedback, please don't hesitate to
            contact us.
          </p>
          <h2 className="text-2xl text-center mt-8">Our Mission</h2>
          <p className="mt-4">
            Our mission is to empower travelers by simplifying the booking
            process and offering transparent pricing and reliable <br />    We aim to create a community where travelers can share their
            experiences and discover new destinations.
          </p>
          <h2 className="text-2xl text-center mt-8">Our Team</h2>
          <p className="mt-4">
            We're a passionate team of developers, designers, and travel
            enthusiasts who are dedicated to building the best possible
            experience for our users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
