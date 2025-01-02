import SelfTaskForm from "../../component/forms/allTaskForm/SelfTaskForm";
import TaskForm from "../../component/forms/taskForm/TaskForm";
import "./together.css";

function TaskPage() {
  return (
    <div className="combined-task-container">
      <div className="task-list-section">
        <SelfTaskForm />
      </div>
      <div className="task-form-section">
        <TaskForm />
      </div>
    </div>
  );
}

export default TaskPage;
