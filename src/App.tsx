import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HomePage } from "./pages";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Layout>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
