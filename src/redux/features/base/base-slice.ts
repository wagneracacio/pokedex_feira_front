import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getitem = createAsyncThunk("item/getOne", async (id: string) => {
  console.log("hey");
});

export interface itemState {
  items: any[];
}
const initialState: itemState = {
  items: [],
};
const itemSlice = createSlice({
  name: "itemSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getitem.fulfilled, (state, { payload }) => {
      console.log("hey");
    });
  },
});

export default itemSlice.reducer;
