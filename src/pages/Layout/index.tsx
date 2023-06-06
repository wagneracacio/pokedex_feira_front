import { ReactNode } from "react";
import { Button, Card, Dropdown } from "react-bootstrap";
import { FiSkipBack } from "react-icons/fi";
import { BsList } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface PageProps {
  title: string;
  children: ReactNode;
  goBack?: boolean;
}

export default function PageLayout({
  title,
  children,
  goBack = false,
}: PageProps) {
  const navigate = useNavigate();
  const onClose = () => {
    navigate(-1);
  };
  return (
    <Card style={{ height: "100%", background: "none", border: "none" }}>
      <Header {...{ title, goBack, onClose}} />
      <Card.Body>{children}</Card.Body>
    </Card>
  );
}

interface HeaderProps {
  goBack?: boolean;
  onClose?: () => void;
  title?: string;
}
function Header({ goBack, onClose, title }: HeaderProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
      }}
    >
      <div>
        {goBack && (
          <Button
            style={{
              borderRadius: "150%",
            }}
            onClick={onClose}
            variant="warning"
          >
            <FiSkipBack />
          </Button>
        )}
      </div>
      <h5
        style={{
          textAlign: "center",
          width: "100%",
          marginLeft: goBack ? 0 : "3rem",
        }}
      >
        {title}
      </h5>
      <Dropdown data-testid="dropdownId">
        <Dropdown.Toggle
          variant="light"
          style={{
            display: "block",
            padding: 10,
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
    </div>
  );
}
