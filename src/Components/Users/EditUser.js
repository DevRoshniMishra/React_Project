import axios from "axios";
import React , { useState , useEffect } from "react";
import { useHistory  , useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const {id} = useParams();

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

    useEffect ( () =>{
        loadUser()
    }, []);

    const onSubmit = async e => {
      e.preventDefault();
      await axios.put(`http://localhost:3003/users/${id}`, user);
      history.push("/");
    }
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
       setUser(result.data);
    }
  return (
    <div>
      <h4 style={{textAlign:"center"}}>Add User </h4>
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
        <button className="btn btn-warning btn-block">Update User</button>
      </form>

              </div>

          </div>

      </div>
    </div>
  );
};

export default EditUser;
