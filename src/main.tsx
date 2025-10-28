import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./QueryClient.ts";
import { BrowserRouter } from "react-router-dom";
import { APIProvider } from "@vis.gl/react-google-maps";

const APIGOOGLE = import.meta.env.VITE_BASE_GOOGLE_CLOUD_KEY;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <APIProvider apiKey={APIGOOGLE}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </APIProvider>
  </StrictMode>
);
