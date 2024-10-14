import React from "react";
import PropTypes from 'prop-types'
import '../styles/BookServiceModel.scss'
import { useNavigate } from 'react-router-dom';

const BookServiceModel=({service,onClose})=>{
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate(`/book/${service.id}`);
  };

    return (
        <div className="service-modal">
        <div className="service-modal__content">
        <h2>{service.title} Booking</h2>
        <p>{service.description}</p>
        <button  onClick={handleBookClick}>Book</button>
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