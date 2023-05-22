import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './stores/countslice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});