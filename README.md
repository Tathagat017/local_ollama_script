# Local Ollama Script

A Node.js application that demonstrates how to interact with Ollama's local LLM API using the codellama:7b model.
![image](https://github.com/user-attachments/assets/a4821e72-3871-4af9-a6ff-60476693a09d)

## Prerequisites

1. Node.js (v14 or higher)
2. Ollama (installed and running locally)
3. codellama:7b model (pulled from Ollama)

## Setup Instructions

1. Install Node.js from https://nodejs.org/

2. Install Ollama:
   - Download from https://ollama.ai/download
   - Follow installation instructions for your operating system

3. Pull the codellama:7b model:
   ```bash
   ollama pull codellama:7b
   ```

4. Start Ollama service:
   ```bash
   ollama serve
   ```

5. Clone this repository and navigate to the project directory:
   ```bash
   git clone [your-repo-url]
   cd Local_Ollama_Script
   ```

6. Install dependencies:
   ```bash
   npm install
   ```

## Environment Variables

Create a `.env` file in the root directory if you need to customize any settings:

```
# Ollama API endpoint (default: http://localhost:11434)
OLLAMA_API_URL=http://localhost:11434
```

## Running the Application

To run the script:

```bash
node index.js
```

## Dependencies

- axios: ^1.6.5
- Node.js runtime

## Usage

The script demonstrates how to:
1. Make API calls to Ollama's local LLM service
2. Send prompts to the codellama:7b model
3. Handle responses asynchronously
4. Implement error handling

   ```

## License

ISC License
