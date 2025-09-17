import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import travelReducer from './slices/travelSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    travel: travelReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 