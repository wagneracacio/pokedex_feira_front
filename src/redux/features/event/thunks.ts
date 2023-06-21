import { AnyAction, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { loadEvent, setLoading } from "./event-slice";
import { EventoF } from "../../../types";

export const getAllEvents = createAsyncThunk(
  "event/getAll",
  async (_, { dispatch }) => {
    return getDocs(collection(db, "eventos"))
      .then((eventsCollection) => {
        dispatch(setLoading(true));
        eventsCollection.forEach((doc) => {
          dispatch(loadEvent(doc.data() as EventoF) as unknown as AnyAction);
        });
      })
      .then(() => dispatch(setLoading(false)));
  }
);
