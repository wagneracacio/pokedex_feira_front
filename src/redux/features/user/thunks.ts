import { AnyAction, createAsyncThunk } from "@reduxjs/toolkit";
import { db, firebaseAuth } from "../../../config/firebase";
import { getDocs, collection, getDoc, doc } from "firebase/firestore";
import { loadUser, setLoading } from "./user-slice";
import { UsuarioF } from "../../../types";
import { loadedFriends } from "../auth/auth-slice";

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
export const getUsers = createAsyncThunk(
  "user/getUsers",
  async (ids: UsuarioF["uid"][], { dispatch }) => {
    if (ids.length > 1) {
      dispatch(setLoading(false));
      dispatch(loadedFriends());
      return;
    }
    return ids.forEach((id) => {
      getDoc(doc(db, "users", id))
        .then((userDoc) => {
          dispatch(
            loadUser(userDoc.data() as UsuarioF) as unknown as AnyAction
          );
        })
        .then(() => {
          dispatch(setLoading(false));
          dispatch(loadedFriends());
        });
    });
  }
);
