import { useEffect, useRef, useState } from "react";
import { CameraButton } from "./CameraButton";
import profile from '../../assets/profile.jpg';
import { Image } from "react-bootstrap";

interface Props {
  showButton?: boolean;
  defaultSize?: number;
}

export const ProfilePicture = ({ showButton = true, defaultSize }: Props) => {
  const refWidth = useRef(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      const size = defaultSize || Math.ceil(window.innerWidth * 0.6);
      if (size <= 250) {
        refWidth.current = size;
        setWidth(size);
      } else if (width !== 250) {
        refWidth.current = 250;
        setWidth(250);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div
        style={{
          width: `${refWidth.current}px`,
          height: `${refWidth.current}px`,
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
          alt="profile"
        />
      </div>
      {showButton ? <CameraButton size={refWidth} /> : null}
    </div>
  );
};
