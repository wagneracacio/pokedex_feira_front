import { Card } from "react-bootstrap";
import { ProfilePicture } from "../../components/ProfilePicture";
import { useState } from "react";
import QrReader from "react-qr-reader";

export const Scan = () => {
  const [selected, setSelected] = useState("environment");
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState("");

  const handleScan = async (scanData: any) => {
    setLoadingScan(true);
    console.log(`loaded data data`, scanData);
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);
      setData(scanData);
      setStartScan(false);
      setLoadingScan(false);
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
        <ProfilePicture
          showButton={false}
          defaultSize={window.innerWidth * 0.3}
        />
        <h2>
          Last Scan:
          {selected}
        </h2>

        <button
          onClick={() => {
            setStartScan(!startScan);
          }}
        >
          {startScan ? "Stop Scan" : "Start Scan"}
        </button>
        {startScan && (
          <>
            <select onChange={(e) => setSelected(e.target.value)}>
              <option value={"environment"}>Back Camera</option>
              <option value={"user"}>Front Camera</option>
            </select>
            <QrReader
              facingMode={selected as "user"}
              delay={1000}
              onError={handleError}
              onScan={handleScan}
              // chooseDeviceId={()=>selected}
              style={{ width: "300px" }}
            />
          </>
        )}
        {loadingScan && <p>Loading</p>}
        {data !== "" && <p>{data}</p>}
      </Card.Body>
    </Card>
  );
};
