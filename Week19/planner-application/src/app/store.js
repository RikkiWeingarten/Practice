import {  combineReducers } from 'redux';
import tasksReducer from '../features/tasks/state/slice'
import { configureStore } from '@reduxjs/toolkit';

const appReducer = combineReducers({
    tasksReducer,
})

const store = configureStore({
    reducer: appReducer,
});

export default store;