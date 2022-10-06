import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./features/favoriteSlice";

import playerReducer from './features/playerSlice';
import { shazamCoreApi } from "./services/shazamCore";

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
    favorite: favoriteSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;