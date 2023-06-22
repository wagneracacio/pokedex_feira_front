import { ReactNode, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

interface ItemF<T> {
  label: string;
  images: T[];
}
interface Props<T> {
  items: ItemF<T>[];
  renderImage: (item: T) => ReactNode;
}

const GenerateCols = <T,>(
  images: T[],
  byRow: number,
  renderItem: (item: T) => ReactNode
) => {
  const empty = [];
  if (images.length < byRow) {
    for (let i = 0; i < byRow - images.length; i++) {
      empty.push(i);
    }
  }
  return (
    <>
      {images.map((item, i) => (
        <Col key={i}>{renderItem(item)}</Col>
      ))}
      <>{empty.length > 0 ? empty.map((i) => <Col key={i}></Col>) : null}</>
    </>
  );
};
const sliceRow = <T,>(images: T[], byRow: number, count: number) => {
  return images.slice(byRow * (count - 1), byRow * count);
};
const GenerateRows = <T,>(images: T[], renderItem: (item: T) => ReactNode) => {
  const [byRow, setByRow] = useState(Math.floor(window.innerWidth / 135));
  const rows = [];
  for (let i = 1; i <= Math.ceil(images.length / byRow); i++) {
    rows.push(i);
  }
  useEffect(() => {
    const handleResize = () => {
      setByRow(Math.floor(window.innerWidth / 135));
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {rows.map((v) => (
        <Row key={v}>
          {GenerateCols(sliceRow(images, byRow, v), byRow, renderItem)}
        </Row>
      ))}
    </>
  );
};
export const List = <T,>({ items, renderImage }: Props<T>) => {
  return (
    <>
      {items.map(({ label, images }, i) => (
        <div key={i}>
          <h4 className="mb-4" style={{ textAlign: "center" }}>{label}</h4>
          {GenerateRows(images, renderImage)}
        </div>
      ))}
    </>
  );
};
