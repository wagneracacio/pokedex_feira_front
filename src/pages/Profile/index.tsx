import { Button, Col, Form, Row } from "react-bootstrap";
import { ProfilePicture } from "../../components/ProfilePicture";
import PageLayout from "../Layout";

export const Profile = () => {
  return (
    <PageLayout title="My Profile">
      <ProfilePicture />
      <Form.Group className="mt-2">
        <Form.Label className="text-center" style={{ width: "100%" }}>
          Nome
        </Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mt-2">
        <Form.Label className="text-center" style={{ width: "100%" }}>
          Minha descrição
        </Form.Label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
        ></textarea>
      </Form.Group>
      <Row className="mt-2">
        <Col align="center">
          <Button>Salvar</Button>
        </Col>
        <Col align="center">
          <Button variant="warning">Cancelar</Button>
        </Col>
      </Row>
    </PageLayout>
  );
};
