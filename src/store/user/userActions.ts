import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../models/AppModels";

export const fetchUserById = (userId: number): Promise<IUser> => {
   return new Promise((resolve) =>
      setTimeout(() => resolve({ id: userId, name: `user${userId}` }), 1000)
   );
};

export const getUserById = createAsyncThunk("user/getById", async (userId: number, thunkApi) => {
   try {
      const response = await fetchUserById(userId);
      return response;
   } catch (e) {
      return thunkApi.rejectWithValue(e);
   }
});
