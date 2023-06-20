import { configureStore } from "@reduxjs/toolkit";

import favourites from "./favourites/favouritesSlice";
import user from "./user/userSlice";

export const store = configureStore({
   reducer: { favourites, user },
   devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
