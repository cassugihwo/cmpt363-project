-cas

# Set up and Running
## 1. Requirements
Make sure you have Node.js installed. To check if you have it installed, open a new terminal and run this command:
```bash
npm -v
```
This should return the version installed. 
Install Node.js here: https://nodejs.org/en/download

## 2. Installing dependencies
Before running the application, install dependencies in both the frontend and backend folder:
```bash
cd backend
npm install
cd ..
cd frontend
npm install
```
a folder called node_modules should appear in both the backend and frontend folders.

## 3. Running the application
The frontend and backend servers must be run separately in **separate terminals!!**

Backend terminal:
```bash
cd backend
npm run dev
```

Frontend terminal:
```bash
cd frontend
npm run dev
```

# Debugging
## Debugging backend API endpoints
Once the backend server is running, debug GET API endpoints using curl (note: i think curl only works for windows)

Examples:

Test (this should return "Hello from backend!")
```bash
curl http://localhost:5000/api/hello
```

Test gemini (this should return a short explanation of how AI works)
```bash
curl http://localhost:5000/api/gemini/test-ai
```

When it asks "Do you want to continue?" Make sure you enter "A" (just hitting enter will lead to an error)

### some API endpoints

