import React from 'react';
import { LoginContext } from '../context/LoginContext';
import { useNavigate } from 'react-router';
export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [usertype,setUsertype] = React.useState("");
    const { settoken } = React.useContext(LoginContext);
    const loginuser = ()=>{
        console.log("inside function",usertype);
        let payLoad = {
            email:email,
            password:password
        }
        try{
        fetch(`http://localhost:8080/${usertype}/login`,{
            method:"POST",
            body:JSON.stringify(payLoad),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((res)=>res.json())
        .then((res)=>{settoken(res.token,res.data.type,res.data.id,res.data.name); navigate(`/${usertype}dashboard`)})
        }
        catch(err){
            console.log(err);
        }

    }
    return (
        <div style={{ width:"40%", padding:"2%", margin:"auto", marginTop:"10%", boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
            <h1 style={{textAlign:"center"}}>Login:</h1>
            <div style={{display:"flex", flexDirection:"column", width:"70%",margin:"auto"}}>
                <label htmlFor="email" style={{textAlign:"start"}}>Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Username..." style={{marginTop:"2%",marginBottom:"3%",borderRadius:"3px",border:"1px solid rgb(80,80,80)",padding:"3%"}} />
                <label htmlFor="email" style={{textAlign:"start"}}>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password..." style={{marginTop:"2%",marginBottom:"3%",borderRadius:"3px",border:"1px solid rgb(80,80,80)",padding:"3%"}}/>
                <label htmlFor="email" style={{textAlign:"start"}}>UserType:</label>
                <select value={usertype} onChange={(e)=>setUsertype(e.target.value)} required style={{marginTop:"2%",marginBottom:"3%",borderRadius:"3px",border:"1px solid rgb(80,80,80)",padding:"3%"}}>
                    <option selected disabled></option>
                    <option value="student" >Student</option>
                    <option value="teacher" >Teacher</option>
                    <option value="admin" >Admin</option>
                </select>
                <button style={{width:"30%", backgroundColor:"rgb(94, 94, 234)", color:"white", fontWeight:"700", border:"none", padding:"2.5%", borderRadius:"4px", marginTop:"2%"}} onClick={loginuser}>SignIn</button>
            </div>

        </div>
    )
}
