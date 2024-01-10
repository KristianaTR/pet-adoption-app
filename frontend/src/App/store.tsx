import { configureStore } from '@reduxjs/toolkit';
import petsReducer from './petsSlice';

const store = configureStore({
  reducer: {
    pets: petsReducer,
  
    // Add other reducers if needed
  },
})

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch