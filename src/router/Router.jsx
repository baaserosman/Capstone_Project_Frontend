import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home"
import Navbar from "../components/navbar/Navbar"
const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </Router>
  );
};
export default AppRouter;