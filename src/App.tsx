import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./Pages/Landing/LandingPage";
import { MapPage } from "./Pages/Mapa/MapPage";
import { Data } from "./Pages/InterpreterData/Data";
import { Layout } from "./Components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<Layout />}>
        <Route path="/map" element={<MapPage />} />
        <Route path="/data" element={<Data />} />
      </Route>
    </Routes>
  );
}

export default App;
