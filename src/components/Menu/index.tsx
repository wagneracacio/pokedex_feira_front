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
        gap: "10px",
      }}
    >
      <Medal position={index + 1} />
      <ProfilePicture url={url} defaultSize={30} />

      <h5
        className="mb-0"
        style={{
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        {name}:
      </h5>
      <h5
        className="mb-0"
        style={{
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        {score}
      </h5>
      <div
        onClick={() => setShow(!show)}
        style={{
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        {show ? <BsEyeFill /> : <BsEyeSlashFill />}
      </div>
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
    </li>
  );
};
export const Menu = ({ items }: Props) => {
  return (
    <div>
      <ul className="list-group">
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
