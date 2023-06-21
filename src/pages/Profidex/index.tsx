import { Button } from "react-bootstrap";
import { BsQrCodeScan } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import PageLayout from "../Layout";
import QRCode from "react-qr-code";
import { useAppSelector } from "../../redux/hook";
import { TypeCheck, userHashCheck } from "../../config/credentials";
import { qrCodeGenerator } from "../../utils/qrCodeValidator";
//BsQrCodeScan

export const Profidex = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.Auth);
  return (
    <PageLayout title="Scan">
      <div className="d-flex justify-content-center">
        <QRCode value={qrCodeGenerator(TypeCheck.USER, user!.uid)} />
      </div>
      <h5 className="d-flex justify-content-center">Seu QrCode</h5>
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
    </PageLayout>
  );
};
