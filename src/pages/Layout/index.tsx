import { ReactNode } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { FiSkipBack } from "react-icons/fi";

interface Props {
  title: string;
  children: ReactNode;
}
export const PageLayout = ({ title, children }: Props) => {
  return (
    <Card style={{ height: "100%", background: "none", border: "none" }}>
      <Card.Title>
        <Row className="mt-3">
          <Col>
            <Button
              style={{
                display: "block",
                marginLeft: "auto",
                paddingLeft: "10px",
                paddingRight: "10px",
                marginRight: "auto",
                borderRadius: "150%",
              }}
              variant="warning"
            >
              <FiSkipBack />
            </Button>
          </Col>
          <Col>
            <h5 style={{ textAlign: "center" }}>{title}</h5>
          </Col>
          <Col></Col>
        </Row>
      </Card.Title>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
};
