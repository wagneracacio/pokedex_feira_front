import { Card } from "react-bootstrap";
import { Menu } from "../../components/Menu";
import { PageLayout } from "../Layout";

export const Score = () => {
  return (
    <PageLayout title="Score Page">
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
    </PageLayout>
  );
};
