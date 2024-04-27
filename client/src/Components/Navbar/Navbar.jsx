import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { jwtDecode } from "jwt-decode";
import MNNLR from "../../assets/mnnlr.png";
const Navbar = () => {
  const navigate = useNavigate();

  const storedData = localStorage.getItem("employeeToken");


  const handleLogout = async () => {
    try {

      localStorage.removeItem("employeeData");
      alert("You have been logged out");

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (storedData) {
      const parsedData = JSON.parse(storedData);

      const userToken = parsedData;

      const decodeToken = jwtDecode(userToken);
      const currentTime = new Date().getTime();

      if (decodeToken.exp * 1000 < currentTime) {
        handleLogout();
      }
    }
  }, []);

  return (
    <div className="w-full flex justify-evenly bg-purple-500 items-center h-[10vh]">
      <Link to="#">
        <img
          src={MNNLR}
          alt=""
          className="h-[60px] w-[60px] relative rounded-full border
              border-black shadow-sm"
        />
      </Link>
      <Link to="/">
        <p className="group font-bold text-white transition duration-300">
          HOME
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-600"></span>
        </p>
      </Link>
      <Link to="/employee">
        <p className="group font-bold text-white transition duration-300">
          EMPLOYEE SECTION
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-600"></span>
        </p>
      </Link>
      <Link to="/hrSection">
        <p className="group font-bold text-white transition duration-300">
          HR SECTION
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-600"></span>
        </p>
      </Link>
      <Link to="/about">
        <p className="group font-bold text-white transition duration-300">
          ABOUT US
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-600"></span>
        </p>
      </Link>
      {storedData ? (
  <button onClick={handleLogout}>Logout</button>
) : (
  <Link to="/login">
    <span className="group font-bold text-white transition duration-300">
      LOGIN
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-600"></span>
    </span>
  </Link>
)}

      <Link to="/search">
        <form className="w-[200px] relative">
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              className="w-full p-4 rounded-full bg-slate-800 text-white"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 ">
              <AiOutlineSearch />
            </button>
          </div>
        </form>
      </Link>
      <Link to="/register">
        <p className="group font-bold text-white transition duration-300">
          SIGNUP
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-600"></span>
        </p>
      </Link>
    </div>
  );
};

export default Navbar;
