import { useFormik } from "formik";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SigIn = () => {
  // const apiUrl = "http://localhost:3000";
  const apiUrl = "http://localhost:8001";

  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(`${apiUrl}/api/v1/auth//login`, values);

        localStorage.setItem("employeeData", JSON.stringify(response?.data?.user._id));
        localStorage.setItem("employeeToken", JSON.stringify(response?.data?.token));
        navigate("/");

        alert(response.data.message);
      } catch (error) {
        console.log(error);
        alert(error?.response.data.message);
      }
    },
  });

  return (
    <>
      <div className="flex justify-center items-center flex-col w-full h-[100vh] bg-teal-500">
        <h1>Welcome Back</h1>
        <form
          className="flex flex-col justify-center items-center w-[50%] h-[60%] gap-y-[2rem] border"
          onSubmit={handleSubmit}
        >
          <span className="flex flex-col justify-ceter items-start gap-y-2 w-[50%]">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="w-[100%]"
              name="email"
              value={values.email}
              onChange={handleChange}
              required
            />
          </span>
          <span className="flex flex-col justify-ceter items-start gap-y-2 w-[50%]">
            <label htmlFor="password"> Password</label>
            <input
              type="password"
              className="w-[100%]"
              name="password"
              value={values.password}
              onChange={handleChange}
              required
            />
          </span>

          <button
            type="submit"
            className=" bg-white rounded-[1rem] w-[9rem] h-[2rem]"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SigIn;
