import axios from "axios";
import React, { useState } from "react";
import "./Form.css";
export default function Form() {
  const [data, setData] = useState({});

  const handlechange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3001`, data).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div className="container">
      <img src="login.svg" alt="" srcset="" />
      <form onSubmit={handlesubmit}>
        <label htmlFor="Employees Name">Employees Name</label>
        <input
          type="text"
          name="employees_name"
          onChange={handlechange}
          placeholder="Enter Employees Name"
        />
        <label htmlFor="Departments">Departments</label>
        <textarea
          name="departments"
          rows="10"
          cols="50"
          onChange={handlechange}
          placeholder="Enter Departments"
        ></textarea>
        <label htmlFor="Salary">Salary</label>
        <input
          type="text"
          name="salary"
          onChange={handlechange}
          placeholder="Enter Salary"
        />

        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
