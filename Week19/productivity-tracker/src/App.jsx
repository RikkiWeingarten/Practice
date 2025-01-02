import React, { useState } from "react";
import TaskList from "./features/tasks/TaskList";
import CategorySelector from "./features/categories/CategorySelector";
import "./App.css";

const App = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <>
      <h1>Task Manager</h1>
      <CategorySelector
        selectedCategoryId={selectedCategoryId}
        onCategorySelect={handleCategorySelect}
      />
      <TaskList selectedCategoryId={selectedCategoryId} />
    </>
  );
};

export default App;
