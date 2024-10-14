import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/bookForm.scss'

const BookingForm = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const [formData, setFormData] = useState({
    nid: '',
    name: '',
    telephone: '',
    email: '',
    residence: '',
    provinceId: '',
    districtId: '',
    sectorId: '',
    cellId: ''
  });


  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [cells, setCells] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch the service details based on the service id
    axios.get(`http://localhost:3500/api/v1/services/${id}`)
      .then(response => setService(response.data))
      .catch(error => console.error(error));
  }, [id]);

  useEffect(() => {
    // Fetch users or requesters/receivers data from API
    axios.get('http://localhost:3500/api/v1/users')
      .then(response => setUsers(response.data.users.rows))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  // Fetch districts based on selected province
  useEffect(() => {
    if (formData.provinceId) {
      axios.get(`http://localhost:3500/api/v1/districts?provinceId=${formData.provinceId}`)
        .then(response => setDistricts(response.data.districts))
        .catch(error => console.error('Error fetching districts:', error));
    }
  }, [formData.provinceId]);

  // Fetch sectors based on selected district
  useEffect(() => {
    if (formData.districtId) {
      axios.get(`http://localhost:3500/api/v1/sectors?districtId=${formData.districtId}`)
        .then(response => setSectors(response.data.sectors))
        .catch(error => console.error('Error fetching sectors:', error));
    }
  }, [formData.districtId]);

  // Fetch cells based on selected sector
  useEffect(() => {
    if (formData.sectorId) {
      axios.get(`http://localhost:3500/api/v1/cells?sectorId=${formData.sectorId}`)
        .then(response => setCells(response.data.cells))
        .catch(error => console.error('Error fetching cells:', error));
    }
  }, [formData.sectorId]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3500/api/v1/users/register', formData)
      .then(() => alert('Registration successful'))
      .catch(error => console.error('Error submitting form:', error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Post the booking form data
    axios.post('http://localhost:3500/api/v1/bookings', {
      serviceId: id,
      serviceData: formData
    })
    .then(() => navigate('/'))
    .catch(error => console.error(error));
  };

  if (!service) return <div>Loading...</div>;
  
  return (
    <div className={`booking-form ${isModalOpen ? 'modal-open' : ''}`}>
        
      <h2>{service.service.title}</h2>
      {!isModalOpen && (
    <button onClick={() => setIsModalOpen(true)} className="create-account-btn">
      Create Account
    </button>
  )}
      <form onSubmit={handleSubmit}>
      {isModalOpen && (
        <div className="booking-form">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="form-row">
            <label>
              NID:
              <input type="text" name="nid" value={formData.nid} onChange={handleInputChange} required />
            </label>
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
            </label>
            <label>
              Telephone:
              <input type="text" name="telephone" value={formData.telephone} onChange={handleInputChange} required />
            </label>
          </div>
          <div className="form-row">
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
            </label>
            <label>
              Residence:
              <input type="text" name="residence" value={formData.residence} onChange={handleInputChange} required />
            </label>
            <label>
              Province:
              <select name="provinceId" value={formData.provinceId} onChange={handleInputChange} required>
                <option value="">Select Province</option>
                {provinces.map((province) => (
                  <option key={province.id} value={province.id}>
                    {province.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="form-row">
            <label>
              District:
              <select name="districtId" value={formData.districtId} onChange={handleInputChange} required>
                <option value="">Select District</option>
                {districts.map((district) => (
                  <option key={district.id} value={district.id}>
                    {district.name}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Sector:
              <select name="sectorId" value={formData.sectorId} onChange={handleInputChange} required>
                <option value="">Select Sector</option>
                {sectors.map((sector) => (
                  <option key={sector.id} value={sector.id}>
                    {sector.name}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Cell:
              <select name="cellId" value={formData.cellId} onChange={handleInputChange} required>
                <option value="">Select Cell</option>
                {cells.map((cell) => (
                  <option key={cell.id} value={cell.id}>
                    {cell.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <button type="submit">Register</button>
          <button onClick={() => setIsModalOpen(false)} type="submit">Close</button>
        </form>
      </div>
      )}
        {service.service.service_type === 'UIU' && (
          <>
            <div className="form-row_uiu">
  <label>
    Requester:
    <select name="requesterId" value={formData.requesterId} onChange={handleInputChange} required>
      <option value="">Select Requester</option>
      {users.map(user => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  </label>

  <label>
    Receiver:
    <select name="receiverId" value={formData.receiverId} onChange={handleInputChange} required>
      <option value="">Select Receiver</option>
      {users.map(user => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  </label>
</div>

<div className="form-row">
  <label>
    Ikirego:
    <textarea
      name="ikirego"
      value={formData.ikirego}
      onChange={handleInputChange}
      rows="4"
      required
    />
  </label>
</div>

<div className="form-row">
  <label>
    Cost:
    <input
      type="number"
      name="cost"
      value={formData.cost}
      onChange={handleInputChange}
      required
    />
  </label>
</div>

          </>
        )}
        {service.service.service_type === 'UB' && (
          <>
            <label>
            SALES AND MARKETING REPRESENTATIVE AGREEMENT:
              <input type="text" name="campaign" onChange={handleInputChange} />
            </label>
          </>
        )}
        {service.service.service_type === 'SMR' && (
          <>
            <label>
            UBUFASHA MU BIJYANYE N’AMATEGEKO:
              <input type="text" name="campaign" onChange={handleInputChange} />
            </label>
          </>
        )}
        <button type="submit">Submit Booking</button>
      </form>

    </div>
  );
};

export default BookingForm;
