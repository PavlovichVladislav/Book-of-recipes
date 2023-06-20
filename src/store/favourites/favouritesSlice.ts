import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRecipe } from "../../models/AppModels";

const initialState: IRecipe[] = [];

export const favouritesSlice = createSlice({
   name: "favourites",
   initialState,
   reducers: {
      addToFavourites: (state, { payload: newReciepe }: PayloadAction<IRecipe>) => {
         if (state.some((reciepe) => reciepe.id === newReciepe.id)) return;

         state.push(newReciepe);
      },
      deleteFromFavourites: (state, { payload: id }: PayloadAction<number>) => {
         state.filter((reciepe) => reciepe.id !== id);
      },
   },
});

export const { addToFavourites, deleteFromFavourites } = favouritesSlice.actions;

export default favouritesSlice.reducer;
