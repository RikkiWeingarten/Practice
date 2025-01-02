import TaskRemove from "./TaskRemove";
import { edit } from "./state/slice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const TaskItem = ({ item }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(item.task);

  const handleEdit = () => {
    if (isEditing && newText !== item.task) {
      dispatch(edit({ id: item.id, newText }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span>{item.task}</span>
      )}
      <span> {item.duedate}</span>
      <button onClick={handleEdit}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <TaskRemove id={item.id} />
    </div>
  );
};

export default TaskItem;
