import { useEffect, useState } from "react";
import profile from "../../profile.jpg";
import { Button, Image } from "react-bootstrap";
import { BsFillCameraFill } from "react-icons/bs";
export const ProfilePicture = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      const size = Math.ceil(window.innerWidth * 0.75);
      if (size <= 250) {
        setWidth(size);
      } else if (width !== 250) {
        setWidth(250);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <div
        style={{
          width: `${width}px`,
          height: `${width}px`,
          position: "relative",
          overflow: "hidden",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "50%",
        }}
      >
        <Image
          style={{
            display: "inline",
            height: "100%",
            width: "auto",
          }}
          src={profile}
        />
      </div>
      <Button style={{ zIndex: -1, position: "fixed" }} variant="primary">
        <BsFillCameraFill />
      </Button>
      <div>{width}hello</div>
    </div>
  );
};
