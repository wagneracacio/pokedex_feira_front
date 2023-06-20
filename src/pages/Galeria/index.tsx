import { List } from "../../components/List";
import teste from "../../assets/images/prof/teste.png";
import PageLayout from "../Layout";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { EventoF } from "../../types";
import { useEffect } from "react";
import { getAllEvents } from "../../redux/features/event/thunks";
import { AnyAction } from "@reduxjs/toolkit";
import { loadCache } from "../../redux/features/base/base-slice";

export const Galeria = () => {
  const { events } = useAppSelector((state) => state.Event);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadCache() as unknown as AnyAction);
    dispatch(getAllEvents() as unknown as AnyAction);
  }, []);
  return (
    <PageLayout title="Galeria">
      <List<EventoF>
        renderImage={({ uid, image, name }) => (
          <>
            <img
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "100%",
                maxWidth: "80px",
                filter: !true ? "brightness(0)" : undefined,
              }}
              src={teste}
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
        )}
        items={[
          {
            label: "Profissoes",
            images: events,
          },
        ]}
      />
    </PageLayout>
  );
};
