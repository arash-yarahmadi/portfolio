import { BrowserRouter, Route, Routes } from "react-router-dom";
//import AuthenticationPage from "./pages/Authentication";
//import LandingPage from "./pages/Landing";
import Portfolio from "./pages/Portfolio";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Portfolio />} /> 
      </Routes>
    </BrowserRouter>
  );
}
