import { Route, Routes } from "react-router-dom";

import { Home, About, Contact } from "../components";

const appRoutes = [
  <Route path="/home" element={<Home />} />,
  <Route path="/contact" element={<Contact />} />,
  <Route path="/about" element={<About />} />,
];

export const AppRouter = () => {
  return (
    <Routes
      children={appRoutes.map((route, index) => (
        <Route key={index} {...route.props} />
      ))}
    />
  );
};
