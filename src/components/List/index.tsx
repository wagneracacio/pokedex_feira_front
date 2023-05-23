import { Col, Row } from "react-bootstrap";

interface ImageF {
  image: string;
  id: string;
}
interface ItemF {
  label: string;
  images: ImageF[];
}
interface Props {
  items: ItemF[];
}
const getDiv = (images: ImageF[]) => 3;
const GenerateCols = (images: ImageF[], byRow: number) => {
  const empty = [];
  if (images.length < byRow) {
    for (let i = 0; i < byRow - images.length; i++) {
      empty.push(i);
    }
  }
  return (
    <>
      {images.map(({ image, id }, i) => (
        <Col key={i}>
          {image && id ? (
            <>
              {id}
              <img
                style={{
                  width: "100%",
                  filter: "brightness(0)",
                }}
                src={image}
                alt={id}
              />
            </>
          ) : (
            <div>Hello</div>
          )}
        </Col>
      ))}
      <>{empty.length > 0 ? empty.map((i) => <Col key={i}></Col>) : null}</>
    </>
  );
};
const sliceRow = (images: ImageF[], byRow: number, count: number) => {
  return images.slice(byRow * (count - 1), byRow * count);
};
const GenerateRows = (images: ImageF[]) => {
  const byRow = getDiv(images);
  const rows = [];
  for (let i = 1; i <= Math.ceil(images.length / byRow); i++) {
    rows.push(i);
  }
  return (
    <>
      {rows.map((v) => (
        <Row key={v}>{GenerateCols(sliceRow(images, byRow, v), byRow)}</Row>
      ))}
    </>
  );
};
export const List = ({ items }: Props) => {
  return (
    <>
      {items.map(({ label, images }, i) => (
        <div key={i}>
          <h4 style={{ textAlign: "center" }}>{label}</h4>
          {GenerateRows(images)}
        </div>
      ))}
    </>
  );
};
