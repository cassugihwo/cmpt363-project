-cas

# Basically
The web application has two main parts: the frontend and backend.
The frontend will send requests to the backend through http://localhost:5000. 
Frontend pages will be in frontend/src/app/components.

Port 5000 will always be listening for requests from the frontend. See /backend/src/server.ts for more details.

Right now this is a static application, meaning no data is saved (if you refresh, all changes will be lost)

API key is in .env file in /backend

## Connection to Gemini API
Communication with Gemini is done through the **/api/gemini** endpoint. 
Code for this is in **/backend/src/geminiApiRoute.ts**. You can use the test route I defined as reference.

Test if it's working by sending a GET request to /api/gemini/test-ai

In a new terminal:
```bash
curl http://localhost:5000/api/gemini/test-ai
```
This will send this message to Gemini: "Explain how AI works in a few words". Gemini will send back its response.
(it'll look like: {message: "AI works like blah blah blah"})