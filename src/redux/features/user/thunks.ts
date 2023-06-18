import { AnyAction, createAsyncThunk } from "@reduxjs/toolkit";
import { db, firebaseAuth } from "../../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { loadUser, setLoading } from "./user-slice";
import { UsuarioF } from "../../../types";

export const getAllUsers = createAsyncThunk(
  "user/getAll",
  async (_, { dispatch }) => {
    return getDocs(collection(db, "users"))
      .then((usersCollection) => {
        dispatch(setLoading(true));
        usersCollection.forEach((doc) => {
          dispatch(loadUser(doc.data() as UsuarioF) as unknown as AnyAction);
        });
      })
      .then(() => dispatch(setLoading(false)));
  }
);
