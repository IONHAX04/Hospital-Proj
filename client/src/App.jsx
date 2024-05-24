import Crud from "./CRUD"
import LandingPage from "./components/LandingPage/LandingPage"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Prescription from "./components/Prescription/Prescription";
import Register from "./components/LoginPage/Register";
import Login from "./components/LoginPage/Login";
import Diet from "./components/DietPlanning/Diet";
import Health from "./components/HealthRecord/Health";
import Recommendation from "./components/Recommendation/Recommendation.jsx";
import Doctors from "./components/Appointments/Doctor";
import Articles from "./components/Articles/Articles.jsx";
import Goals from "./components/DietPlanning/Goals/Goals.jsx";
import Nutrition from "./components/DietPlanning/Nutrtion/Nutrition.jsx";
import Home from "./components/HomePage/Home.jsx";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/prescription" element={<Prescription />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/diet" element={<Diet />} />
          <Route path="/health" element={<Health />} />
          <Route path="/prescription" element={<Prescription />} />
          <Route path="/recommendation" element={<Recommendation />} />
          <Route path="/articles" element={<Articles />} />

          <Route path="/goals" element={<Goals />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/home" element={<Home />} />


          <Route path="/doctors" element={<Doctors />} />
        </Routes>
      </Router>
    </>
  )
}


export default App
