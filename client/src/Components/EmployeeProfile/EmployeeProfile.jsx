import { useEffect, useState } from "react";

const EmployeeProfile = () => {
  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    const fetchEmployeeData = () => {
      try {
        const storedData = localStorage.getItem("employeeData");
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          const data = parsedData.employeeData;
          setEmployeeData(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchEmployeeData();
  }, []);

  return (
    <>
      {employeeData ? (
        <div className="flex justify-center items-center w-full h-[90vh]">
          <div className="flex justify-center items-center w-full h-[90vh]">
            <div className="w-[90%] h-[100%] flex justify-start gap-6 items-start">
              <span className="flex flex-col w-[20%]">
                <h1>Profile Image</h1>
                <img
                  src={employeeData?.employeeImage}
                  className=" w-[100%]"
                  alt=""
                />
              </span>
              <div className="w-[50%] mt-10 flex flex-col gap-y-5">
                <span>
                  <p className=" text-slate-600">First Name:</p>
                  <p className=" font-[500]">{employeeData?.employeeName}</p>
                </span>
                <span>
                  <p className=" text-slate-600">Email Id:</p>
                  <p className=" font-[500]">{employeeData?.employeeEmail}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <span className="flex justify-center items-center w-full h-[100vh] text-[1.5rem] font-[500]">
          Welcome! Sign In To Get Your Profile Details
        </span>
      )}
    </>
  );
};

export default EmployeeProfile;
