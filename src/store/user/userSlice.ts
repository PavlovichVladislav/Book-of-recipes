import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/AppModels";
import { getUserById } from "./userActions";

interface userSliceState {
   user: IUser | null;
   isAuth: boolean;
   loading: "loading" | "loaded" | "error";
}

const initialState: userSliceState = {
   user: null,
   isAuth: false,
   loading: "loaded",
};

export const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getUserById.pending, (state) => {
            state.loading = "loading";
         })
         .addCase(getUserById.fulfilled, (state, action) => {
            state.loading = "loaded";
            state.user = action.payload;
            state.isAuth = true;
         })
         .addCase(getUserById.rejected, (state) => {
            state.loading = "error";
            state.user = null;
            state.isAuth = false;
         });
   },
});

// export const { } = userSlice.actions;

export default userSlice.reducer;
