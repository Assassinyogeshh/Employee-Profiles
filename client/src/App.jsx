import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Components/Authorization/SignIn";
import EmployeeProfile from "./Components/EmployeeProfile/EmployeeProfile";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Components/About Us/AboutUs";
import Portfolio from "./Components/Portfolio/Portfolio";
import Home from "./Components/Home/Home";
import Register from "./Components/Authorization/Register";
import AllEmployeeDetails from "./Components/HR Section/AllEmployeeDetails";
import EmployeeDetails from "./Components/HR Section/EmployeeDetails";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<EmployeeProfile />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/employee" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path = '/hrSection' element={<AllEmployeeDetails/>}/>
          <Route path = '/getEmployee/:id' element={<EmployeeDetails/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
