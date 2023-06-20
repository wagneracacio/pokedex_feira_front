import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { db, firebaseAuth } from "../../../config/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addFriendState, setUser } from "./auth-slice";
import {
  updateDoc,
  getDoc,
  setDoc,
  doc,
  arrayUnion,
} from "@firebase/firestore";
import { UsuarioF } from "../../../types";
import { loadCache, saveCache } from "../base/base-slice";

export interface UpdatePropsCall extends UpdateProps {
  user: UsuarioF;
}
export interface UpdateProps {
  displayName: string;
  descricao: string;
  phoneNumber: string;
}
export const updateProfile = createAsyncThunk(
  "user/update",
  async ({ user, ...update }: UpdatePropsCall, { dispatch }) => {
    return await firebaseAuth.onAuthStateChanged((user) => {
      if (!!user) {
        let userRef = doc(db, "users", user.uid);
        updateDoc(userRef, { ...update }).then(() => {
          const u: any = { ...user };
          if (update.displayName) u.displayName = update.displayName;
          if (update.descricao) u.descricao = update.descricao;
          if (update.phoneNumber) u.phoneNumber = update.phoneNumber;
          dispatch(saveCache({ auth: u }));
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
          friends: arrayUnion(uid),
        }).then(() => {
          updateDoc(doc(db, "users", uid), {
            friends: arrayUnion(user.uid),
          }).then(() => {
            dispatch(addFriendState(uid));
          });
        });
      }
    });
  }
);

export const addEvent = createAsyncThunk(
  "user/addFriend",
  async (uid: string, { dispatch }) => {
    return await firebaseAuth.onAuthStateChanged((user) => {
      if (!!user) {
        updateDoc(doc(db, "users", user.uid), {
          eventos: arrayUnion(uid),
        }).then(() => {
          dispatch(addFriendState(uid));
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
        dispatch(loadCache(user.uid));
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
            pontos: Math.floor(Math.random() * 30) + 1,
            friends: arrayUnion(),
            eventos: arrayUnion(),
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
