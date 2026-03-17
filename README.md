# Atena
Experimental app to improve skills in computer science and web development.

## First Steps
The project was created using Vite:
```npm create vite@latest```

We got this initial project structure:
```
atena-app
├── index.html
├── package.json
├── vite.config.js
│
└── src
    ├── main.jsx
    ├── App.jsx
    └── style.css
```

### Running the Project
Install dependencies:
```npm install```

Start the development server:
```npm run dev```

The development server runs locally and the application can be accessed at:
```http://localhost:5173```

### React
#### First Component
Created a reusable React component: ```src/components/Header.jsx```

This component is imported into App.jsx and rendered using:
```<Header />```

#### Props
Implemented props in the Header component. Props allow parent components to pass data to child components.

Example:```<Header title="Atena" subtitle="Learning project" />```

Inside Header.jsx the values are accessed through the props object.


### Mobile Visualization

To visualize the app on a physical device during development, we exposed the Vite server to the local network using the --host flag. This allowed real-time testing and Hot Module Replacement (HMR) across devices.
Bash
```npm run dev -- --host```

