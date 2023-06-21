import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import favourites from "./favourites/favouritesSlice";
import user from "./user/userSlice";
import search from "./search/searchSlice";

import { api } from "./api/api";

const logger = createLogger({
   collapsed: true,
});

export const store = configureStore({
   reducer: { favourites, user, [api.reducerPath]: api.reducer, search },
   devTools: true,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
