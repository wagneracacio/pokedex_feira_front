import { Alert, Button, Form, Row, Spinner } from "react-bootstrap";
import { ProfilePicture } from "../ProfilePicture";
import PageLayout from "../../pages/Layout";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import "react-phone-number-input/style.css";
import { useFormik } from "formik";
import { string, object } from "yup";
import "./styles.css";
import { AnyAction } from "@reduxjs/toolkit";
import { updateProfile } from "../../redux/features/auth/thunks";
import React from "react";
export interface ProfileData {
  displayName: string;
  phoneNumber: string;
  descricao: string;
}
interface ProfileProps {
  initialValues: ProfileData;
}

export const ProfileForm = ({ initialValues }: ProfileProps) => {
  const { user } = useAppSelector((state) => state.Auth);
  const [messages, setMessages] = React.useState({
    variant: "success",
    text: "",
  });
  const formik = useFormik({
    initialValues,
    validationSchema: object({
      displayName: string().required("Campo obrigatório").trim().min(3, "O nome deve ter no mínimo 3 caracteres"),
      phoneNumber: string()
        .trim()
        .required("Campo obrigatório")
        .min(11, "O telefone deve ter no mínimo 11 dígitos"),
      descricao: string().trim(),
    }),
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        handleSave(values);

        setMessages({
          variant: "success",
          text: "Perfil atualizado com sucesso!",
        });
      } catch (error) {
        setMessages({
          variant: "danger",
          text: "Erro ao atualizar perfil!",
        });
      } finally {
        setSubmitting(false);

        setTimeout(() => {
          setMessages({
            variant: "",
            text: "",
          });
        }, 3000);
      }
    },
  });

  const dispatch = useAppDispatch();

  const handleDataChanges = () => {
    if (
      formik.values.displayName !== user?.displayName ||
      formik.values.descricao !== user?.descricao ||
      formik.values.phoneNumber !== user?.phoneNumber
    ) {
      return false;
    }

    return true;
  };

  const handleSave = (values: ProfileData) => {
    dispatch(
      updateProfile({
        user: user!,
        displayName: values.displayName,
        descricao: values.descricao,
        phoneNumber: values.phoneNumber,
      }) as unknown as AnyAction
    );
  };
  return (
    <PageLayout title="Meu Perfil">
      <ProfilePicture defaultSize={100} url={user?.photoURL || undefined} />{" "}
      <Row className="customWidth">
        <form onSubmit={formik.handleSubmit}>
          <Form.Group className="mt-2">
            <Form.Label
              style={{
                width: "100%",
                marginTop: "1rem",
                fontSize: "1.2rem",
                color: "black",
              }}
            >
              Nome
            </Form.Label>
            <Form.Control
              value={formik.values.displayName}
              name="displayName"
              id="displayName"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              data-testid="displayName"
              placeholder="Nome"
              style={{
                border: formik.errors.displayName ? "1px solid red" : "",
                boxShadow: formik.errors.displayName
                  ? "0 0 0 0.25rem #94040120"
                  : "",
                backgroundColor: "#FFFFFF90",
              }}
            />
            <p
              style={{
                color: "red",
                fontSize: "0.9rem",
              }}
            >
              {formik.errors.displayName}
            </p>
          </Form.Group>
          <Form.Group className="mt-2">
            <Form.Label
              style={{
                width: "100%",
                marginTop: "1rem",
                fontSize: "1.2rem",
                color: "black",
              }}
            >
              Número para contato
            </Form.Label>
            <Form.Control
              value={formik.values.phoneNumber}
              name="phoneNumber"
              type="tel"
              autoComplete="off"
              id="phoneNumber"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              data-testid="phoneNumber"
              placeholder="Telefone"
              style={{
                border: formik.errors.phoneNumber ? "1px solid red" : "",
                boxShadow: formik.errors.phoneNumber
                  ? "0 0 0 0.25rem #94040120"
                  : "",
                backgroundColor: "#FFFFFF90",
              }}
            />
            <p
              style={{
                color: "red",
                fontSize: "0.9rem",
              }}
            >
              {formik.errors.phoneNumber}
            </p>
          </Form.Group>
          <Form.Group className="mt-2">
            <Form.Label
              style={{
                width: "100%",
                marginTop: "1rem",
                fontSize: "1.2rem",
                color: "black",
              }}
            >
              Minha descrição
            </Form.Label>
            <textarea
              value={formik.values.descricao}
              name="descricao"
              className="form-control"
              id="descricao"
              rows={3}
              data-testid="descricao"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{
                border: formik.errors.descricao ? "1px solid red" : "",
                boxShadow: formik.errors.descricao
                  ? "0 0 0 0.25rem #94040120"
                  : "",
                backgroundColor: "#FFFFFF90",
              }}
            ></textarea>
            <p
              style={{
                color: "red",
                fontSize: "0.9rem",
              }}
            >
              {formik.errors.descricao}
            </p>
          </Form.Group>
          {messages.text && (
            <div className={`alert-fixed alert-${messages.variant}`}>
              <Alert>{messages.text}</Alert>
            </div>
          )}
          <Button
            style={{
              width: "100%",
              marginTop: "1rem",
              backgroundColor: "#40855E",
              border: "none",
              height: "2.5rem",
              padding: "0",
              fontSize: "1.1rem",
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "white",
            }}
            disabled={
              formik.isSubmitting || !formik.isValid || handleDataChanges()
            }
            type="submit"
            className="customHover"
          >
            {formik.isSubmitting ? (
              <Spinner
                animation="border"
                style={{
                  padding: "0",
                  margin: "0",
                  height: "1.5rem",
                  width: "1.5rem",
                }}
              />
            ) : (
              "Salvar"
            )}
          </Button>
        </form>
      </Row>
    </PageLayout>
  );
};
