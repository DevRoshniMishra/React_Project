import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    console.log("Axios Call");
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async id =>{
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              {/* <th scope="col">Address</th> */}
              <th scope="col">Action</th>
            </tr>
          </thead> 
          <tbody>
              {users.map((users , index) =>(
                  <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{users.name}</td>
                      <td>{users.username}</td>
                      <td>{users.email}</td>
                      {/* <th>{users.address}</th>
                      <td>{users.address.street}</td>
                      <td>{users.address.suite}</td>
                      <td>{users.address.city}</td>
                      <td>{users.address.zipcode}</td> */}
                      <td>
                          <Link className="btn btn-primary mr-2" to={`/viewusers/${users.id}`}>View</Link>
                         <Link className="btn btn-outline-primary mr-2" to={`/editusers/${users.id}`} >Edit</Link>
                          <Link className="btn btn-outline-danger mr-2" onClick={() => deleteUser(users.id)}>Delete</Link>
                      </td>
                  </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
