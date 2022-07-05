import React from 'react';
import { useState } from "react";
import {Button,Form,FormGroup,Label,Input,Span} from 'reactstrap';

import { Link,useNavigate } from 'react-router-dom';
import SecureService from "./../services/secureservice";

const serv = new SecureService();


const LoginFormComponent = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [entry, setEntry] = useState([]);
    const [message, setMessage] = useState('');

    const [credential, setCredential] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();

    const submitForm = (e)=>{
        //console.log("Inside submitform");
        e.preventDefault();
        const record = {email:email, password:password, id:new Date().getTime().toString()};
        setEntry([...entry,record]);

        console.log(entry);
    }

    const authenticateUser=()=>{ 
        serv.loginUser(email,password).then((response)=>{
            setMessage(response.data.message);
            console.log(response.data.message);
            // if(response.status === 200){
            //     props.history.push("/dashboard");
            // }
            if(response.status === 401){
                console.log(response.data.message);
            }
            navigate("/dashboard");
            // store token in sessionStorage
            sessionStorage.setItem('token', response.data.token);    
        }).catch((error)=>{
           console.log(JSON.stringify(error.message));
            setMessage("Invalid User.....!");
        });
      };

    //   const handleOnChange = (evt) =>{
    //         if(evt.target.name === "email"){
    //             setCredential({...credential , email:evt.target.value});
    //         }
    //         if(evt.target.name === "password"){
    //             setCredential({...credential , password:evt.target.value});
    //         }
    //   }

    return (
        <>

            {/* <pre>{JSON.stringify(entry,undefined,2)}</pre> */}
            <Form className="login-form" action="" onSubmit={submitForm}> 
            <h1>
                <span className="font-weight-bold header" style={{ color:'blue'}}>Login</span>
            </h1>


            <FormGroup className= "mt-4">
            <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}></Input>
            </FormGroup>
            

            <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}></Input>
            </FormGroup>

            <div className="text-center border border-light p-1 mb-1">
            <button type="submit" className="btn btn-primary"
           
           onClick={authenticateUser}
           
            >Log in</button>

            </div>
            {/* <div className="text-center border border-light p-1 mb-1">
            <button type="button" class="btn btn-primary">New User Registration</button>
            </div> */}
            <div className="text-center">
            <Link to ="/signup">Register A new User</Link>
            <span className="p-2">|</span>
            <a href="/forgot-password">Forgot Password</a>
            </div>
        </Form>
        <div>
            {
                message
            }

            {/* {
                entry.map((currentEle)=>{
                    return(
                        <div key={currentEle.id}>
                            <p>{currentEle.email}</p>
                            <p>{currentEle.password}</p>
                        </div>
                        
                    )

                })
            } */}
        </div>
        </>

    
      

    );
};

export default LoginFormComponent;