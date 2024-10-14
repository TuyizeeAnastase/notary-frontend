import React, { useState,useEffect } from 'react';
import ServiceCard from './ServicesCard';
import ServiceModal from './ServiceModal';
import BookServiceModel from './BookService';
import '../styles/services.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Services=()=>{
    const [services, setServices] = useState([]);
   const [selectedService, setSelectedService] = useState(null);
  const [bookService, setBookService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:3500/api/v1/services');
        setServices(response.data.services.rows); // Assuming the response contains the services in a `services` array
        setLoading(false);
      } catch (err) {
        console.error('Error fetching services:', err);
        setError('Failed to load services');
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleDetailsClick = (service) => {
    setSelectedService(service);
  };

  const handleBookClick = (id) => {
    navigate(`/book/${id}`);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };



    return (
        <div className="app">
        <h1>Our Services</h1>
        <div className="services-list">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onDetailsClick={handleDetailsClick}
              // onBookClick={handleBookClick(service.id)}
              onBookClick={() => handleBookClick(service.id)} 
            />
          ))}
        </div>
        {selectedService && (
          <ServiceModal service={selectedService} onClose={handleCloseModal} />
        )}
        {bookService && (
          <BookServiceModel service={selectedService} onClose={handleCloseModal} />
        )}
      </div>
    )
}

export default Services