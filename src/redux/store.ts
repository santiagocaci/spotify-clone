import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import playerReducer from './player/playerSlice';
import { shazamCoreApi } from './services';

export const store = configureStore({
  reducer: {
    player: playerReducer,
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
