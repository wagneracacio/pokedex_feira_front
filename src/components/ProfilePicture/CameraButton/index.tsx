import { useEffect, useRef, useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { Button } from "react-bootstrap";

interface Props {
  size: React.MutableRefObject<number>;
}
export const CameraButton = ({ size }: Props) => {
  const refButton = useRef<HTMLButtonElement>(null);
  const [mt, setMt] = useState(0);
  const [ml, setMl] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      const perc = 0.67;
      const halfscreen = window.innerWidth * 0.5;
      const halfSize = size.current * 0.5;
      const { width, height } = refButton.current!.getBoundingClientRect();
      setMl(halfscreen - width * 0.5 - 12 + halfSize * perc);
      setMt(-(height * 0.5) - halfSize * (1 - perc));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Button
      ref={refButton}
      style={{
        zIndex: 10,
        position: "fixed",
        borderRadius: "50%",
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 6,
        paddingBottom: 8,
        marginLeft: ml,
        marginTop: mt,
      }}
      variant="success"
    >
      <BsFillCameraFill />
    </Button>
  );
};
