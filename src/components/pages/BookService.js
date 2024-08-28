import React from "react";
import PropTypes from 'prop-types'

const BookServiceModel=({service,onClose})=>{
    return (
        <div className="service-modal">
        <div className="service-modal__content">
        <h2>{service.title} Booking</h2>
        <p>{service.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
        </div>
    )
}

BookServiceModel.propTypes = {
    service: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  export default BookServiceModel;