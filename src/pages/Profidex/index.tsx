import { Button } from "react-bootstrap";
import { BsQrCodeScan } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import PageLayout from "../Layout";
import QRCode from "react-qr-code";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { TypeCheck } from "../../config/credentials";
import { qrCodeGenerator } from "../../utils/qrCodeValidator";
import { useEffect } from "react";
import { AnyAction } from "@reduxjs/toolkit";
import { saveCache } from "../../redux/features/base/base-slice";
//BsQrCodeScan

export const Profidex = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    Auth: { user },
    Event: { events, loading },
  } = useAppSelector((state) => state);
  useEffect(() => {
    if (loading && events.length > 0)
      dispatch(saveCache({ auth: user! }) as unknown as AnyAction);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <PageLayout title="Scan">
      <div style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}>
        <div>
          <h5 className="d-flex justify-content-center">Seu QrCode</h5>
          <QRCode value={qrCodeGenerator(TypeCheck.USER, user!.uid)} />
        </div>
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
      </div>
    </PageLayout>
  );
};
