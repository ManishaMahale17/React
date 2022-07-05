import { useNavigate } from "react-router-dom";
import React from "react";
import Home  from "./home";
import Dashboard from "./dashboard"


const Status = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="py-4">
                <h1>Check Status</h1>



{/* <button style={{display: 'flex', flexDirection: 'column', alignItems:'center'}} onClick={()=> {
    navigate('/')
  }}>Home</button> */}


<button type="submit" className="btn btn-primary"
                         onClick={()=> {
                            navigate('/')
                          }}>Home</button>


{/* <button type="submit" className="btn btn-primary"
        onClick={()=> { const Logout = () =>{

            localStorage.removeItem("Customer Id");
    
            localStorage.removeItem("Role Id");
    
            navigate('/')}}}>LogOut</button> */}


                </div>
            </div>
        

        
    
        

    )
};
export default Status;