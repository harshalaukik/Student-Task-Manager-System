import { useState } from "react";
import TaskModal from "./TaskModal";


function Task(){
  const [isModalOpen,setIsModalOpen]=useState(false);
    return (
          <>
         <section className="task-section" id="task-section">
          <div className="task-section-header">
            <h1>My Tasks</h1>
            <p>Manage and track daily task</p>
          </div>
          <div className="task-container">
            <div className="task-container-header">
              <h1>Task List</h1>
              <button className="task-btn" id="task-button" onClick={()=>{setIsModalOpen(true)}}>Add Task</button>
            </div>
            <div className="task-card">
              <div className="card-container">
                <div>
                  <h1>Title</h1>
                  <p>Description</p>
                </div>
                <div>
                  <select name="status" id="task-status" className="status-option">
                    <option value="pending" selected>Pending</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>
              <div className="card-container">
                <div>
                  <h1>Title</h1>
                  <p>Description</p>
                </div>
                <div>
                  <select name="status" id="task-status" className="status-option">
                    <option value="pending" selected>Pending</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>
{isModalOpen && (
 <TaskModal  onClose={() => setIsModalOpen(false)}/>
)

}
     
      
      </>
    );
};

export default Task;