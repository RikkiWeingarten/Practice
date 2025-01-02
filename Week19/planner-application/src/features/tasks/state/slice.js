import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{
        add: (state, action) => {
            state.tasks.push({
                id: nanoid(),
                task: action.payload.value,
                duedate: action.payload.date,
                active: true,
            });
            state.tasks = state.tasks.sort((a,b) => new Date(a.duedate) - new Date(b.duedate));
        },
        remove: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload); //maybe remove id
        },
        edit: (state, action) => {
            const { id, newText } = action.payload;
            const task = state.tasks.find((task) => task.id === id);
            if (task) {
              task.task = newText;
            }
        },
    }
});

export const { add, remove, edit} = tasksSlice.actions
export default tasksSlice.reducer;