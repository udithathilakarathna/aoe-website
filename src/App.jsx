import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Research from "./pages/Research.jsx";

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

      </Routes>

    </HashRouter>
  );
}

export default App;