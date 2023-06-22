import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import PageLayout from "../Layout";
import { AnyAction } from "@reduxjs/toolkit";
import { UsuarioF } from "../../types";
import { loadCache, saveCache } from "../../redux/features/base/base-slice";
import { getUsers } from "../../redux/features/user/thunks";
import { generateRandomColor } from "../../utils/generateColor";
import { Button } from "react-bootstrap";
import "./styles.css";
import ScrollToTopButton from "../../components/ScrollToTop/ScrollToTop";
interface Props {
  user: UsuarioF;
}

const FriendItem = ({ user }: Props) => {
  const color1 = generateRandomColor();
  const color2 = generateRandomColor();
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${color1}40, ${color2}40)`,
    width: "4rem",
    height: "4rem",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "38px",
  };

  return (
    <div
      className="col-12 col-md-6 col-lg-4"
      style={{
        display: "flex",
        gap: "2rem",
        alignItems: "center",
        marginBottom: "2rem",
      }}
    >
      <div style={gradientStyle}>
        <img
          src={user?.photoURL}
          alt={user.descricao}
          style={{ width: 70, height: 70, borderRadius: "50%" }}
        />
      </div>
      <div style={{ marginTop: "1rem" }}>
        <label
          style={{
            fontSize: "1.1rem",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          {user.displayName}
        </label>
        <p
          style={{
            fontSize: "0.9rem",
            color: "#666",
          }}
        >
          {user.descricao}
        </p>
      </div>
    </div>
  );
};

export const Amigos = () => {
  const {
    User: { users, loading },
    Auth: { beLoad, user },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [friendsToShow, setFriendsToShow] = React.useState(20);
  const bottomRef = React.useRef(null);


  const smoothScrollToBottom = () => {
    // @ts-ignore
    bottomRef.current.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
      bottom: 0,
    });
  };

  const smoothScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    dispatch(loadCache() as unknown as AnyAction);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (beLoad.length > 0) {
      dispatch(getUsers(beLoad) as unknown as AnyAction);
    } else if (user!.friends.length > users.length) {
      dispatch(getUsers(user!.friends) as unknown as AnyAction);
    }
  }, []);

  React.useEffect(() => {
    if (loading && users.length > 0)
      dispatch(saveCache({ users }) as unknown as AnyAction);
  }, [dispatch, loading, users]);

  // const mockedUsers: UsuarioF[] = Array.from({ length: 100 }, (_, i) => ({
  //   uid: i.toString(),
  //   displayName: `User ${i}`,
  //   photoURL: `https://github.com/user${i}.png`,
  //   descricao: "Lorem ipsum dolor sit amet consectetur",
  //   eventos: [],
  //   friends: [],
  //   email: `user${i}@gmail.com`,
  //   phoneNumber: `+55 11 9${i}0000000`,
  //   pontos: i,
  // }));

  const handleSeeMore = () => {
    setFriendsToShow(friendsToShow + 20);
    smoothScrollToBottom();
  };

  const handleClearFriendList = () => {
    smoothScrollToTop();

    setTimeout(() => {
      setFriendsToShow(20);
    }
      , 1000);
  }

  return (
    <PageLayout title="Amigos">
      <div style={{ width: "100%", margin: "0 auto" }}>
        <div
          className="row" // Adicionamos a classe "row" para envolver as colunas
          style={{
            marginBottom: "3rem",
          }}
        >
          
          {users.slice(0, friendsToShow)
          .filter((u) => {
            return user!.friends.includes(u.uid);
          })
          .map((user) => (
            <FriendItem key={user.uid} user={user} />
          ))}
          <div ref={bottomRef} />
          {friendsToShow < users.length && (
            <Button
              style={{
                position: "fixed",
                bottom: "50px",
                left: "50%",
                height: "50px",
                width: "120px",
                backgroundColor: "#E1AD3D",
                color: "#000",
                border: "#444",
                transform: "translateX(-50%)",
                transition: "background-color 0.3s",
                animation: "ping 1s infinite",
              }}
              onClick={handleSeeMore}
            >
              Ver mais
            </Button>
          )}

          <div
            style={{
              width: "100%",
            }}
            onClick={handleClearFriendList}
          >
            <ScrollToTopButton />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
