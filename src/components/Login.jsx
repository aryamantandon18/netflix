import React,{ useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Login=()=>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:5000/login',{email,password})
        .then(result => {
            console.log(result)
            if(result.status === 200){
                navigate('/');               
            }
            // {state:{id:email}}       //<h1> welcome {location.state.id} </h1>
            else if(result.status === 404){ navigate('/register');}
        })
        .catch(error=>{
            console.log('Axios Error:', error);
            console.log('Status Code:', error.response.status);
            console.log('Response Data:', error.response.data);
        })
    }

            

return(
<div>
    <div>
    <h2 style={{textAlign:"center"}}> Login </h2>
    </div>
    <form onSubmit={handleSubmit}>

    <lebel><strong>Email</strong></lebel>
    <input type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>

    <lebel><strong>Password</strong></lebel>
    <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>

    <button type="submit" > Login </button>
    </form>
</div>
);
};

export default Login;