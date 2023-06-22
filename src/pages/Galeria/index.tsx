import { List } from "../../components/List";
import teste from "../../assets/images/prof/teste.png";
import PageLayout from "../Layout";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { EventoF, UsuarioF } from "../../types";
import { useEffect } from "react";
import { getAllEvents } from "../../redux/features/event/thunks";
import { AnyAction } from "@reduxjs/toolkit";
import { loadCache, saveCache } from "../../redux/features/base/base-slice";
import { getImage } from "./utils";

const Item =
  (user: UsuarioF) =>
  ({ uid, image, name }: EventoF) =>
    (
      <>
        <img
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
            maxWidth: "80px",
            filter: !user!.eventos.includes(uid) ? "brightness(0)" : undefined,
          }}
          src={getImage(image)}
          alt={uid}
        />
        <h6
          style={{
            textAlign: "center",
          }}
        >
          {name}
        </h6>
      </>
    );

export const Galeria = () => {
  const {
    Event: { events, loading },
    Auth: { user },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadCache() as unknown as AnyAction);
  }, []);
  useEffect(() => {
    if (loading && events && events.length > 0)
      dispatch(saveCache({ events }) as unknown as AnyAction);
  }, [loading]);
  return (
    <PageLayout title="Galeria">
      <List<EventoF>
        renderImage={Item(user!)}
        items={[
          {
            label: "Profissoes",
            images: events.filter((ev) => ev.tipo.includes('prof')),
          },
        ]}
      />
      <div className="mt-4"></div>
      <List<EventoF>
        renderImage={Item(user!)}
        items={[
          {
            label: "Palestras",
            images: events.filter((ev) => ev.tipo === 'pales'),
          },
        ]}
      />
    </PageLayout>
  );
};
