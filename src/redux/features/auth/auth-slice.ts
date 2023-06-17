import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UsuarioF } from "../../../types";
import { UpdateProps } from "./thunks";

export interface loginState {
  user: UsuarioF | null;
  loading: boolean;
}
const initialState: loginState = {
  user: null,
  loading: true,
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UsuarioF | null>) {
      const user = action.payload;
      state.user = user;
      state.loading = false;
    },
    updateUser(state, action: PayloadAction<UpdateProps>) {
      const { descricao, displayName } = action.payload;
      state.user!.descricao = descricao;
      state.user!.displayName = displayName;
    },
  },
  extraReducers(builder) {},
});
export const { setUser, updateUser } = loginSlice.actions;
export default loginSlice.reducer;
export * from "./thunks";
