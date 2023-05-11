import { Card } from "react-bootstrap";
import { Layout } from "../../Layout";
import { ProfilePicture } from "../../components/ProfilePicture";

export const Scan = () => {
  return (
    <Layout>
      <Card style={{ height: "100%", background: "none", border: "none" }}>
        <Card.Title>
          <h5 style={{ textAlign: "center" }}>Scan</h5>
        </Card.Title>
        <Card.Body>
          <ProfilePicture
            showButton={false}
            defaultSize={window.innerWidth * 0.3}
          />
        </Card.Body>
      </Card>
    </Layout>
  );
};
