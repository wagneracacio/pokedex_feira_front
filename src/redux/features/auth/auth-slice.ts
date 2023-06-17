import { User } from "@firebase/auth";
import { doc, getDoc, setDoc } from "@firebase/firestore";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const login = createAsyncThunk("user/login", async () => {});

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
