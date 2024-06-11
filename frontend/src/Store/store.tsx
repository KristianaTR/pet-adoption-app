import { configureStore } from '@reduxjs/toolkit';
import petsReducer from './Reducers/petsReducer';
import filterReducer from './Reducers/filterReducer';

const store = configureStore({
  reducer: {
    pets: petsReducer,
    filter: filterReducer,
    // Add other reducers if needed
  },
})

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch