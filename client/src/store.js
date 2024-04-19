

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { tasksReducer } from './redux/reducers/tasksReducer';
import { tabReducer } from './redux/reducers/tabReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  currentTab: tabReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;

