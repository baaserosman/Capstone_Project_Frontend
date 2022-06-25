import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home"
import Register from "../pages/Register";
import Login from "../pages/Login";
import Navbar from "../components/navbar/Navbar"
const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;