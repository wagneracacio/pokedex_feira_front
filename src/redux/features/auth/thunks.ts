import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { db, firebaseAuth } from "../../../config/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setUser, updateUser } from "./auth-slice";
import {
  updateDoc,
  getDoc,
  setDoc,
  doc,
} from "@firebase/firestore";
import { UsuarioF } from "../../../types";

export interface UpdateProps {
  displayName: string;
  descricao: string;
}
export const updateProfile = createAsyncThunk(
  "user/update",
  async (update: UpdateProps, { dispatch }) => {
    return await firebaseAuth.onAuthStateChanged((user) => {
      if (!!user) {
        let userRef = doc(db, "users", user.uid);
        updateDoc(userRef, { ...update }).then(() => {
          dispatch(updateUser(update));
        });
      }
    });
  }
);

export const refreshLogin = createAsyncThunk(
  "user/refreshlogin",
  async (_, { dispatch }) => {
    return await firebaseAuth.onAuthStateChanged((user) => {
      if (!!user) {
        let userRef = doc(db, "users", user.uid);
        getDoc(userRef).then((userDoc) => {
          let userData = {};
          if (!userDoc.exists()) {
            userData = {
              descricao: "",
              displayName: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
              phoneNumber: user.phoneNumber,
            };
            setDoc(userRef, userData);
          } else {
            userData = userDoc.data();
          }
          dispatch(setUser(userData as UsuarioF));
        });
      }
    });
  }
);

export const login = createAsyncThunk("user/login", async (_, { dispatch }) => {
  firebaseAuth.languageCode = "pt_br";
  const provider = new GoogleAuthProvider();
  signInWithPopup(firebaseAuth, provider)
    .then((result) => {
      let userRef = doc(db, "users", result.user.uid);
      getDoc(userRef).then((userDoc) => {
        dispatch(setUser(userDoc.data() as UsuarioF));
      });
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});

export const logout = createAsyncThunk(
  "user/logout",
  async (_, { dispatch }) => {
    signOut(firebaseAuth)
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        // An error happened.
      });
  }
);
