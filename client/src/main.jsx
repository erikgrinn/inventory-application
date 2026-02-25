import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./styles/index.css";
import MediaTypes from "./components/MediaTypes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<MediaTypes />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
