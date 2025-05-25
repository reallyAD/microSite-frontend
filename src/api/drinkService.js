import axios from 'axios';

// To be changed to the actual API URL
const API_BASE_URL = "https://microsite-backend.onrender.com";

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
    },
    refineGeneratedDrink: async (originalGeneratedDrink, refinePrompt) => {
        try {
            const response = await apiClient.post(
                '/refine-generated-drink', 
                {
                    originalGeneratedDrink: originalGeneratedDrink, 
                    refinePrompt: refinePrompt 
                }
            );
            return response.data;
        } catch (error) {
            console.error("Error refining generated drink:", error);
        }
    },
    sendEmail: async (emailData) => {
        try {
            const response = await apiClient.post('/send-email', emailData);
            return response.data;
        } catch (error) {
            console.error("Error sending email:", error);
            throw error;
        }
    }

}

export default drinkService;