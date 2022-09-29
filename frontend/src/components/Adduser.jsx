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
    <div>
        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" onChange={(e)=>setName(e.target.value)} required/>
            <label htmlFor="email">Email:</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} required/>
            <label htmlFor="password">Password:</label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} required/>
            <label htmlFor="phone">Phone:</label>
            <input type="number" onChange={(e)=>setPhone(e.target.value)} required/>
            <button onClick={handleaddteacher}>Add Teacher</button>
        </form>
    </div>
  )
}
