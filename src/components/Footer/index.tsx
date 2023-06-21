import intera from "../../assets/images/company/Intera.svg";
import { Card } from "react-bootstrap"

export const Footer = () => {
    return <Card.Footer
    className="border-0"
    style={{
      display: "flex",
      justifyContent: "end",
      alignItems: "center",
      gap: '5px',
      flexDirection: "row",
      backgroundColor: "rgba(0, 0, 0, 0)",
    }}
  >
    <h6
      style={{
        marginBottom: "0",
        marginTop: "auto",
        fontSize: '0.8rem'
      }}
    >
      Aplicação desenvolvida em parceria com
    </h6>
    <img
      style={{ maxHeight: "40px" }}
      src={intera}
      alt="Intera - Internet Banda Larga"
    />
  </Card.Footer>
}