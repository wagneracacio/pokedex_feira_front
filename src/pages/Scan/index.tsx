import { Button, Row } from "react-bootstrap";
import { useState } from "react";
import QrReader from "react-qr-reader";
import { MdCameraswitch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import PageLayout from "../Layout";
import { qrCodeValidator } from "../../utils/qrCodeValidator";
import { TypeCheck } from "../../config/credentials";
import { addEvent, addFriend } from "../../redux/features/auth/thunks";
import { useAppDispatch } from "../../redux/hook";
import { AnyAction } from "@reduxjs/toolkit";

export const Scan = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState<"environment" | "user">(
    "environment"
  );

  const handleScan = async (scanData: any) => {
    if (scanData && scanData !== "") {
      const obj = qrCodeValidator(scanData)
      if (obj) {
        if (obj.type === TypeCheck.EVENT) {
          //chamada para adicionar evento
          dispatch(addEvent(obj.value) as unknown as AnyAction)
        } else if (obj.type === TypeCheck.USER) {
          //chamada para adicionar amigo
          dispatch(addFriend(obj.value) as unknown as AnyAction)
        }
        navigate('/profidex')
      }
    }
  };
  const handleError = (err: any) => {
    console.log(err);
  };
  return (
    <PageLayout title="Scan" goBack>
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
          delay={5000}
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
    </PageLayout>
  );
};
