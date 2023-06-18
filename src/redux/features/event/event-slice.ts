import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EventoF } from "../../../types";

export interface EventState {
  events: EventoF[];
  loading: boolean;
}

const initialState: EventState = {
  events: [],
  loading: true,
};

const eventSlice = createSlice({
  name: "eventSlice",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      const loading = action.payload;
      state.loading = loading;
    },
    loadEvent(state, action: PayloadAction<EventoF | null>) {
      const event = action.payload;
      const index = state.events.findIndex(({ uid }) => event?.uid === uid);
      if (index < 0) {
        state.events.push(event!);
      } else {
        state.events[index] = event!;
      }
    },
  },
});
export const { loadEvent, setLoading } = eventSlice.actions;
export default eventSlice.reducer;
