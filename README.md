Project Outline
Frontend:
Use React for the user interface.
Implement increment, decrement, and reset functionality.
Style the app for a clean and simple design.
Backend:
Set up a basic Node.js + Express backend.
Provide an API to fetch, update, and reset the counter value.
State Management:
Use React's useState or useReducer for local state management.
Optionally, expand to Redux for advanced state management.
Step 1: Set Up the Project
1. Create the Frontend
Run the following commands:

bash
Copy code
npx create-react-app counter-app
cd counter-app
npm start
2. Create the Backend
Run these commands in a separate folder:

bash
Copy code
mkdir counter-backend
cd counter-backend
npm init -y
npm install express cors body-parser
