import axios from "axios";
import React , { useState } from "react";
import { useHistory } from "react-router-dom";

const AddUsers = () => {
  let history = useHistory();
    const [user , setUser] = useState({
        name: "",
        username: "",
        email: "" ,
        phone:"",
        website: ""
    });
    const { name , username , email , phone , website } = user;

    const onInputChange = e =>{
     setUser({...user, [e.target.name] : e.target.value})
    }
    const onSubmit = async e => {
      e.preventDefault();
      await axios.post("http://localhost:3003/users" , user);
      history.push("/");
    }
  return (
    <div>
      <h4 style={{textAlign:"center"}}>Add A Users </h4>
      <div className="conatiner ">
          <div className="row">
              <div className="col-md-6 ">
              <form className="form-alignment" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Name"
            name="name"
            value={ name }
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your UserName"
            name="username"
            value={ username }
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Enter Your E-mail Address"
            name="email"
            value={ email }
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="Enter Your Mobile Number"
            name="phone"
            value={ phone }
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Website Name"
            name="website"
            value={ website }
            onChange={e => onInputChange(e)}
          />
        </div>
        <button className="btn btn-primary">Add User</button>
      </form>

              </div>

          </div>

      </div>
    </div>
  );
};

export default AddUsers;
