import { createAsyncThunk } from "@reduxjs/toolkit";
import { EventoF, UsuarioF } from "../../../types";
import { loadEvent, setLoading as setLoadingE } from "../event/event-slice";
import { loadUser, setLoading } from "../user/user-slice";
import { getAllUsers } from "../user/thunks";
import { getAllEvents } from "../event/thunks";

export enum Cache {
  EVENTO = "event_cache",
  USER = "user_cache",
}

interface SaveCache {
  users?: UsuarioF[];
  events?: EventoF[];
}

export const saveCache = createAsyncThunk(
  "system/saveCache",
  async ({ events, users }: SaveCache) => {
    if (events) localStorage.setItem(Cache.EVENTO, JSON.stringify(events));
    if (users) localStorage.setItem(Cache.USER, JSON.stringify(users));
  }
);

export const loadCache = createAsyncThunk(
  "system/loadCache",
  async (_, { dispatch }) => {
    const events = localStorage.getItem(Cache.EVENTO);
    const user = localStorage.getItem(Cache.USER);
    if (events) {
      dispatch(setLoadingE(false));
      (JSON.parse(events) as EventoF[]).forEach((event) => {
        dispatch(loadEvent(event));
      });
      dispatch(setLoadingE(true));
    } else {
      dispatch(getAllEvents());
    }
    if (user) {
      dispatch(setLoading(false));
      (JSON.parse(user) as UsuarioF[]).forEach((u) => {
        dispatch(loadUser(u));
      });
      dispatch(setLoading(true));
    } else {
      dispatch(getAllUsers());
    }
  }
);
