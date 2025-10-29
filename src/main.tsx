import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@saasbase-io/elements/dist/styles.css";

import App from "./App.tsx";
import { initSdk, type EnvConfig } from "@saasbase-io/elements";

// Pull from consuming app's env
const envConfig: EnvConfig = {
  apiUrl: import.meta.env.VITE_SB_LOGINFLOW_API_URL,
  apiKey: import.meta.env.VITE_SB_LOGINFLOW_API_KEY,
  clientId: import.meta.env.VITE_SB_LOGINFLOW_CLIENT_ID,
  clientSecret: import.meta.env.VITE_SB_LOGINFLOW_CLIENT_SECRET,
  timeout: Number(import.meta.env.VITE_SB_LOGINFLOW_TIMEOUT ?? 30000),
  locale: import.meta.env.VITE_SB_LOGINFLOW_LOCALE ?? "en-US",
};

// ✅ Must be called before <SbReactProvider>
initSdk(envConfig);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
