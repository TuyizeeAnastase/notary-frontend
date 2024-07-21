import React from 'react';
import '../styles/ServicesCard.scss';
import PropTypes from 'prop-types';



const ServicesCard = ({ service, onDetailsClick, onBookClick }) => {
  return (
    <div className="service-card">
      <div className="service-card__image">
        <img src={service.image} alt={service.title} />
      </div>
      <div className="service-card__content">
        <h3>{service.title}</h3>
        <div className="service-card__buttons">
          <button onClick={() => onDetailsClick(service)}>Details</button>
          <button onClick={() => onBookClick(service)}>Book</button>
        </div>
      </div>
    </div>
  );
};

ServicesCard.propTypes = {
  service: PropTypes.object.isRequired,
  onDetailsClick: PropTypes.func.isRequired,
  onBookClick: PropTypes.func.isRequired,
};

export default ServicesCard;
