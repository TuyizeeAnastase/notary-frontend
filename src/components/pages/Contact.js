import React, { useState } from 'react';
import '../styles/Contact.scss';

const Contact=()=>{
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

    return(
        <div className="contact-us">
        <div className="contact-us__form">
          <h2>Contact Us</h2>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <label>
              Message:
              <textarea name="message"></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-us__address">
          <h2>Our Address</h2>
          <p>123 Main Street</p>
          <p>City, State, ZIP</p>
          <p>Email: contact@company.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
    )
}

export default Contact