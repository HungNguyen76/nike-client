import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import LazyLoad from "@comp/LazyLoading/LazyLoad";

function App() {
  return (
    <>
      <Navbar />

      {/* HomePage */}
      <Routes>
        <Route
          path="/"
          element={LazyLoad(() => import("@/pages/Home/Home"))()}
        />

        <Route
          path="/login"
          element={LazyLoad(() => import("@/pages/Login/Login"))()}
        />
        <Route
          path="/register"
          element={LazyLoad(() => import("@/pages/Register/Register"))()}
        />
      </Routes>
    </>
  );
}

export default App;
