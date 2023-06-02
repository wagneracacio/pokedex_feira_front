import { Medal } from "./Medal";
interface Score {
  name: string;
  score: number;
}
interface Props {
  items: Score[];
}
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
          .map(({ name, score }, i) => (
            <li key={i} className="list-group-item">
              <Medal position={i + 1} />
              {name}:{score}
            </li>
          ))}
      </ul>
    </div>
  );
};
