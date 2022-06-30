import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/Home"
import Register from "../pages/Register";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<PrivateRouter />}>
          <Route path="" element={<Profile />} />
        </Route>

        <Route path="/newblog" element={<PrivateRouter />}>
          <Route path="" element={<NewBlog />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default AppRouter;