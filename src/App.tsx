import { BrowserRouter as Router } from "react-router-dom";
import { Nav } from "./components";
import { AppRouter, AuthRouter } from "./routes";
import { AppLayout, AuthLayout } from "./components/layout";
import { Toaster } from "react-hot-toast";

function App() {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <Router>
      <Toaster position="top-center" />
      {isAuthenticated ? (
        <>
          <Nav />
          <AppLayout children={<AppRouter />} />,
        </>
      ) : (
        <AuthLayout children={<AuthRouter />} />
      )}
    </Router>
  );
}

export default App;
