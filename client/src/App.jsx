import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/NavBar";
import MediaPage from "./components/MediaPage";
import SourcesPage from "./components/SourcesPage";

// Citation for the following functions:
// Date: 02/26/2025
// Based on: CS 340 Starter Code
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/media" end element={<MediaPage />} />
        <Route path="/sources" end element={<SourcesPage />} />
      </Routes>
    </>
  );
}

export default App;
