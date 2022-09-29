import { textAlign } from '@mui/system';
import React from 'react'

export const Adduser = () => {
    const [name,setName] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [password ,setPassword] = React.useState("");
    const [phone,setPhone] = React.useState("");
    const [courses,setCourses] = React.useState([null]);

    const handleaddteacher = ()=>{
        let payLoad={
            name:name,
            email:email,
            password:password,
            phone:phone,
        }

        try{
            fetch(`http://localhost:8080/teacher/register`,{
                method:"POST",
                body:JSON.stringify(payLoad),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then((res)=>res.json())
            .then((res)=>alert("Added teacher Successfully"))
            }
            catch(err){
                console.log(err);
                alert("Cannot Add teacher")
            }
    }
  return (
    <div >
        <h3>Add Teacher:</h3>
        <form style={{ display:"flex", flexDirection:"column",justifyContent:"start",width:"40%",margin:"auto",textAlign:"start", padding:"1%"}}>
            
            <label htmlFor="name">Name:</label>
            <input type="text" onChange={(e)=>setName(e.target.value)}  style={{marginTop:"2%",marginBottom:"3%",borderRadius:"3px",border:"1px solid rgb(80,80,80)",padding:"3%"}} required/>
          
            <label htmlFor="email" style={{marginTop:"2%"}}>Email:</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)}  style={{marginTop:"2%",marginBottom:"3%",borderRadius:"3px",border:"1px solid rgb(80,80,80)",padding:"3%"}} required/>
           
            <label htmlFor="password" style={{marginTop:"2%"}}>Password:</label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)}  style={{marginTop:"2%",marginBottom:"3%",borderRadius:"3px",border:"1px solid rgb(80,80,80)",padding:"3%"}} required/>
           
            <label htmlFor="phone" style={{marginTop:"2%"}}>Phone:</label>
            <input type="number" onChange={(e)=>setPhone(e.target.value)}  style={{marginTop:"2%",marginBottom:"3%",borderRadius:"3px",border:"1px solid rgb(80,80,80)",padding:"3%"}} required/>
          
            <button onClick={handleaddteacher} style={{width:"30%", backgroundColor:"rgb(94, 94, 234)", color:"white", fontWeight:"700", border:"none", padding:"2.5%", borderRadius:"4px", marginTop:"2%"}}>Add Teacher</button>
          
        </form>
    </div>
  )
}
