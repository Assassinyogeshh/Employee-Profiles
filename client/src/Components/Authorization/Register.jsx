import React from "react";
import { useFormik } from "formik";
import { Password } from "primereact/password";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "primereact/resources/themes/saga-blue/theme.css"; // Theme CSS
import "primereact/resources/primereact.min.css"; // PrimeReact CSS
import "primeicons/primeicons.css"; // PrimeIcons CSS

const Register = () => {
  // const apiUrl = "http://localhost:3000";
  const apiUrl = "http://localhost:8001";
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    joingDate: "",
    joingTime: "",
    curctc: "",
    dateOfbirth: "",
    panImage: null,
    addarImage: null,
    profileImage: null,
  };

  const handleImageChange = (e, fieldName) => {
    const file = e.target.files[0];
    setFieldValue(fieldName, file);
  };

  const { handleSubmit, handleChange, setFieldValue, values } = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        for (let key in values) {
          formData.append(key, values[key]);
        }

        // console.log(values);
        const response = await axios.post(`${apiUrl}/api/v1/auth/register`, formData);
        localStorage.setItem("employeeData", JSON.stringify(response?.data?.user._id));
        navigate("/");
        alert(response.data.message);
      } catch (error) {
        console.log(error);
        alert(error?.response.data.message || "Error in registration");
      }
    },
  });

  return (
    <>
      <div className="flex justify-center items-center flex-col w-full h-[auto] bg-teal-500">
        <h1 className="mt-[4rem] text-[2rem] font-[500]">Create Your Account</h1>
        <form
          className="flex flex-col justify-center items-center w-[50%] h-[90%] gap-y-[2rem] border mt-[1rem]"
          onSubmit={handleSubmit}
        >
          <span className="flex flex-col justify-ceter items-start gap-y-2 w-[50%]">
            <label htmlFor="name">UserName</label>
            <input
              type="text"
              className="w-[100%]"
              name="name"
              value={values.name}
              onChange={handleChange}
              required
            />
          </span>
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
            <label htmlFor="password">Password</label>
            <Password
              weakLabel="weak"
              mediumLabel="medium"
              strongLabel="strong"
              className="w-[100%] "
              name="password"
              value={values.password}
              onChange={handleChange}
              required
            />
          </span>
          <span className="flex flex-col justify-ceter items-start gap-y-2 w-[50%]">
            <label htmlFor="joingDate">Joining Date</label>
            <input
              type="date"
              className="w-[100%]"
              name="joingDate"
              value={values.joingDate}
              onChange={handleChange}
              required
            />
          </span>
          <span className="flex flex-col justify-ceter items-start gap-y-2 w-[50%]">
            <label htmlFor="joingTime">Joining Time</label>
            <input
              type="time"
              className="w-[100%]"
              name="joingTime"
              value={values.joingTime}
              onChange={handleChange}
              required
            />
          </span>
          <span className="flex flex-col justify-ceter items-start gap-y-2 w-[50%]">
            <label htmlFor="curctc">Current CTC</label>
            <input
              type="text"
              className="w-[100%]"
              name="curctc"
              value={values.curctc}
              onChange={handleChange}
              required
            />
          </span>
          <span className="flex flex-col justify-ceter items-start gap-y-2 w-[50%]">
            <label htmlFor="dateOfbirth">Date of Birth</label>
            <input
              type="date"
              className="w-[100%]"
              name="dateOfbirth"
              value={values.dateOfbirth}
              onChange={handleChange}
              required
            />
          </span>
          <span className="flex flex-col justify-ceter items-start gap-y-2 w-[50%]">
            <label htmlFor="profileImage">Profile Image</label>
            <input
              type="file"
              name="profileImage"
              accept="image/*"
              onChange={(e) => handleImageChange(e, "profileImage")}
            />
          </span>
          <span className="flex flex-col justify-ceter items-start gap-y-2 w-[50%]">
            <label htmlFor="panImage">Pan Card Image</label>
            <input
              type="file"
              name="panImage"
              accept="image/*"
              onChange={(e) => handleImageChange(e, "panImage")}
            />
          </span>
          <span className="flex flex-col justify-ceter items-start gap-y-2 w-[50%]">
            <label htmlFor="addarImage">Adhar Card Image</label>
            <input
              type="file"
              name="addarImage"
              accept="image/*"
              onChange={(e) => handleImageChange(e, "addarImage")}
            />
          </span>
          <button type="submit" className="bg-white rounded-[1rem] w-[9rem] h-[2rem]">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
