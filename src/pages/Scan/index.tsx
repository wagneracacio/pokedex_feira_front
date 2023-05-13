import { Button, Card, Row } from "react-bootstrap";
import { useState } from "react";
import QrReader from "react-qr-reader";
import { MdCameraswitch } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const Scan = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<"environment" | "user">(
    "environment"
  );

  const handleScan = async (scanData: any) => {
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);
      // setPrecScan(scanData);
    }
  };
  const handleError = (err: any) => {
    console.error(err);
  };
  return (
    <Card style={{ height: "100%", background: "none", border: "none" }}>
      <Card.Title>
        <h5 style={{ textAlign: "center" }}>Scan</h5>
      </Card.Title>
      <Card.Body>
        <div className="d-flex justify-content-center">
          <Button
            style={{
              borderRadius: "50%",
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 12,
              paddingBottom: 12,
            }}
            onClick={() => {
              if (selected === "user") {
                setSelected("environment");
              } else {
                setSelected("user");
              }
            }}
            variant="success"
          >
            <MdCameraswitch size={25} />
          </Button>
        </div>
        <Row className="d-flex justify-content-center mt-4">
          <QrReader
            facingMode={selected}
            delay={1000}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "90vw", maxWidth: "70vh" }}
          />
        </Row>
        <Row className="d-flex justify-content-center mt-4">
          <Button
            style={{ maxWidth: "50vw" }}
            onClick={() => {
              navigate("/profidex");
            }}
            variant="warning"
          >
            Cancelar
          </Button>
        </Row>
      </Card.Body>
    </Card>
  );
};
