import { useEffect } from "react";
import { Menu } from "../../components/Menu";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import PageLayout from "../Layout";
import { getAllUsers } from "../../redux/features/user/thunks";
import { AnyAction } from "@reduxjs/toolkit";
import { loadCache } from "../../redux/features/base/base-slice";

export const Score = () => {
  const {
    Auth: { user },
    Event: { events },
    User: { users },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadCache() as unknown as AnyAction);
    dispatch(getAllUsers() as unknown as AnyAction);
  }, []);
  return (
    <PageLayout title="Score Page">
      <Menu
        items={users.map((u) => ({
          name: u.displayName,
          url: u.photoURL,
          number: u.phoneNumber,
          score: [
            0,
            ...events
              .filter(({ uid }) => u.eventos.includes(uid))
              .map(({ pontos }) => pontos),
            ...users
              .filter(({ uid }) => u.friends.includes(uid))
              .map(({ pontos }) => pontos),
          ].reduce((p, c) => p + c),
        }))}
      />
    </PageLayout>
  );
};
