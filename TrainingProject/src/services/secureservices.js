import axios from 'axios';


export default class SecureService {
    constructor(){
        this.url = 'http://localhost:7013';
    }

   
    createUser(user){
        console.log("sercureserv..................................................");
        console.log(JSON.stringify(user));
        console.log("sercureserv..................................................");
        let response = axios.post(`${this.url}/api/register`, user, {
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return response;
    }



    loginUser(email,password){

        let user = {"email":email, "password":password};

        let response = axios.post(`${this.url}/api/login`, user, {
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return response;
    }

    // getdepartments(token){
    //     let response = axios.get(`${this.url}/api/auth/departments`, {
    //         headers:{
    //             "Authorization": `Bearer ${token}`
    //         }
    //     });
    //     return response;
    // }
     
}
