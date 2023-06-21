import { configureStore } from "@reduxjs/toolkit";

import favourites from "./favourites/favouritesSlice";
import user from "./user/userSlice";
import { api } from "./api/api";

export const store = configureStore({
   reducer: { favourites, user, [api.reducerPath]: api.reducer },
   devTools: true,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
