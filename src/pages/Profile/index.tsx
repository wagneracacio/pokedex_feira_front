import { Card } from "react-bootstrap";
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
        <Menu
          items={[
            { name: "talita", score: 500 },
            { name: "wagner", score: 100 },
            { name: "paulo", score: 150 },
            { name: "carlos", score: 160 },
            { name: "pedro", score: 200 },
            { name: "joão", score: 300 },
            { name: "carla", score: 180 },
            { name: "paula", score: 400 },
          ]}
        />
      </Card.Body>
    </Card>
  );
};
