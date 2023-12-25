import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Axios.css'

const Axios = () => {

    const [data,setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            setData(response.data);
        }
        fetchData();
    },[]);  

    if(data===null) 
    return (<p>Loading...</p>)

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Username</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
            </thead>
            <tbody>
            {
                data.map((user) => (
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    </div>
  )
}

export default Axios