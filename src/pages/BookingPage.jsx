import React from "react";

const Booking = () => {
  function inputHeader(text) {
    return <h2 className="text-white text-2xl mt-4">{text}</h2>;
  }
  function inputDescription(text) {
    return <p className="text-gray-500 text-sm">{text}</p>;
  }
  function preInput(header, description) {
    return (
      <div>
        {inputHeader(header)}
        {inputDescription(description)}
      </div>
    );
  }
  return (
    <div className="mt-8">
      <h1 className="text-white text-4xl text-center mr-8 -mb-4 font-bold primary">Book Now</h1>
      <form>
        {preInput("Name", "Please enter your full name")}
        <input type="text" placeholder="Abhay raj gupta" />

        {preInput("Email", "Please enter a valid email")}
        <input type="email" placeholder="your@email.com" />

        {preInput(
          "Contact",
          "Please enter your country code before no. like +91"
        )}
        <input type="text" placeholder="Enter your number" />

        {preInput("Number of Guests", "How many guests?")}
        <input type="number" placeholder="1" />

        {preInput(
          "Check in&out dates",
          "add check in and check out times, remember we have some time window for cleaning the room between guests"
        )}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          <div>
            <h3>Check in</h3>
            <input
              type="date"
              placeholder="14"
            />
          </div>
          <div>
            <h3>Check out</h3>
            <input
              type="date"
              placeholder="11"
            />
          </div>
        </div>

        <button className="mt-6 primary">Book</button>
      </form>
    </div>
  );
};

export default Booking;
