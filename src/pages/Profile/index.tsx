import { ProfilePicture } from "../../components/ProfilePicture";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Profile Page</h1>
      <ProfilePicture />
      <button onClick={() => navigate("/")}>login</button>
    </>
  );
};
