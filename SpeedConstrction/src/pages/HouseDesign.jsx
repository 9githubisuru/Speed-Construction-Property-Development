import React from "react";
import NavBar from "../components/navBar";
import HouseCard from "../components/HouseCard";

// Import house images
import img1 from "../assets/housedesign/img1.jpeg";
import img2 from "../assets/housedesign/img2.jpeg";
import img3 from "../assets/housedesign/img3.jpeg";
import img4 from "../assets/housedesign/img4.jpeg";
import img5 from "../assets/housedesign/img5.jpeg";
import img6 from "../assets/housedesign/img6.jpeg";
import img7 from "../assets/housedesign/img7.jpeg";
import img8 from "../assets/housedesign/img8.jpeg";

const houseData = [
  {
    image: img1,
    title: "Modern Villa",
    description:
      "A spacious modern villa with contemporary design and ample natural light.",
  },
  {
    image: img2,
    title: "Cozy Cottage",
    description:
      "Charming cottage perfect for a small family, featuring rustic elements.",
  },
  {
    image: img3,
    title: "Urban Apartment",
    description: "Sleek urban apartment design optimized for city living.",
  },
  {
    image: img4,
    title: "Luxury Mansion",
    description:
      "Grand mansion with high-end finishes and extensive living spaces.",
  },
  {
    image: img5,
    title: "Beach House",
    description:
      "Relaxing beach house design with ocean views and open layouts.",
  },
  {
    image: img6,
    title: "Mountain Retreat",
    description:
      "Cozy mountain retreat blending comfort with natural surroundings.",
  },
  {
    image: img7,
    title: "Minimalist Home",
    description:
      "Clean and simple minimalist design focusing on functionality.",
  },
  {
    image: img8,
    title: "Traditional House",
    description:
      "Classic traditional house with timeless architectural elements.",
  },
];

const HouseDesigns = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center my-12 text-gray-800">
          Sample House Designs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {houseData.map((house, index) => (
            <HouseCard key={index} image={house.image} title={house.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HouseDesigns;
