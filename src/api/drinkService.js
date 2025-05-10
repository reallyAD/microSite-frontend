import axios from 'axios';

// To be changed to the actual API URL
const API_BASE_URL = "http://localhost:8000";

// Create axios instance
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});


const drinkService = {
    generateDrink: async (drinkData) => {
        try {
            const response = await apiClient.post('/generate-drink', drinkData);
            return response.data;
        } catch (error) {
            console.error("Error generating drink:", error);
        }
    }
}

export default drinkService;