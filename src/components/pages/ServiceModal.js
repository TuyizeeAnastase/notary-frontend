// components/ServiceModal.jsx
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ServiceModal.scss';


const ServiceModal = ({ service, onClose }) => {


  return (
    <div className="service-modal">
      <div className="service-modal__content">
        <h2>{service.title}</h2>
        <p>{service.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

ServiceModal.propTypes = {
  service: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ServiceModal;
