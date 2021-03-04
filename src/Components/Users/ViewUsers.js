import React , {useState , useEffect} from 'react';
import { Link , useParams} from "react-router-dom";
import axios from "axios";



const ViewUsers = () =>{
    const [user , setUser] = useState({
        name: "",
        username: "",
        email: "" ,
        phone:"",
        website: ""
    });
    const {id} = useParams();
    useEffect(() =>{
        loadUser();
    }, [])

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
       setUser(result.data);
    }


    return (
        <div className="container">
            
            <h4 className="text-center">User Id: {id}</h4>
            <hr />
            <ul className="list-groupvw-50">
                <li className="list-group-item"> Name : {user.name}</li> 
                <li className="list-group-item"> UserName : {user.username}</li> 
                <li className="list-group-item"> Email : {user.email}</li> 
                <li className="list-group-item"> Phone : {user.phone}</li> 
                <li className="list-group-item"> Website : {user.website}</li> 
            </ul>    
            <Link className="btn btn-primary ml-5" to="/">Back to Home</Link>     
            
        </div>
        
    );
}

export default ViewUsers;