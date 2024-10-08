import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
