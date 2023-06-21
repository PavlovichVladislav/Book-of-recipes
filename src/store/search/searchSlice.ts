import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface searchSliceState  {
    searchValue: string;
}

const initialState: searchSliceState = {
    searchValue: ''
};

export const searchSlice = createSlice({
   name: "search",
   initialState,
   reducers: {
      setSearchValue: (state, { payload: searchValue }: PayloadAction<string>) => {
         state.searchValue = searchValue;
      },
   },
});

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
