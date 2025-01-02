import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    { id: 1, title: "Learn Redux", categoryId: 1, completed: false },
    { id: 2, title: "Clean Room", categoryId: 2, completed: false },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
    },
    editTask(state, action) {
      const index = state.tasks.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTaskCompletion(state, action) {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, editTask, deleteTask, toggleTaskCompletion } = tasksSlice.actions;

export const selectTasksByCategory = createSelector(
  [(state) => state.tasks.tasks, (state, categoryId) => categoryId],
  (tasks, categoryId) => tasks.filter((task) => task.categoryId === categoryId)
);

export const selectCompletedTasks = createSelector(
  [(state) => state.tasks.tasks],
  (tasks) => tasks.filter((task) => task.completed).length
);

export default tasksSlice.reducer;
