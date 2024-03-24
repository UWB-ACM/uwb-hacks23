import React from 'react';
import pawImage from './media/paw.png'; // Adjust the path as necessary
import avanade from './media/avanade.png'; // Adjust the path as necessary
import muirai from './media/muir-logo-light.png';

// Update this array with your actual sponsor data
const sponsors = [
  { id: 1, name: "Sponsor One", logo: avanade }, // Example sponsor
  { id: 2, name: "Sponsor Two", logo: muirai},
  // Add more sponsors as needed
];

const Sponsors = () => {
  return (
    <div className="sponsors-container">
      <div className="sponsor-header flex items-center justify-center my-10">
        <img src={pawImage} alt="Husky Paw" className="husky-paw" />
        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mx-5">Thank you to our sponsors</h2>
        <img src={pawImage} alt="Husky Paw" className="husky-paw" />
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="sponsor-logo-container m-5">
            <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo h-48 w-80 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
