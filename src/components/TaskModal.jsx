function TaskModal({onClose}){
    return(
 <section className="modal-overlay" id="modal-container">
        <div className="modal">
          <h1>New Task</h1>

          <form id="task-form">
            <label for="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter task title"
            />

            <label for="description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Enter task description"
            />

            <div className="modal-actions">
              <a href="#" className="cancel" id="cancel-modal"  onClick={onClose}>Cancel</a>
              <input type="submit" value="Save" className="save" id="save-modal" />
            </div>
          </form>
        </div>
      </section>


    );
};
export default TaskModal;