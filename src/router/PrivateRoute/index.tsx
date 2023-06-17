import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useNavigate } from "react-router-dom";
import { ReactNode, useEffect } from "react";
import Spinner from "../../components/Spinner";
import { refreshLogin } from "../../redux/features/auth/auth-slice";
import { AnyAction } from "@reduxjs/toolkit";

interface Props {
  children: ReactNode;
}
export const PrivateRoute = ({ children }: Props) => {
  const { user, loading } = useAppSelector((state) => state.Auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!loading && !user) navigate("/");
    if (loading) dispatch(refreshLogin() as unknown as AnyAction);
  }, [loading]);
  return user ? (
    <>{children}</>
  ) : (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Spinner size="lg" />
    </div>
  );
};
