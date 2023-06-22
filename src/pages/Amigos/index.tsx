import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import PageLayout from "../Layout";
import { AnyAction } from "@reduxjs/toolkit";
import { UsuarioF } from "../../types";
import { ProfilePicture } from "../../components/ProfilePicture";
import { Col, Row } from "react-bootstrap";
import { loadCache, saveCache } from "../../redux/features/base/base-slice";
import { getUsers } from "../../redux/features/user/thunks";
interface Props {
  user: UsuarioF;
}
const AmigoItem = ({ user }: Props) => {
  return (
    <Row className="mb-3">
      <Col>
        <ProfilePicture url={user?.photoURL || undefined} defaultSize={60} />
      </Col>
      <Col>
        <Row>
          <h4>{user.displayName}</h4>
        </Row>
        <Row>
          <h6>{user.descricao}</h6>
        </Row>
      </Col>
    </Row>
  );
};
export const Amigos = () => {
  const {
    User: { users, loading },
    Auth: { beLoad, user },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadCache() as unknown as AnyAction);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (beLoad.length > 0) {
      dispatch(getUsers(beLoad) as unknown as AnyAction);
    } else if (user!.friends.length > users.length) {
      dispatch(getUsers(user!.friends) as unknown as AnyAction);
    }
  }, []);
  useEffect(() => {
    if (loading && users.length > 0)
      dispatch(saveCache({ users }) as unknown as AnyAction);
  }, [dispatch, loading, users]);

  return (
    <PageLayout title="Amigos">
      <>
        {users
          .filter((u) => {
            return user!.friends && user!.friends.includes(u.uid);
          })
          .map((user) => (
            <AmigoItem key={user.uid} user={user} />
          ))}
        {!user!.friends || user!.friends.length < 1 ? (
          <div
            style={{
              display: "flex",
              justifySelf: "center",
              alignContent: "center",
            }}
          >
            <h3 style={{ textAlign: "center", margin: "auto" }}>
              Voce não escaneou nenhum amigo ainda
            </h3>
          </div>
        ) : (
          <h3 style={{ textAlign: "center", margin: "auto" }}>
            Voce escaneou {user!.friends.length} amigo
            {user!.friends.length > 1 ? "s" : null}
          </h3>
        )}
      </>
    </PageLayout>
  );
};
