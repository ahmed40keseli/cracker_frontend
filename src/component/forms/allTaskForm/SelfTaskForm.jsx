import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIdTaskData } from "../../../store/slices/getSelfTaskSlice";
import "./selfTaskForm.css";

const SelfTaskForm = () => {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.formSelfTaskSlice.tasks || []);
  const status = useSelector((state) => state.formSelfTaskSlice.status);
  const error = useSelector((state) => state.formSelfTaskSlice.error);

  useEffect(() => {
    dispatch(getIdTaskData());
  }, [dispatch]);

  return (
    <div className="SelfTaskForm">
      <h1>Task Table</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && tasks.length === 0 && (
        <p>No tasks available.</p>
      )}

      {status === "succeeded" && tasks.length > 0 && (
        <table id="customers">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Completed</th>
              <th>Assign Profile</th>
              <th>End Date</th>
              <th>Reminder Date</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.taskId}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.completed ? "Yes" : "No"}</td>
                <td>{task.assignProfile}</td>
                <td>{task.endDate}</td>
                <td>{task.reminderDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SelfTaskForm;
