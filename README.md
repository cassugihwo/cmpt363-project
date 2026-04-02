# WriteAI
A writing tool with an integrated AI text assistant. Made with React and Node.js. AI functionalities powered by Google Gemini.

Made as a project for CMPT363, SFU. Spring 2026
By Cas, Ali, Audrey

## Setup
To run this project, you must have Node.js installed on your computer.

### 1. Installing dependencies
Before running the application, install dependencies in both the frontend and backend folder:
```bash
cd backend
npm install
cd ..
cd frontend
npm install
```

### 2. Add Gemini API key
Go to /backend and create a .env file.
Add this to the file:
```
GEMINI_API_KEY=replace_with_api_key
```
Replace "replace_with_api_key" with your Gemini API key.

### 3. Running the application
The frontend and backend servers must be run separately in **separate terminals.**

Run backend:
```bash
cd backend
npm run dev
```
This should start the backend server on http://localhost:5000/.

Run frontend:
```bash
cd frontend
npm run dev
```

The application should run on http://localhost:5173/.