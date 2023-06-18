import { Button } from "react-bootstrap";
import { ProfilePicture } from "../../components/ProfilePicture";
import { BsQrCodeScan } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import PageLayout from "../Layout";
import QRCode from "react-qr-code";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { addFriend } from "../../redux/features/auth/thunks";
import { AnyAction } from "@reduxjs/toolkit";
import { useRef } from "react";
import { getAllUsers } from "../../redux/features/user/thunks";
//BsQrCodeScan

export const Profidex = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.Auth);
  return (
    <PageLayout title="Scan">
      <div className="d-flex justify-content-center">
        <QRCode value={user!.uid || "hey"} />
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
