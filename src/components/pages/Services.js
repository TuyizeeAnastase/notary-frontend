import React, { useState } from 'react';
import ServiceCard from './ServicesCard';
import ServiceModal from './ServiceModal';
import '../styles/services.scss'


const services = [
    {
      id: 1,
      image: require('../../images/land.jpg').default,
      title: 'Service One',
      description: 'Description of Service One.'
    },
    {
      id: 2,
      image: 'service2.jpg',
      title: 'Service Two',
      description: 'Description of Service Two.'
    },
    {
        id: 3,
        image: 'service2.jpg',
        title: 'Service Three',
        description: 'Description of Service Two.'
      },
      {
        id: 4,
        image: 'service2.jpg',
        title: 'Service four',
        description: 'Description of Service Two.'
      },
      {
        id: 5,
        image: 'service2.jpg',
        title: 'Service five',
        description: 'Description of Service Two.'
      },
      {
        id: 6,
        image: 'service2.jpg',
        title: 'Service six',
        description: 'Description of Service Two.'
      },
      {
        id: 7,
        image: 'service2.jpg',
        title: 'Service seven',
        description: 'Description of Service Two.'
      },
      {
        id: 8,
        image: 'service2.jpg',
        title: 'Service eight',
        description: 'Description of Service Two.'
      },
      {
        id: 9,
        image: 'service2.jpg',
        title: 'Service nine',
        description: 'Description of Service Two.'
      },
      {
        id: 10,
        image: 'service2.jpg',
        title: 'Service Ten',
        description: 'Description of Service Two.'
      },
      {
        id: 11,
        image: 'service2.jpg',
        title: 'Service Elven',
        description: 'Description of Service Two.'
      },
      {
        id: 12,
        image: 'service2.jpg',
        title: 'Service Tueleve',
        description: 'Description of Service Two.'
      },
      {
        id: 13,
        image: 'service2.jpg',
        title: 'Service Thirteen',
        description: 'Description of Service Two.'
      },
      
  ];


const Services=()=>{
    const [selectedService, setSelectedService] = useState(null);

  const handleDetailsClick = (service) => {
    setSelectedService(service);
  };

  const handleBookClick = (service) => {
    // Implement navigation to service details page
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
              onBookClick={handleBookClick}
            />
          ))}
        </div>
        {selectedService && (
          <ServiceModal service={selectedService} onClose={handleCloseModal} />
        )}
      </div>
    )
}

export default Services