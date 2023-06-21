import { FaMedal } from "react-icons/fa";

interface Props {
  position: number;
}

export const Medal = ({ position }: Props) => {
  return (
    <button
      type="button"
      className="btn"
      style={{
        backgroundColor:
          position === 1
            ? "#ffd700"
            : position === 2
            ? "#c0c0c0"
            : position === 3
            ? "#cd7f32"
            : "#6c757d",
        borderRadius: "50%",
      }}
    >
      {position < 4 ? (
        <FaMedal style={{ padding: 0, margin: 0 }} />
      ) : (
        <div style={{ width: 16, height: 24 }}>{position}</div>
      )}
    </button>
  );
};
