import { useState,useEffect } from "react";
import TaskModal from "./TaskModal";

function Task() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("tasks");

  return savedTasks
    ? JSON.parse(savedTasks)
    : [
        {
          id: 1,
          title: "Testing Title",
          description: "Testing task description",
          completed: false
        }
      ];
});

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

  function addTask(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function handleStatusChange(id, status) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: status === "completed",
            }
          : task,
      ),
    );
  }

  function deleteTask(taskId) {
    setTasks((prevItems) => prevItems.filter((item) => item.id !== taskId));
  }

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

            <button className="task-btn" onClick={() => setIsModalOpen(true)}>
              Add Task
            </button>
          </div>

          <div className="task-card">
            {tasks.map((task) => (
              <div className="card-container" key={task.id}>
                <div>
                  <h1>{task.title}</h1>
                  <p>{task.description}</p>
                </div>

                <div className="task-options">
                  <select
                    className="status-option"
                    value={task.completed ? "completed" : "pending"}
                    onChange={(event) =>
                      handleStatusChange(task.id, event.target.value)
                    }
                  >
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                  </select>
                  <div>
                    <button
                      className="task-delete"
                      onClick={() => deleteTask(task.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && (
        <TaskModal onClose={() => setIsModalOpen(false)} onAddTask={addTask} />
      )}
    </>
  );
}

export default Task;
