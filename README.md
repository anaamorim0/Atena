# Atena
A modern, responsive web application built as an experimental project to advance skills in computer science, full-stack architectures, and modern web development.

## Tech Stack & Features
- Framework: React 19
- Build Tool: Vite

## Project Structure
atena-app/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components (Header, etc.)
│   ├── App.tsx          # Main application layout and state logic
│   ├── main.tsx         # Application entry point
│   └── index.css        
├── .env     
├── .gitignore           # Safeguards local environment credentials
└── vite.config.ts       # Development and build tool configurations

## Getting Started
### Prerequisites
Ensure you have Node.js installed on your machine

### 1. Clone & Install
Clone the repository and install the project dependencies:
```
git clone https://github.com/anaamorim0/Atena.git
cd Atena
npm install
``` 

### 2. Run the Development Server
Start the local server to test the application:
```npm run dev```
The application will be accessible locally at: ```http://localhost:5173```

### 3. Mobile & Cross-Device Testing
To visualize and test the application on a physical mobile device or tablet in real-time, expose the Vite server to your local area network (LAN):
```npm run dev -- --host```
*Note: Ensure your testing device is connected to the same Wi-FI network as your development machine.*