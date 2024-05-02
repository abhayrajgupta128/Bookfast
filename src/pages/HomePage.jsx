import React from "react";
import Hotel from "../components/Hotel";
import { images } from "../constants";

const HomePage = () => {
  return (
    <div className="text-white mt-8 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Hotel
        title="Luxury Grand Hotel"
        address="New York City"
        price="300"
        img={images.hotel1}
      />
      <Hotel
        title="Beachfront Resort & Spa"
        address="Miami Beach"
        price="250"
        img={images.hotel2}
      />
      <Hotel
        title="Mountain Lodge Retreat"
        address="Aspen"
        price="200"
        img={images.hotel3}
      />
      <Hotel
        title="Urban Boutique Hotel"
        address="San Francisco"
        price="280"
        img={images.hotel4}
      />
      <Hotel
        title="Historic Inn & Spa"
        address="Charleston"
        price="220"
        img={images.hotel5}
      />
      <Hotel
        title="Tropical Paradise Resort"
        address="Hawaii"
        price="350"
        img={images.hotel6}
      />
      <Hotel
        title="Riverside Retreat"
        address="Portland"
        price="180"
        img={images.hotel7}
      />
      <Hotel
        title="Cozy Cabin Resort"
        address="Lake Tahoe"
        price="150"
        img={images.hotel8}
      />
      <Hotel
        title="City Center Suites"
        address="Chicago"
        price="170"
        img={images.hotel9}
      />
      <Hotel
        title="Mountain Lodge Retreat"
        address="Aspen"
        price="200"
        img={images.hotel3}
      />

      <Hotel
        title="Urban Boutique Hotel"
        address="San Francisco"
        price="280"
        img={images.hotel4}
      />

      <Hotel
        title="Historic Inn & Spa"
        address="Charleston"
        price="220"
        img={images.hotel5}
      />

      <Hotel
        title="Tropical Paradise Resort"
        address="Hawaii"
        price="350"
        img={images.hotel6}
      />

      <Hotel
        title="Riverside Retreat"
        address="Portland"
        price="180"
        img={images.hotel7}
      />

      <Hotel
        title="Cozy Cabin Resort"
        address="Lake Tahoe"
        price="150"
        img={images.hotel8}
      />

      <Hotel
        title="City Center Suites"
        address="Chicago"
        price="260"
        img={images.hotel9}
      />

      <Hotel
        title="Seaside Villa"
        address="Malibu"
        price="400"
        img={images.hotel1}
      />

      <Hotel
        title="Mountain Chalet"
        address="Banff"
        price="180"
        img={images.hotel2}
      />
    </div>
  );
};

export default HomePage;
