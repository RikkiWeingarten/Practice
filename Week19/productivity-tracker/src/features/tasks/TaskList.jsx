import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasksByCategory, toggleTaskCompletion, deleteTask } from "./tasksSlice";

const TaskList = ({ selectedCategoryId }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => selectTasksByCategory(state, selectedCategoryId));

  const handleToggleCompletion = useCallback((taskId) => {
    dispatch(toggleTaskCompletion(taskId));
  }, [dispatch]);

  const handleDeleteTask = useCallback((taskId) => {
    dispatch(deleteTask(taskId));
  }, [dispatch]);

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.title}
            </span>
            <button onClick={() => handleToggleCompletion(task.id)}>
              {task.completed ? "Mark Incomplete" : "Mark Complete"}
            </button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
