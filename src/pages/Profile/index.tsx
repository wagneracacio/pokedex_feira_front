import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Profile Page</h1>
      <button onClick={() => navigate("/")}>login</button>
    </>
  );
};
