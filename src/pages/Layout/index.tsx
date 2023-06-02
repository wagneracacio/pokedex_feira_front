import { ReactNode } from "react";
import { Button, Card, Col, Dropdown, Row } from "react-bootstrap";
import { FiSkipBack } from "react-icons/fi";
import { BsList } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  children: ReactNode;
  url?: string;
}
export const PageLayout = ({ title, children, url }: Props) => {
  const navigate = useNavigate();
  return (
    <Card style={{ height: "100%", background: "none", border: "none" }}>
      <Card.Title>
        <Row className="mt-3" style={{
          width: "100%",
          display: "flex",
          alignItems: "space-between",
        }}>
          {url && (
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
                onClick={() => navigate("/")}
                variant="warning"
              >
                <FiSkipBack />
              </Button>
            </Col>
          )}
          <Col>
            <h5 style={{ textAlign: "center" }}>{title}</h5>
          </Col>
          <Col>
            <Dropdown align={"end"}>
              <Dropdown.Toggle
                variant="light"
                style={{
                  position: "absolute",
                  display: "block",
                  marginLeft: "auto",
                  padding: 10,
                  marginRight: 0,
                  borderRadius: "150%",
                }}
              >
                <BsList />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Card.Title>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
};
