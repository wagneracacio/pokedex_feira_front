import { List } from "../../components/List";
import teste from "../../assets/images/prof/teste.png";
import { PageLayout } from "../Layout";

interface ImageF {
  id: string;
  name: string;
  image: string;
  found: boolean;
}

export const Galeria = () => {
  return (
    <PageLayout title="Galeria">
      <List<ImageF>
        renderImage={({ id, image, found, name }) => (
          <>
            <img
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "100%",
                maxWidth: "80px",
                filter: !found ? "brightness(0)" : undefined,
              }}
              src={image}
              alt={id}
            />
            <h6
              style={{
                textAlign: "center",
              }}
            >
              {name}
            </h6>
          </>
        )}
        items={[
          {
            label: "Profissoes",
            images: [
              {
                id: "1",
                name: "charmander de bone bla bla bla",
                image: teste,
                found: true,
              },
              {
                id: "2",
                name: "charmander",
                image: teste,
                found: false,
              },
              {
                id: "3",
                name: "charmander",
                image: teste,
                found: true,
              },
              {
                id: "4",
                name: "charmander",
                image: teste,
                found: false,
              },
              {
                id: "5",
                name: "charmander",
                image: teste,
                found: true,
              },
              {
                id: "6",
                name: "charmander",
                image: teste,
                found: false,
              },
              {
                id: "7",
                name: "charmander",
                image: teste,
                found: false,
              },
              {
                id: "8",
                name: "charmander",
                image: teste,
                found: false,
              },
              {
                id: "9",
                name: "charmander",
                image: teste,
                found: true,
              },
              {
                id: "10",
                name: "charmander",
                image: teste,
                found: true,
              },
            ],
          },
        ]}
      />
    </PageLayout>
  );
};
