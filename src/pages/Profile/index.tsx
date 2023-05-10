import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { ProfilePicture } from "../../components/ProfilePicture";
import { useNavigate } from "react-router-dom";
import { Menu } from "../../components/Menu";

export const Profile = () => {
  const navigate = useNavigate();
  return (
    <Card>
      <Card.Title>Profile Page</Card.Title>
      <Card.Body>
        <ProfilePicture />
        <Form.Group>
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Basic textarea</Form.Label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
          ></textarea>
        </Form.Group>
        <Row>
          <Col>
            <Button>Salvar</Button>
          </Col>
          <Col>
            <Button>Salvar</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
