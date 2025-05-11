// API Service (services/api.js)
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const fetchCallRecords = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/calls`);
    return response.data;
  } catch (error) {
    console.error('Error fetching call records:', error);
    return [];
  }
};

export const fetchCallQuality = async (callId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/calls/${callId}/quality`);
    return response.data;
  } catch (error) {
    console.error('Error fetching call quality:', error);
    return null;
  }
};

export const postNotification = async (message) => {
  try {
    await axios.post(`${API_BASE_URL}/notifications`, { message });
  } catch (error) {
    console.error('Error sending notification:', error);
  }
};
