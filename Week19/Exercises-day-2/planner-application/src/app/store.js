

import {  combineReducers } from 'redux';
// import reducers
import tasksReducer from '../features/tasks/state/slice'
import { configureStore } from '@reduxjs/toolkit';

const appReducer = combineReducers({
    // all the reducers
    tasksReducer,
})

const store = configureStore({
    reducer: appReducer,
});

export default store;