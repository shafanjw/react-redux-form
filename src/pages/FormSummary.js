import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const FormSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state;

  if (!formData) {
    return <div>No form data available</div>;
  }

  const handleNext = () => {
    navigate('/choose-function'); // Navigate to the "Choose a Function" page
  };

  return (
    <div>
      <h2>Form Summary</h2>
      <p><strong>Name:</strong> {formData.firstName}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>
      <p><strong>Address:</strong> {formData.address}</p>
      <p><strong>Date of Birth:</strong> {formData.dob}</p>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default FormSummary;
