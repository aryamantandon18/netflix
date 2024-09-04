
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const SignUp=()=>{
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:5000/register',{name,email,password})
        .then(result => {console.log(result)
        navigate("/login")
    })
        .catch(error=>{
            console.log('Axios Error:', error);
            console.log('Response Data:', error.response.data);
            console.log('Status Code:', error.response.status);
        })
    }

return(
<div>
    <div>
    <h2 style={{textAlign:"center"}}> Register </h2>
    </div>
    <form onSubmit={handleSubmit}>
    <label><strong>Name</strong></label>
    <input type="text" placeholder="Enter Name" 
    onChange={(e)=>setName(e.target.value)}/>

    <label><strong>Email</strong></label>
    <input type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>

    <label><strong>Password</strong></label>
    <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>

    <button type="submit"> SignUp </button>
    </form>
</div>
);
};
export default SignUp;