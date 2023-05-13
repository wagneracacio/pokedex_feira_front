import { Button, Card } from "react-bootstrap";
import { ProfilePicture } from "../../components/ProfilePicture";
import { useState } from "react";
import { BsQrCodeScan } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
//BsQrCodeScan

export const Profidex = () => {
  const navigate = useNavigate();
  return (
    <Card style={{ height: "100%", background: "none", border: "none" }}>
      <Card.Title>
        <h5 style={{ textAlign: "center" }}>Scan</h5>
      </Card.Title>
      <Card.Body>
        <ProfilePicture
          showButton={false}
          defaultSize={window.innerWidth * 0.3}
        />
        <div className="d-flex justify-content-center mt-5">
          <Button
            style={{
              borderRadius: "50%",
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 12,
              paddingBottom: 12,
              borderColor: "black",
              borderWidth: "5px",
            }}
            variant="light"
            onClick={() => navigate("/scan")}
          >
            <BsQrCodeScan size={50} />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
