import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRouter } from "./navigation/app-routes";
import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" />
      <AppRouter />;
    </QueryClientProvider>
  );
}

export default App;
