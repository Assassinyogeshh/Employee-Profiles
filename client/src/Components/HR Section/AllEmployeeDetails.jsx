import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllEmployeeDetails = () => {
    const [employees, setEmployees] = useState(null);
    // const apiUrl = 'http://localhost:3000';
    const apiUrl = "http://localhost:8001";

    useEffect(() => {
        const getAllEmployeeDetails = async () => { 
            try {
                const response = await axios.get(`${apiUrl}/api/v1/auth/getAllEmp`);
                setEmployees(response.data.emp);
                console.log(response.data.emp);
            } catch (error) {
                console.log(error);
            }
        }
        getAllEmployeeDetails();
    }, [employees]);

    return (
        <>
            <div className='flex pt-[5rem] justify-start bg-slate-700 items-center flex-col w-full h-[90vh]'>
                <div className='flex justify-start items-start w-[50%] h-[100%] flex-col gap-y-4 border overflow-y-auto'>
                    <span className='w-full  bg-blue-700 p-[1rem]'>
                        <span className='flex justify-between items-center w-[100%] text-white'>
                            <p>Index Number</p>
                            <p>Employee Name</p>
                            <p>Employee Email</p>
                        </span>
                    </span>
                    {employees ? (employees.map((item, index) => (
                        <Link to={`/getEmployee/${item._id}`} key={index} className='w-full  border p-[1rem]'>
                            <span className='flex justify-between  items-center w-full text-white'>
                                <p>{index + 1}</p> 
                                <p>{item.name}</p>
                                <p>{item.email}</p>
                            </span>
                        </Link>
                    ))) : (<span className=' flexc justify-center items-center w-full h-full text-white font-[500]'>Loading...</span>)}
                </div>
            </div>
        </>
    )
}

export default AllEmployeeDetails;
