import { Col, Row } from "react-bootstrap";
import cooker from "../assets/images/careers/cooker.svg";
import detective from "../assets/images/careers/detective.svg";
import mechanic from "../assets/images/careers/mechanic.svg";
import singer from "../assets/images/careers/singer.svg";
import teacher from "../assets/images/careers/teacher.svg";
import technologist from "../assets/images/careers/technologist.svg";
interface Props {
  children: React.ReactNode;
}

interface PieceProps {
  image: string;
  color: string;
}
const Piece = ({ color, image }: PieceProps) => {
  return (
    <Col
      style={{
        backgroundColor: color,
        height: "100%",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "silver",
      }}
      className="d-flex lign-items-center justify-content-center"
    >
      <img
        src={image}
        alt=""
        style={{
          opacity: 0.15,
          maxHeight: "100%",
          maxWidth: "100%",
        }}
      />
    </Col>
  );
};

export const Layout = ({ children }: Props) => {
  const pieces = [];
  for (let i = 0; i < 9; i++) {
    pieces.push(i + 1);
  }
  const carrers = [cooker, detective, mechanic, singer, teacher, technologist];
  const colors = [
    "rgb(159 203 168 / 80%)",
    "rgb(203 159 171 / 80%)",
    "rgb(203 185 159 / 80%)",
    "rgb(159 160 203 / 80%)",
    "rgb(198 203 159 / 80%)",
    "rgb(133 132 132 / 80%)",
  ];
  const elements = pieces.map((n, i) => {
    const r = Math.floor(Math.random() * 6);
    return <Piece color={colors[r]} key={i} image={carrers[r]} />;
  });
  return (
    <>
      <div
        style={{
          position: "fixed",
          zIndex: "-10",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Row style={{ height: "33vh" }}>{elements.slice(0, 3)}</Row>
        <Row style={{ height: "34vh" }}>{elements.slice(3, 6)}</Row>
        <Row style={{ height: "33vh" }}>{elements.slice(6, 9)}</Row>
      </div>
      {children}
    </>
  );
};
