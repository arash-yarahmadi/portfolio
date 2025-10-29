import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthenticationPage from "./pages/Authentication";
import LandingPage from "./pages/Landing";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/authenticate" element={<AuthenticationPage />} />
      </Routes>
    </BrowserRouter>
  );
}
