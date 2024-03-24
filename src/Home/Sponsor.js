import React from 'react';
import SponsorCard from './SponsorCard'; // Assuming SponsorCard is in the same directory
import pawImage from './media/paw.png'; // Replace with path to your paw image

const Sponsors = ({ sponsors }) => { // 'sponsors' is an array of sponsor objects
  return (
    <>
      <div className="sponsor-header">
        <img src={pawImage} alt="Husky Paw" className="husky-paw" />
        <h2>Thank you to our sponsors</h2>
        <img src={pawImage} alt="Husky Paw" className="husky-paw" />
      </div>
      <div className="sponsor-cards-container">
        {sponsors.map((sponsor) => (
          <SponsorCard key={sponsor.id} backgroundImage={sponsor.logo} />
        ))}
      </div>
    </>
  );
};

export default Sponsors;
