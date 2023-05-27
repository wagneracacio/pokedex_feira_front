import { Button, Card } from "react-bootstrap";
import { ProfilePicture } from "../../components/ProfilePicture";
import { useState } from "react";
import { BsQrCodeScan } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { List } from "../../components/List";
import teste from "../../assets/images/prof/teste.png";
import { PageLayout } from "../Layout";

//BsQrCodeScan

export const Profidex = () => {
  const navigate = useNavigate();
  return (
    <PageLayout title="Scan">
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
    </PageLayout>
  );
};
