import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TasksList = (prop) => {
    const tasks = useSelector(state => state.tasksReducer.tasks);
    console.log('task', tasks);
    return (
        <>
            {
                tasks.map((item) => {
                    return <TaskItem key={item.id} item={item}/>
                })
            }
        </>
    )
}
export default TasksList;