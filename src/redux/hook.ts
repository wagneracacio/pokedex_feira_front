import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AsyncThunkAction } from "@reduxjs/toolkit";
import { RootState, AppDispatch } from "./store";
import { AnyAction } from "redux";
import { Dispatch } from "react";

export const useAppDispatch = () => useDispatch();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
