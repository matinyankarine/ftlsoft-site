import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppDetail from "./pages/AppDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app/:id" element={<AppDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
