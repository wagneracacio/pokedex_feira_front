import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import PageLayout from "../Layout";
import { getAllUsers } from "../../redux/features/user/thunks";
import { AnyAction } from "@reduxjs/toolkit";
import { UsuarioF } from "../../types";
import { ProfilePicture } from "../../components/ProfilePicture";
import { Col, Row } from "react-bootstrap";
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
  const { users } = useAppSelector((state) => state.User);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllUsers() as unknown as AnyAction);
  });
  return (
    <PageLayout title="Amigos">
      <>
        {users.map((user) => (
          <AmigoItem key={user.uid} user={user} />
        ))}
      </>
    </PageLayout>
  );
};
