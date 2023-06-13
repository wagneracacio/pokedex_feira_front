import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  Auth,
} from "firebase/auth";
import { FirebaseApp, initializeApp } from "@firebase/app";

import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  doc,
  Firestore,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, firebaseApp, firebaseAuth } from "../../config/firebase";
import { useAppSelector } from "../../redux/hook";
import { useDispatch } from "react-redux";
import { refreshLogin } from "../../redux/features/auth/auth-slice";
import { AnyAction } from "redux";
declare global {
  var firebaseAuth: Auth;
  var firebaseApp: FirebaseApp;
  var db: Firestore;
}
globalThis.firebaseAuth = firebaseAuth;
globalThis.firebaseApp = firebaseApp;
globalThis.db = db;
export const Login = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [called, setCalled] = useState(false);
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.Auth);
  // useEffect(() => {
  //   if (!called) {
  //     firebaseAuth.onAuthStateChanged((user) => {
  //       setShowLogin(!firebaseAuth.currentUser);
  //       if (!!user) {
  //         // console.log(user!.toJSON());
  //         let userRef = doc(db, "users", user.uid);
  //         getDoc(userRef).then((userDoc) => {
  //           setShowLogin(!userDoc.exists());
  //           if (!userDoc.exists()) {
  //             setDoc(userRef, {
  //               displayName: user.displayName,
  //               email: user.email,
  //               photoURL: user.photoURL,
  //               phoneNumber: user.phoneNumber,
  //             });
  //           }
  //         });
  //         //pegar multiplo
  //         getDocs(collection(db, "eventos")).then((usersColletion) => {
  //           usersColletion.forEach((doc) => {
  //             // doc.data() is never undefined for query doc snapshots
  //             console.log(doc.id, " => ", doc.data());
  //           });
  //         });
  //       }
  //     });
  //     setCalled(true);
  //   }
  // }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshLogin() as unknown as AnyAction);
  }, []);
  const login = () => {
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
        // ...
        console.log(token);
        console.log(user);
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
  };

  return (
    <>
      <h1>Login Page</h1>
      <h6>{user?.displayName}</h6>
      {/* <button onClick={() => navigate("/profile")}>profile</button> */}
      {showLogin && (
        <button onClick={() => login()}>Fazer login pelo google</button>
      )}
    </>
  );
};
