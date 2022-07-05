import React from 'react';
import "./signup.css";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Span } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import SecureService from "./../services/secureservice";

const serv = new SecureService();



const SignUpComponent = () => {

    const [userRegistration, setUserRegistration] = useState({
        username: "",
        email: "",
        address: "",
        city: "",
        state: "",
        mobile: "",
        password: ""
    });

    const [records, setRecords] = useState([]);
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name + value);
        setUserRegistration({ ...userRegistration, [name]: value });

    }

    const submitForm = (e) => {
        e.preventDefault();
        const newRecord = { ...userRegistration, id: new Date().getTime().toString() };
        // alert(records);
        setRecords([...records, newRecord]);
        //console.log(records);
        console.log(JSON.stringify(records));
    }

    // const registerNewUser=()=>{ 
    //     serv.createUser(user).then((response)=>{
    //         setMessage(response.data.message);
    //     }).catch((error)=>{
    //         setMessage(error);
    //     });
    //   };

    const registerNewUser=()=>{ 
      let user = {
            customername:userRegistration.username,
            address:userRegistration.address,
            state: userRegistration.state,
            city : userRegistration.city,
            primarycontactnumber: userRegistration.mobile,
            roleid: 5,
            email: userRegistration.email,
            userpassword: userRegistration.password
        }
        serv.createUser(user).then((response)=>{
            setMessage(response.data.message);
            console.log(response.data.message);
            // if(response.status === 200){
            //     props.history.push("/dashboard");
            // }
            if(response.status === 401){
                console.log(response.data.message);
            }
            navigate("/");
            // store token in sessionStorage
            sessionStorage.setItem('token', response.data.token);    
        }).catch((error)=>{
           console.log(JSON.stringify(error.message));
            setMessage("Invalid User..!");
        });
      };
     

    return (
        <>
            <Form className="login-form" action="" onSubmit={submitForm}>
                <FormGroup>
                    <Label htmlFor="username">Full Name: </Label>
                    <Input type="text" autoComplete='off'
                        value={userRegistration.username}
                        onChange={handleInput}
                        name="username" id="username" placeholder="Your Name"></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email: </Label>
                    <Input type="email" autoComplete='off'
                        value={userRegistration.email}
                        onChange={handleInput}
                        name="email" id="email" placeholder="Your Email"></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="address">Address: </Label>
                    <Input type="text" autoComplete='off'
                        value={userRegistration.address}
                        onChange={handleInput}
                        name="address" id="address" placeholder=" Your Address"></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="city">City: </Label>
                    <Input type="text" autoComplete='off'
                        value={userRegistration.city}
                        onChange={handleInput}
                        name="city" id="city" placeholder="Your City"></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="state">State:</Label>
                    <Input type="text" autoComplete='off'
                        value={userRegistration.state}
                        onChange={handleInput}
                        name="state" id="state" placeholder="Your State"></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="mobile">Mobile Number: </Label>
                    <Input type="text" autoComplete='off'
                        value={userRegistration.mobile}
                        onChange={handleInput}
                        name="mobile" id="mobile" placeholder=" Your Mobile No"></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password: </Label>
                    <Input type="password" autoComplete='off'
                        value={userRegistration.password}
                        onChange={handleInput}
                        name="password" id="password" placeholder="password"></Input>
                </FormGroup>
                <div className="text-center border border-light p-1 mb-1">
                    <button type="submit" className="btn btn-success"
                        onClick={ 
                            registerNewUser
                        }
                        // onClick={registerNewUser}
                    >Register</button>
                </div>
            </Form>
            <div>
                {
                    records.map((currentEle) => {
                        return (
                            <div key={currentEle.id}>
                                <p>{currentEle.username}</p>
                                <p>{currentEle.email}</p>
                                <p>{currentEle.address}</p>
                                <p>{currentEle.city}</p>
                                <p>{currentEle.state}</p>
                                <p>{currentEle.mobile}</p>
                                <p>{currentEle.password}</p>
                            </div>

                        )

                    })
                }
            </div>
        </>





    );
};

export default SignUpComponent;