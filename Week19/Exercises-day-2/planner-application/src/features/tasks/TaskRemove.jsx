import { remove } from "./state/slice";
import { useDispatch } from "react-redux";

const TaskRemove = ({id}) => {
    const dispatch = useDispatch();
   
    return (
        <>
        <button onClick={() => dispatch(remove(id))}>X</button>
        </>
    )
}
export default TaskRemove;