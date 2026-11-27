function TaskModal({onClose , onAddTask}){
  
function addTask(event){
event.preventDefault();
const formData = new FormData(event.target);

    const newTask = {
    id: Date.now(),
    title: formData.get("title"),
    description: formData.get("description"),
    completed: false
  };
  if(newTask.title && newTask.description){
onAddTask(newTask);
  }
  onClose();
}

    return(
 <section className="modal-overlay" id="modal-container">
        <div className="modal">
          <h1>New Task</h1>

          <form id="task-form" onSubmit={addTask}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter task title"
            />

            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Enter task description"
            />

            <div className="modal-actions">
              <button
  type="button"
  className="cancel"
  onClick={onClose}
>
  Cancel
</button>
              <input type="submit" value="Save" className="save" id="save-modal" />
            </div>
          </form>
        </div>
      </section>


    );
};
export default TaskModal;