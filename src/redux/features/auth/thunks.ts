import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  User,
} from "firebase/auth";
import { db, firebaseAuth } from "../../../config/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setUser, updateUser } from "./auth-slice";
import {
  updateDoc,
  getDoc,
  setDoc,
  doc,
  arrayUnion,
} from "@firebase/firestore";
import { UsuarioF } from "../../../types";
import { loadCache, saveCache } from "../base/base-slice";

export interface UpdateProps {
  displayName: string;
  descricao: string;
  phoneNumber: string;
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

export const addFriend = createAsyncThunk(
  "user/addFriend",
  async (uid: string, { dispatch }) => {
    return await firebaseAuth.onAuthStateChanged((user) => {
      if (!!user) {
        updateDoc(doc(db, "users", user.uid), {
          friends: arrayUnion(doc(db, "users", uid)),
        }).then(() => {});
      }
    });
  }
);

export const refreshLogin = createAsyncThunk(
  "user/refreshlogin",
  async (_, { dispatch }) => {
    return await firebaseAuth.onAuthStateChanged((user) => {
      if (!!user) {
        dispatch(loadCache(user.uid))
        //let userRef = doc(db, "users", user.uid);
        //getDoc(userRef).then((userDoc) => {
        //  dispatch(setUser({ uid: user.uid, ...userDoc.data() } as UsuarioF));
        //});
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
        let userData = {};
        if (!userDoc.exists()) {
          userData = {
            uid: result.user.uid,
            descricao: "",
            displayName: result.user.displayName,
            email: result.user.email,
            photoURL: result.user.photoURL,
            phoneNumber: result.user.phoneNumber,
            friends: arrayUnion(),
          };
          setDoc(userRef, userData);
        } else {
          userData = { uid: result.user.uid, ...userDoc.data() };
        }
        dispatch(saveCache({ auth: userData as UsuarioF }));
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
