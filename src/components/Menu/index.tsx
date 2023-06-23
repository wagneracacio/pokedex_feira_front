import { useState } from "react";
import { ProfilePicture } from "../ProfilePicture";
import { Medal } from "./Medal";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
interface Score {
  name: string;
  score: number;
  url: string;
  number: string;
}
interface Props {
  items: Score[];
}
interface ItemProps {
  item: Score;
  index: number;
}
const MenuItem = ({ item: { name, number, score, url }, index }: ItemProps) => {
  const [show, setShow] = useState(false);
  return (
    <li
      key={index}
      className="list-group-item"
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        borderBottom: "1px solid #DDD",
        width: "100%",
        paddingBottom: "1rem",
        marginTop: "1rem"
      }}
    >
      <Medal position={index + 1} />
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
          width: "100%"
        }}
      >
        <ProfilePicture url={url} defaultSize={30} />

        <label>{name}:</label>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%"
        }}>
          <label>{score}</label>

          {show && (
            <h6
              className="mb-0"
              style={{
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              Telefone: {number}
            </h6>
          )}
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
            }}
            onClick={() => setShow(!show)}
          >
            {show ? <BsEyeFill /> : <BsEyeSlashFill />}
          </button>
        </div>
      </div>
    </li>
  );
};
export const Menu = ({ items }: Props) => {
  return (
    <div className="w-25 mx-auto">
      <ul
        style={{
          backgroundColor: "#FEFEFE60",
          borderRadius: "4px",
          padding: "1rem",
          margin: "1rem",
        }}
      >
        {items
          .sort((a, b) => {
            if (a.score > b.score) {
              return -1;
            }
            if (a.score < b.score) {
              return 1;
            }
            return 0;
          })
          .map((item, i) => (
            <MenuItem key={i} index={i} item={item} />
          ))}
      </ul>
    </div>
  );
};
