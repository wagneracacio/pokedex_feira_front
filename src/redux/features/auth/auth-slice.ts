import { User } from "@firebase/auth";
import { doc, getDoc, setDoc, collection } from "@firebase/firestore";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  Auth,
} from "firebase/auth";
import { db, firebaseAuth } from "../../../config/firebase";

export const login = createAsyncThunk("user/login", async (_, { dispatch }) => {
  firebaseAuth.languageCode = "pt_br";
  const provider = new GoogleAuthProvider();
  signInWithPopup(firebaseAuth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential!.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      console.log(token);
      console.log(user);
      dispatch(setUser(result.user));

      const usersRef = collection(db, "users");
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

export interface loginState {
  user: User | null;
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
    setUser(state, action: PayloadAction<User | null>) {
      const user = action.payload;
      state.user = user;
      state.loading = false;
    },
  },
  extraReducers(builder) {},
});
const { setUser } = loginSlice.actions;
export default loginSlice.reducer;

export const refreshLogin = createAsyncThunk(
  "user/refrehlogin",
  async (_, { dispatch }) => {
    return await firebaseAuth.onAuthStateChanged((user) => {
      // setShowLogin(!firebaseAuth.currentUser);
      console.log(user);
      if (!!user) {
        // console.log(user!.toJSON());
        let userRef = doc(db, "users", user.uid);
        getDoc(userRef).then((userDoc) => {
          // setShowLogin(!userDoc.exists());
          if (!userDoc.exists()) {
            setDoc(userRef, {
              displayName: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
              phoneNumber: user.phoneNumber,
            });
          }
        });
        //pegar multiplo
        //   getDocs(collection(db, "eventos")).then((usersColletion) => {
        //     usersColletion.forEach((doc) => {
        //       // doc.data() is never undefined for query doc snapshots
        //       console.log(doc.id, " => ", doc.data());
        //     });
        //   });
      }
      dispatch(setUser(user));
    });
  }
);
