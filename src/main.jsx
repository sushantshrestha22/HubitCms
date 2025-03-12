import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import "./index.css";
import "./App.css";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {/* <TenureProvider> */}
        <Toaster position="top-center" reverseOrder={false} />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <App />
        {/* </TenureProvider> */}
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
