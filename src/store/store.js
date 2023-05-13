import { configureStore } from '@reduxjs/toolkit';
import accountSlice from './features/auth';

export const store = configureStore({
  reducer: {
    account: accountSlice,
  },
});
