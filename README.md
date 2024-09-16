# PanelVista

## 🚀 Overview
**PanelVista** is a comprehensive admin dashboard built using ReactJS and MongoDB, designed to streamline the management of products, users, and website analytics. The project showcases my technical proficiency in frontend development and data handling, providing administrators with a powerful tool for managing eCommerce operations efficiently. PanelVista simplifies complex tasks such as tracking sales, monitoring user engagement, and generating product statistics, ensuring flexibility and scalability for growing businesses.

## 📝 Table of Contents
- [Installation](#⚙️installation)
- [Technologies Used](#technologies-used)
- [Steps](#steps)
- [Features](#features)
- [Dependencies](#dependencies)

## ⚙️ Installation
Follow these steps to get a local copy of the project up and running on your machine.

### Prerequisites
Ensure you have the following software/tools installed:
- **Node.js** (v14.x or higher) - [Download and Install Node.js](https://nodejs.org/)
- **npm** (v6.x or higher) - Installed automatically with Node.js
- **MongoDB** (v4.x or higher) - [Download and Install MongoDB](https://www.mongodb.com/try/download/community)

## 🛠 Technologies
  The project is built using a modern tech stack, ensuring a responsive,         scalable, and efficient admin dashboard. Below are the key technologies used:

- **Frontend:** HTML, CSS, JavaScript, ReactJS
- **Backend:** MongoDB
- **Authentication:** JWT


## Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/project-name.git
   cd project-name
   ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3. Set up environment variables:<br>
    Set up environment variables: Create a .env file in the root directory with       the following content:
    ```bash
    MONGO_URI=<Your MongoDB URI>
    ```
4. Start the frontend development server:
   ```bash
   npm start
   ```
5. Access the Application: Once both the backend and frontend servers are            running, open your browser and go to:
   ```bash
   http://localhost:3000/
   ```

## ✨ Features

- **User & Product Management**: Seamlessly manage users and products, including adding, updating, and deleting records.
  
- **Analytics Dashboard**: Real-time statistics on sales, active users, and product performance, offering insights through data visualizations.

- **Responsive Design**: Fully responsive layout ensuring the dashboard works smoothly on any device.

- **Authentication & Authorization**: Secure login and access control for admins using JWT authentication.

- **Data Provider Integration**: Efficient data fetching and state management using React’s Context API and hooks.

- **Intuitive User Interface**: Clean, modern UI with intuitive navigation for managing eCommerce operations effortlessly.

## 📦 Dependencies

The project utilizes various dependencies across different parts of the application. Below is a list of the key dependencies and where they are used.

### Backend (MongoDB)
The backend handles data storage, retrieval, and API requests. Key dependencies include:

- **mongoose**: ODM library for MongoDB, used for database interaction.
- **dotenv**: Loads environment variables from `.env` file.
- **bcryptjs**: For password hashing to enhance security.
- **jsonwebtoken**: Handles JWT-based authentication for secure access.
  
Install backend dependencies:
```bash
npm install mongoose dotenv bcryptjs jsonwebtoken
```

### Frontend (React.js)
The frontend of the project is built using React.js. Below are the key dependencies used:

- **react**: JavaScript library for building user interfaces.
- **jwt-decode**: For decoding JWT tokens on the frontend.
- **react-router-dom**: For handling navigation and routing in the app.

  Install frontend dependencies:
  ```bash
  cd client
  npm install react redux jwt-decode react-router-dom 
  ```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
