import profile from "../../profile.jpg";
import { Image } from "react-bootstrap";
export const ProfilePicture = () => {
  return (
    <div>
      <Image
        style={{ maxWidth: "300px", maxHeight: "300px" }}
        roundedCircle
        src={profile}
      />
    </div>
  );
};
