import React, { useEffect, useState } from 'react'
import Man from '../../assets/man.png'
import axios from "axios";
const EmployeeDetails = () => {
  const [employee, setEmployee] = useState(null);

  const getEmployeeId = localStorage.getItem('employeeData');

  const parsedData = JSON.parse(getEmployeeId);
  const apiUrl = "http://localhost:8001";

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        if (!parsedData) {
          console.log("Employee ID not found in localStorage");
          return;
        }

        const id = parsedData;

        const response = await axios.get(`${apiUrl}/api/v1/auth/getOneEmp/${id}`);

        setEmployee(response?.data.empdetails);
      } catch (error) {
        console.log(error);
      }
    };
    getUserProfile();
  }, [parsedData, apiUrl]);

  return (
    <div>
      {employee ? (
        <>
          <section>
            <div className="flex justify-around py-[30px] font-semibold ">
              <div>EMPLOYEE INFO</div>
              <div>EMP ID: {Math.floor(Math.random() * 100000)}</div>
            </div>

            <div className="flex justify-center font-semibold">
              <ul className="px-[150px] py-[40px]">
                <li>NAME: {employee?.name}</li>
                <li>PASSWORD: [ {employee?.password} ]</li>
                <li>LOGIN TIME: {employee.updatedAt}</li>
                <li>LOGOUT TIME: {employee.updatedAt}</li>
              </ul>

              <ul className="px-[150px] py-[40px]">
                <li> ANAND</li>
                <li> ANAND</li>
                <li> 12/07/2024 18:30</li>
                <li> 12/07/2024 20:30</li>
              </ul>

              <img src={Man} className="w-[100px] h-[100px] " alt="Employee" />
            </div>
          </section>

          <hr className="my-12 h-[5px] border-t-0 bg-black opacity-100 " />
          <section>
            <div className="flex justify-between py-[10px] font-semibold px-[200px]">
              <div>PERSONAL DETAILS</div>
            </div>
            <div className="flex justify-center font-semibold">
              <ul className="px-[100px] py-[40px]">
                <li>JOINING DATE:  </li>
                <li>CURRENT CTC: </li>
                <li>JOINING DATE   </li>
                <li>DATE OF BIRTH </li>
              </ul>
              <ul className="px-[250px] py-[40px]">
                <li>{employee.joingDate}</li>
                <li>{employee.curctc.toLocaleString()}</li>
                <li>{employee.joingDate}</li>
                <li>{employee.dateOfbirth}</li>
              </ul>
              <div>
                <div>
                  <div>PAN CARD</div>
                  <img src={employee.addarImage} alt="PAN Card" />
                </div>
                <div>AADHAR CARD</div>
                <img src={employee.addarImage} alt="Aadhar Card" />
              </div>
            </div>
          </section>
        </>
      ) : (
        <p className='flex justify-center items-center w-full h-[100vh] text-[2rem] font-[500]'>Loading...</p>
      )}
    </div>
  );
}

export default EmployeeDetails
