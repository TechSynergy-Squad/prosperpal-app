import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRouter } from "./navigation/app-routes";

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
      <AppRouter />;
    </QueryClientProvider>
  );
}

export default App;
