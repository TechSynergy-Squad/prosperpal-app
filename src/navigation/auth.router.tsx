import { Route, Routes } from "react-router-dom";
import { LoginPage, Landing } from "../components";

export const AuthRouter = () => {
  const authRoutes = [
    <Route path="/" element={<Landing />} />,
    <Route path="/login" element={<LoginPage />} />,
  ];
  return (
    <Routes
      children={authRoutes.map((route, index) => (
        <Route key={`auth-${index}`} {...route.props} />
      ))}
    />
  );
};
