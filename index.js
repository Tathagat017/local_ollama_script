const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

async function getOllamaResponse(prompt) {
    try {
        const response = await axios.post('http://localhost:11434/api/generate', {
            model: 'codellama:7b',
            prompt: prompt,
            stream: false
        });
        
        return response.data.response;
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
}

// Example usage
const prompt = "Explain what Ollama is and its main benefits.";
console.log(`Prompt: ${prompt}`);

getOllamaResponse(prompt)
    .then(response => {
        if (response) {
            console.log('\nAI Response:\n', response);
        }
    });
