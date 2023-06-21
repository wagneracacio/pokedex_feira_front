import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { firebaseConfig } from "./credentials";

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
