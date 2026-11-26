import { useState } from "react";
import Task from "./Task";
import Stats from "./Stats";


function Dashboard({ onLogout }) {
  const [dashboardPage, setDashboardPage] = useState("stats");
  
const taskSwitch = ()=>{
setDashboardPage("task");
}
const statSwitch = ()=>{
  setDashboardPage("stats");
}
  return (
    <div className="container">
      <aside className="sidebar">
        <ul>
          <li>
            <a href="#" id="dashboard-link" onClick={(e)=>{
              e.preventDefault(); statSwitch();}} >
              DASHBOARD
            </a>
          </li>
          <li>
            <a href="#" id="task-link" onClick={(e)=>{
              e.preventDefault(); taskSwitch();}}>
              TASK
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <button type="button" className="logout-btn" onClick={onLogout}>
              Logout
            </button>
          </li>
        </ul>
      </aside>

      <main className="main-content">
        <header className="welcome">
          <h1>Welcome, User!</h1>
        </header>
        {dashboardPage === "stats" && (
          <Stats
         taskSwitch={() => {
              setDashboardPage("task");
            }}
          />
        )}

     {dashboardPage === "task" && <Task />}
      </main>
    </div>
  );
}

export default Dashboard;
