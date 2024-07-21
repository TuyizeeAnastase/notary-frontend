import React from 'react';
import '../styles/Carousel.scss'
import welcome from '../../images/welcome.jpg'

const Carousel=()=>{
    return (
        <div className='carousel'>
        <div className='carousel-item'>
        <img src={welcome} alt="Slide 1" />
        <div className='carousel-caption'>
        <h3>Welcome to our services</h3>
        <p>Providing the best services for you</p>
        </div>
        </div>
        </div>
    )
}

export default Carousel;