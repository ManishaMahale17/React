
import { useNavigate } from "react-router-dom";
import "./home.css";
const Home = () => {

    // const [email, setemail] = useState();
    // const [pass, setpass] = useState()

    const navigate = useNavigate();
    return (
        <div classname="main" style={{padding:100}}>

<div style={{margin:10}}>
    <h1 style={{color: "pink", fontSize: '5em', textAlign:'center', backgroundColor:'pink'}}></h1></div>
   
            {/* </div> */}
            
            {/* <div >Signup</div>
            <div style={{margin:20}}>
                <input type='text' placeholder='email' onChange={(evt)=>setemail(evt.target.value)}/>
            
            </div>
            <div style={{margin:20}}>
                <input type='text' placeholder='password' onChange={(evt)=>setpass(evt.target.value)}/>
             */}
            {/* </div> */}

{/* 
            <button style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}} 
            onClick = {this.scream} >Submit</button> */}

            <button style={{display: 'flex', flexDirection: 'column', alignItems:'left'}} onClick={()=> {
    navigate('/signup')
  }}>Register A New User</button>


<button style={{display: 'flex', flexDirection: 'column', alignItems:'center'}} onClick={()=> {
    navigate('/about')
  }}>about</button>

<button style={{display: 'flex', flexDirection: 'column', alignItems:'right'}} onClick={()=> {
    navigate('/contact')
  }}>contact</button>

<button style={{display: 'flex', flexDirection: 'column', alignItems:'right'}} onClick={()=> {
    navigate('/selectvehicle')
  }}>selectvehicle</button>
           
        </div>
    )
}
export default Home;
