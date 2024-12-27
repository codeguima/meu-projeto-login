
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/index";
import { Feed } from "./pages/feed/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
}

export default App;
