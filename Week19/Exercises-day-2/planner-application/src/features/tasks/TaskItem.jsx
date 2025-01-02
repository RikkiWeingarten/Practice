import TaskRemove from "./TaskRemove";
import { active } from "./state/slice";
import { useDispatch } from "react-redux";

const TaskItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={item.active ? "" : "inactive"}
        onClick={() => dispatch(active(item.id))}
      >
        {item.task} {item.duedate}
        <TaskRemove id={item.id} />
      </div>
    </>
  );
};
export default TaskItem;
