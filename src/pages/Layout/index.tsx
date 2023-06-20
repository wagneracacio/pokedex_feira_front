import { ReactNode } from "react";
import { Button, Card, Dropdown } from "react-bootstrap";
import { FiSkipBack } from "react-icons/fi";
import { BsList } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hook";
import { logout } from "../../redux/features/auth/auth-slice";
import { AnyAction } from "@reduxjs/toolkit";
import intera from "../../assets/images/company/Intera.svg";
import { Footer } from "../../components/Footer";
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
      <Header {...{ title, goBack, onClose }} />
      <Card.Body>{children}</Card.Body>
      <Footer />
    </Card>
  );
}

interface HeaderProps {
  goBack?: boolean;
  onClose?: () => void;
  title?: string;
}
const Header = ({ goBack, onClose, title }: HeaderProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
          <Dropdown.Item onClick={() => navigate("/profile")}>
            Profile
          </Dropdown.Item>
          <Dropdown.Item onClick={() => navigate("/profidex")}>
            Profidex
          </Dropdown.Item>
          <Dropdown.Item onClick={() => navigate("/amigos")}>
            Amigos
          </Dropdown.Item>
          <Dropdown.Item onClick={() => navigate("/galeria")}>
            Galeria
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => dispatch(logout() as unknown as AnyAction)}
          >
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
