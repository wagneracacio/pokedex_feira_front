import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UsuarioF } from "../../../types";

export interface UserState {
  users: UsuarioF[];
  loading: boolean;
}

const initialState: UserState = {
  users: [],
  loading: true,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      const loading = action.payload;
      state.loading = loading;
    },
    loadUser(state, action: PayloadAction<UsuarioF | null>) {
      const user = action.payload;
      const index = state.users.findIndex(({ uid }) => user?.uid === uid);
      if (index < 0) {
        state.users.push(user!);
      } else {
        state.users[index] = user!;
      }
    },
  },
});
export const { setLoading, loadUser } = userSlice.actions;
export default userSlice.reducer;
