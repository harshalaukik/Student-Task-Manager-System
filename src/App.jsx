import { useState } from 'react';
import Login from "./components/Login";
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  
const [currentPage, setCurrentPage] = useState("login");
  return (
      <>
      {currentPage === "login" && (
        <Login
          onSwitch={() => setCurrentPage("registration")}
          onLogin={() => setCurrentPage("dashboard")}
        />
      )}

      {currentPage === "registration" && (
        <Registration
          onSwitch={() => setCurrentPage("login")}
        />
      )}

      {currentPage === "dashboard" && (
        <Dashboard
          onLogout={() => setCurrentPage("login")}
        />
      )}

    </>
  )
}

export default App
