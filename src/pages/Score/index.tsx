import { Card } from "react-bootstrap";
import { Menu } from "../../components/Menu";

export const Score = () => {
  return (
    <Card>
      <Card.Title>Score Page</Card.Title>
      <Card.Body>
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
