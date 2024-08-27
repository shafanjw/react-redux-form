
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextInput from '../components/TextInput';
import '../css/RegistrationForm.css'; // Import the CSS file

const validate = values => {
  const errors = {};
  if (!values.firstName) errors.firstName = 'First Name is required';
  if (!values.email) errors.email = 'Email is required';
  if (!values.phone) errors.phone = 'Phone number is required';
  if (!values.password) errors.password = 'Password is required';
  if (!values.address) errors.address = 'Address is required';
  if (!values.dob) errors.dob = 'Date of Birth is required';
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
  );
};

export default RegistrationForm;
