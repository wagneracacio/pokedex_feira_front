import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  users: any[];
  loading: boolean;
}

const initialState: UserState = {
  users: [],
  loading: true,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {},
});

export default userSlice.reducer;
