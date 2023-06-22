import { AnyAction, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { loadEvent, setLoading } from "./event-slice";
import { EventoF } from "../../../types";
import { eventos } from "../../../pages/Galeria/utils";
import { setDoc, doc } from "@firebase/firestore";
import { qrCodeGenerator } from "../../../utils/qrCodeValidator";
import { TypeCheck } from "../../../config/credentials";

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

export const setEvents = createAsyncThunk("event/setEvents", async () => {
  eventos.forEach((ev) => {
    setDoc(doc(db, "eventos", ev.uid), ev).then(() => {
      console.log(`${ev.name} : ${ev.Tipo} : ${qrCodeGenerator(TypeCheck.EVENT, ev.uid)}`)
    });
  });
  console.log("terminou");
});
