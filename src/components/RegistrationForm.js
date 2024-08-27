
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextInput from '../components/TextInput';
import '../css/RegistrationForm.css'; // Import the CSS file
const validate = values => {
  const errors = {};

  // Validate first name
  if (!values.firstName.trim()) {
    errors.firstName = 'First Name is required';
  }

  // Validate email
  if (!values.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // Validate phone number
  if (!values.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!/^\d{10}$/.test(values.phone) && !/^\d{11}$/.test(values.phone) && !/^\d{12}$/.test(values.phone)) { 
    errors.phone = 'Phone number must be 10, 11, or 12 digits';
  }

  // Validate password
  if (!values.password.trim()) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  }

  // Validate address
  if (!values.address.trim()) {
    errors.address = 'Address is required';
  }

  // Validate date of birth
  if (!values.dob.trim()) {
    errors.dob = 'Date of Birth is required';
  } else if (!/^\d{4}-\d{2}-\d{2}$/.test(values.dob)) { // Format YYYY-MM-DD
    errors.dob = 'Date of Birth must be in YYYY-MM-DD format';
  }

  return errors;
};

const RegistrationForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    email: '',
    phone: '',
    password: '',
    address: '',
    dob: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formValues);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      navigate('/form-summary', { state: formValues });
    }
  };

  return (
    <div className="registration-form-container">
      <header className="registration-form-header">
        <h1>Simple Form Website</h1>
      </header>
      <form onSubmit={handleSubmit} className="registration-form">
        <TextInput
          name="firstName"
          value={formValues.firstName}
          onChange={handleChange}
          label="First Name"
          error={errors.firstName}
        />
        <TextInput
          name="email"
          value={formValues.email}
          onChange={handleChange}
          label="Email"
          error={errors.email}
        />
        <TextInput
          name="phone"
          value={formValues.phone}
          onChange={handleChange}
          label="Phone"
          error={errors.phone}
        />
        <TextInput
          name="password"
          value={formValues.password}
          onChange={handleChange}
          label="Password"
          type="password"
          error={errors.password}
        />
        <TextInput
          name="address"
          value={formValues.address}
          onChange={handleChange}
          label="Address"
          error={errors.address}
        />
        <TextInput
          name="dob"
          value={formValues.dob}
          onChange={handleChange}
          label="Date of Birth"
          error={errors.dob}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
