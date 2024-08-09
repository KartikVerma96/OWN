import { useState } from "react";
import './Register.css';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dob: '',
    city: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/auth/register', formData);
      console.log(response);
      setFormData({
        name: '',
        email: '',
        password: '',
        dob: '',
        city: ''
      });
      setErrors({});
    } catch (error) {
      console.log("Error:", error);
      if (error.response && error.response.data.errors) {
        const validationErrors = {};
        error.response.data.errors.forEach((error) => {
          validationErrors[error.path] = error.msg;
        });
        setErrors(validationErrors);
      } else if (error.response && error.response.data.message) {
        setErrors({ general: error.response.data.message });
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="register-container">
        <div className="register-box">
          <div className="register-heading">
            <p>Register</p>
          </div>
          {errors.general && <div className="error-general-message">{"💥" + errors.general}</div>}
          <div className="name">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='Enter Your Name'
              className={errors.name ? 'error-border' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter Your E-mail'
              className={errors.email ? 'error-border' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Your Password"
              className={errors.password ? 'error-border' : ''}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          <div className="dob">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              name="dob"
              id="dob"
              value={formData.dob}
              onChange={handleChange}
              placeholder='Enter Date of Birth'
              className={errors.dob ? 'error-border' : ''}
            />
            {errors.dob && <span className="error-message">{errors.dob}</span>}
          </div>
          <div className="city">
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              value={formData.city}
              onChange={handleChange}
              placeholder='Enter Your City'
              className={errors.city ? 'error-border' : ''}
            />
            {errors.city && <span className="error-message">{errors.city}</span>}
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Register;
