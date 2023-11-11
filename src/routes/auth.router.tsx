import { Route, Routes } from "react-router-dom";
import { Login } from "../components";

export const AuthRouter = () => {
  const authRoutes = [<Route path="/login" element={<Login />} />];
  return (
    <Routes
      children={authRoutes.map((route, index) => (
        <Route key={`auth-${index}`} {...route.props} />
      ))}
    />
  );
};
