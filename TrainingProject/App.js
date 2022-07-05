import logo from './logo.svg';
import './App.css';
import LoginFormComponent from "./component/loginform"
import {BrowserRouter as Router} from 'react-router-dom';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SignUpComponent from "./component/signup";
import { Route, Routes } from "react-router";
import DashboardComponent from "./component/dashboard";

function App() {
  const PageNotFound = () =>(
    <div>
    404!
    </div>
  )
  return (
    <Router>
      <Routes>
        <Route exact path ="/" element={<LoginFormComponent/>}></Route>
        <Route exact path ="/signup" element={<SignUpComponent/>}></Route>
        <Route exact path ="/dashboard" element={<DashboardComponent/>}></Route>
        
        {/* <Route NavLink path="/login" element={<Login />} /> */}
        <Route  element={<PageNotFound/>}></Route>
      </Routes>
    </Router>
   // <LoginFormComponent></LoginFormComponent>
   
  );
}
export default App;