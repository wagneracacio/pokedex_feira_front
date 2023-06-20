import { createAsyncThunk } from "@reduxjs/toolkit";
import { EventoF, UsuarioF } from "../../../types";
import { loadEvent, setLoading as setLoadingE } from "../event/event-slice";
import { loadUser, setLoading } from "../user/user-slice";
import { getAllUsers } from "../user/thunks";
import { getAllEvents } from "../event/thunks";
import { setUser, updateUser } from "../auth/auth-slice";

export enum Cache {
  EVENTO = "event_cache",
  USER = "user_cache",
  AUTH = "auth_cache",
}

interface SaveCache {
  users?: UsuarioF[];
  events?: EventoF[];
  auth?: UsuarioF;
}

export const saveCache = createAsyncThunk(
  "system/saveCache",
  async ({ events, users, auth }: SaveCache, { dispatch }) => {
    if (events) localStorage.setItem(Cache.EVENTO, JSON.stringify(events));
    if (users) localStorage.setItem(Cache.USER, JSON.stringify(users));
    if (auth) {
      localStorage.setItem(Cache.AUTH, JSON.stringify(auth));
      dispatch(setUser(auth));
    }
  }
);
export const loadCache = createAsyncThunk(
  "system/loadCache",
  async (uid: string| undefined, { dispatch }) => {
    const events = localStorage.getItem(Cache.EVENTO);
    const user = localStorage.getItem(Cache.USER);
    const auth = localStorage.getItem(Cache.AUTH);
    if (auth) {
      const profile = JSON.parse(auth) as UsuarioF;
      if (profile.uid === uid) {
        dispatch(setUser(JSON.parse(auth)));
      }
    }
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
