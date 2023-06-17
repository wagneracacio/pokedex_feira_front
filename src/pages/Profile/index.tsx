import { Button, Col, Form, Row } from "react-bootstrap";
import { ProfilePicture } from "../../components/ProfilePicture";
import PageLayout from "../Layout";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useEffect, useRef, useState } from "react";
import { updateProfile } from "../../redux/features/auth/thunks";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { AnyAction } from "@reduxjs/toolkit";

export const Profile = () => {
  const { user } = useAppSelector((state) => state.Auth);
  const [edit, setEdit] = useState(false);
  const [phone, setPhone] = useState(user!.phoneNumber);
  const descricao = useRef<HTMLTextAreaElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const change = () => {
    if (
      (name.current && name.current.value! !== user?.displayName) ||
      (descricao.current && descricao.current.value !== user?.descricao) ||
      phone !== user?.phoneNumber
    ) {
      setEdit(true);
    } else {
      setEdit(false);
    }
  };
  useEffect(() => {
    change();
  }, [phone]);
  return (
    <PageLayout title="My Profile">
      <ProfilePicture url={user?.photoURL || undefined} />
      <Form.Group className="mt-2">
        <Form.Label className="text-center" style={{ width: "100%" }}>
          Nome
        </Form.Label>
        <Form.Control
          ref={name}
          type="text"
          defaultValue={user!.displayName}
          onChange={change}
        />
      </Form.Group>
      <Form.Group className="mt-2">
        <Form.Label className="text-center" style={{ width: "100%" }}>
          Numero para contato
        </Form.Label>
        <PhoneInput
          value={user!.phoneNumber}
          placeholder="Numero para contato"
          onChange={(phone) => {
            setPhone(phone!.toString());
          }}
        />
      </Form.Group>
      <Form.Group className="mt-2">
        <Form.Label className="text-center" style={{ width: "100%" }}>
          Minha descrição
        </Form.Label>
        <textarea
          ref={descricao}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
          defaultValue={user!.descricao}
          onChange={change}
        ></textarea>
      </Form.Group>
      {edit && (
        <Row className="mt-2">
          <Col align="center">
            <Button
              onClick={() => {
                dispatch(
                  updateProfile({
                    displayName: name.current!.value,
                    descricao: descricao.current!.value,
                    phoneNumber: phone,
                  }) as unknown as AnyAction
                );
                setEdit(false);
              }}
            >
              Salvar
            </Button>
          </Col>
          <Col align="center">
            <Button variant="warning">Cancelar</Button>
          </Col>
        </Row>
      )}
    </PageLayout>
  );
};
