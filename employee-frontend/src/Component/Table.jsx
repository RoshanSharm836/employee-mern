import React, { useState } from "react";
import "./Table.css";
import axios from "axios";
import { useEffect } from "react";

function Table() {
  const [data, setData] = useState([]); // all data
  const [obj, setObj] = useState({}); // for update
  const [active, setActive] = useState(false); // toggle edit box
  const [newid, setNewId] = useState(""); // for edit id

  useEffect(() => {
    handlesubmit();
  }, []);

  const handlechange = (e) => {
    setObj({
      ...obj,
      [e.target.name]: e.target.value,
    });
  };

  //get data
  const handlesubmit = () => {
    axios.get(`http://localhost:3001`).then((res) => {
      setData(res.data);
    });
  };

  // edit data

  const handle_edit = () => {
    console.log(obj, newid);
    axios.put(`http://localhost:3001/${newid}`, obj).then((res) => {
      handlesubmit();
      setActive(!active);
    });
  };

  //delete data

  const handle_delete = (id) => {
    axios.delete(`http://localhost:3001/${id}`);
    const newListItems = data.filter((item) => item._id !== id);
    setData(newListItems);
  };

  return (
    <>
      <h1 className="heading">Employees Data </h1>
      <table className="table">
        <thead>
          <tr>
            <th>Employees Name</th>
            <th>Departments</th>
            <th>Salary</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((el, i) => {
            return (
              <tr key={i}>
                <td>{el.employees_name}</td>
                <td>{el.departments}</td>
                <td>{el.salary}</td>
                <th
                  className="pointer"
                  onClick={() => {
                    setNewId(el._id);
                    setActive(!active);
                  }}
                >
                  Edit
                </th>
                <th
                  className="pointer"
                  onClick={() => {
                    handle_delete(el._id);
                  }}
                >
                  Delete
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
      {active ? (
        <div className="box">
          <input
            type="text"
            name="employees_name"
            onChange={handlechange}
            placeholder="Enter Employees Name"
          />

          <input
            name="departments"
            onChange={handlechange}
            placeholder="Enter Departments"
          />

          <input
            type="text"
            name="salary"
            onChange={handlechange}
            placeholder="Enter Salary"
          />
          <button onClick={handle_edit}>Edit</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Table;
