import { login, refreshLogin } from "../../redux/features/auth/auth-slice";
import { useAppSelector } from "../../redux/hook";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { AnyAction } from "redux";
import { Card } from "react-bootstrap";
import { Footer } from "../../components/Footer";

export const Login = () => {
  const navigate = useNavigate();
  const { user, loading } = useAppSelector((state) => state.Auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshLogin() as unknown as AnyAction);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (user) navigate("/profile");
  }, [loading, navigate, user]);
  return (
    <>
      <Card
        style={{
          height: "100vh",
          background: "none",
          border: "none",
        }}
      >
        <h5
          className="mt-3 mb-4"
          style={{
            textAlign: "center",
            width: "100%",
          }}
        >
          Login Page
        </h5>
        <Card.Body>
          <div style={{ height: "100%", position: "relative", display: 'flex' }}>
            <GoogleButton
              style={{
                margin: "auto",
                marginTop: "auto",
                position: "relative",
              }}
              onClick={() => dispatch(login() as unknown as AnyAction)}
            />
          </div>
        </Card.Body>
        <Footer />
      </Card>
    </>
  );
};
