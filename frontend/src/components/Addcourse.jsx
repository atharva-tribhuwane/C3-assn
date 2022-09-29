import { textAlign } from '@mui/system';
import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { LoginContext } from '../context/LoginContext';
export const Addcourse = () => {
    const { id,name } = React.useContext(LoginContext);
    const [title,setTitle] = React.useState("");
    const [description ,setDescription] = React.useState("");
    const [ID,setID] = React.useState("");

    const handleaddcourse = ()=>{
        let payLoad={
            course_id:ID,
            title:title,
            description:description,
            instructor_name:name,
            instructor_id:id,
            docs:[null],
            subscribers:[null]
        }

        try{
            fetch(`http://localhost:8080/course/create`,{
                method:"POST",
                body:JSON.stringify(payLoad),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then((res)=>res.json())
            .then((res)=>console.log(res))
            }
            catch(err){
                console.log(err);
                alert("Cannot Add teacher")
            }
    }
  return (
    <div >
        <h3>Add Course:</h3>
        <form style={{ display:"flex", flexDirection:"column",justifyContent:"start",width:"40%",margin:"auto",textAlign:"start", padding:"1%"}}>
            
            <label htmlFor="name">ID:</label>
            <input type="text" onChange={(e)=>setID(e.target.value)}  style={{marginTop:"2%",marginBottom:"3%",borderRadius:"3px",border:"1px solid rgb(80,80,80)",padding:"3%"}} required placeholder='Give this course some Id...'/>
          
            <label htmlFor="text" style={{marginTop:"2%"}}>Title:</label>
            <input type="text" onChange={(e)=>setTitle(e.target.value)}  style={{marginTop:"2%",marginBottom:"3%",borderRadius:"3px",border:"1px solid rgb(80,80,80)",padding:"3%"}} placeholder='CourseTitle' required/>
           
            <label htmlFor="Description" style={{marginTop:"2%"}}>Description:</label>
            <input type="text" onChange={(e)=>setDescription(e.target.value)}  style={{marginTop:"2%",marginBottom:"3%",borderRadius:"3px",border:"1px solid rgb(80,80,80)",padding:"3%"}}  placeholder='Description' required/>
           
          
            <button onClick={handleaddcourse} style={{width:"30%", backgroundColor:"rgb(94, 94, 234)", color:"white", fontWeight:"700", border:"none", padding:"2.5%", borderRadius:"4px", marginTop:"2%"}}>Add Course</button>
        </form>
    </div>
  )
}
