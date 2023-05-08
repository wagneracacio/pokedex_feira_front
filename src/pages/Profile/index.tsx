import { Card } from "react-bootstrap";
import { ProfilePicture } from "../../components/ProfilePicture";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();
  return (
    <Card>
      <Card.Title>Profile Page</Card.Title>
      <Card.Body>
        <ProfilePicture />
      </Card.Body>
    </Card>
  );
};
