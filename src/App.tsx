import { BrowserRouter as Router } from "react-router-dom";
import { Nav } from "./components";
import { AppRouter, AuthRouter } from "./routes";
import { AppLayout, AuthLayout } from "./components/layout";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const isAuthenticated = localStorage.getItem("token") || true;

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
