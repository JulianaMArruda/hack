import axios from 'axios';

const apiUrl = 'https://your-backend-api.com'; // Replace with your backend API URL

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${apiUrl}/register`, userData);
    return response.data;
  } catch (error) {
    throw error; // Re-throw the error so it can be handled in the component
  }
};

export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${apiUrl}/login`, loginData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const scheduleAppointment = async (date) => {
  try {
    const response = await axios.post(`${apiUrl}/schedule`, { date });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// ... other API calls