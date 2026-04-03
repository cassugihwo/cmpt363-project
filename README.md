# WriteAI
A writing tool with an integrated AI text assistant. Made with React and Node.js. AI functionalities powered by Google Gemini.

Made as a project for CMPT363, SFU. Spring 2026
By Cas, Ali, Audrey

## Table of Contents

- [How to run the application](#how-to-run-the-application)
  - [Installing dependencies](#1-installing-dependencies)
  - [Add Gemini API key](#2-add-gemini-api-key)
  - [Running the application](#3-running-the-application)
- [Attributions](#attributions)

## How to run the application
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

## Attributions
This project’s code was developed with assistance from generative AI tools, including Figma Make and GitHub Copilot. However, the user interface design and the application’s core logic were created and implemented by the group members.