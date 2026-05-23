import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Research from "./pages/Research.jsx";
import RE_Club from "./pages/RE_Club.jsx";
import Robotics_Club from "./pages/Robotics_Club.jsx";

function App() {
  return (
    <HashRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/research"
          element={<Research />}
        />

        <Route
          path="/re_club"
          element={<RE_Club />}
        />

        <Route
          path="/robotics_club"
          element={<Robotics_Club />}
        />

      </Routes>

    </HashRouter>
  );
}

export default App;