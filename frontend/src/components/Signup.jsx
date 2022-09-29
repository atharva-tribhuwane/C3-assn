import React from 'react';
export const Signup = () => {
    const [name,setName] = React.useState("");
    const [phone,setPhone] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [usertype,setUsertype] = React.useState("");
    const loginuser= ()=>{
        let payLoad = {
            name:name,
            email:email,
            password:password,
            phone:phone
        }
        try{
        fetch(`http://localhost:8080/student/register`,{
            method:"POST",
            body:JSON.stringify(payLoad),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((res)=>res.json())
        .then((res)=>alert(res.response))
        }
        catch(err){
            console.log(err);
        }

    }
    return (
        <div style={{ width:"40%", padding:"2%", margin:"auto", marginTop:"5%", boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
            <h1 style={{textAlign:"center"}}>Signup:</h1>
            <div style={{display:"flex", flexDirection:"column", width:"70%",margin:"auto"}}>
                <label htmlFor="email" style={{textAlign:"start"}}>Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Username..." style={{marginTop:"2%",marginBottom:"3%",borderRadius:"3px",border:"1px solid rgb(80,80,80)",padding:"3%"}} />
                <label htmlFor="email" style={{textAlign:"start"}}>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password..." style={{marginTop:"2%",marginBottom:"3%",borderRadius:"3px",border:"1px solid rgb(80,80,80)",padding:"3%"}}/>
                <label htmlFor="name" style={{textAlign:"start"}}>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Password..." style={{marginTop:"2%",marginBottom:"3%",borderRadius:"3px",border:"1px solid rgb(80,80,80)",padding:"3%"}}/>
                <label htmlFor="phone" style={{textAlign:"start"}}>Name:</label>
                <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Your Contact Number..." style={{marginTop:"2%",marginBottom:"3%",borderRadius:"3px",border:"1px solid rgb(80,80,80)",padding:"3%"}}/>
                <button style={{width:"30%", backgroundColor:"rgb(94, 94, 234)", color:"white", fontWeight:"700", border:"none", padding:"2.5%", borderRadius:"4px", marginTop:"2%"}} onClick={loginuser}>SignIn</button>
            </div>

        </div>
    )
}
