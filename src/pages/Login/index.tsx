import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Login Page</h1>
      <button onClick={() => navigate("/profile")}>profile</button>
    </>
  );
};
