import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { AnyAction, Dispatch } from "redux";
import { AsyncThunkAction } from "@reduxjs/toolkit";

export const useAppDispatch = () => useDispatch<Dispatch<AnyAction>>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
