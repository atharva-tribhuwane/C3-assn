import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Adduser } from './Adduser';
import { LoginContext } from "../context/LoginContext";
import { Addcourse } from './Addcourse';
export const Dashboard2 = () => {
  const { token, usertype,id } = React.useContext(LoginContext);
  console.log(id);
  const [list, setList] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [addcourse, setAddcourse] = React.useState(true);
  function getCourses() {
    console.log("insidefunction");
    setLoading(true);
    if (token !== null && usertype === "teacher") {
      fetch("http://localhost:8080/course/all")
        .then((res) => res.json())
        .then((res) => {
          res = res.filter((elem)=>elem.instructor_id === id)
          // res.forEach((elem)=>{
          //   console.log(elem.instructor_id);
          // })
          setList(res);
          setLoading(false)
          
        })
        .catch((err) => console.log(err));
    }
  }

  function handledelete(id) {
    fetch(`http://localhost:8080/course/delete/:${id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((res) => alert("Deleted Successfully"))
      .catch((err) => alert("Course Deletion failed"));
  }
  React.useEffect(() => {
    getCourses();
  }, [token])
  return (
    <div style={{marginTop:"10%",display:"flex", justifyContent:"center",width:"100%",}}>
      
      {
        loading ? <div>Loading...</div>
          : <div style={{width:"80%"}} >
            {
              token !== null && usertype === "teacher" ?
                <div>
                  <div  style={{display:"flex", justifyContent:"flex-end"}}>
                    <button style={{width:"8%", backgroundColor:"rgb(94, 94, 234)", color:"white", fontWeight:"700", border:"none", padding:"0.5%", borderRadius:"4px", marginTop:"2%"}} onClick={() => setAddcourse(!addcourse)}>Add Course</button>
                  </div>
                  {
                    addcourse ? <div><Addcourse></Addcourse></div> : null
                  }
                  <div>
                    <h1 style={{textAlign:"start"}}> Courses Taught By You</h1>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                          <TableRow>
                            {/* <TableCell style={{ fontWeight: "700" }}>ID</TableCell> */}
                            <TableCell  style={{ fontWeight: "700" }}>Course_id</TableCell>
                            <TableCell align="right" style={{ fontWeight: "700" }}>Title</TableCell>
                            {/* <TableCell align="right" style={{ fontWeight: "700" }}>Instructor</TableCell> */}
                            <TableCell align="right" style={{ fontWeight: "700" }}></TableCell>
                            <TableCell align="right" style={{ fontWeight: "700" }}></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {list.map((el) => (
                            <TableRow
                              key={el.course_id}
                              style={{ cursor: "pointer" }}
                            >
                              <TableCell component="th" scope="row">
                                {el.course_id}
                              </TableCell>
                              <TableCell align="right">{el.title}</TableCell>
                              {/* <TableCell align="right">{el.instructor_name}</TableCell> */}
                              <TableCell align="right" style={{textDecoration:"underline",color:"blue"}}>ViewDetails/Add Docs </TableCell>
                              <TableCell align="right"style={{width:"10%"}}><button style={{width:"100%", backgroundColor:"rgb(94, 94, 234)", color:"white", fontWeight:"700", border:"none", padding:"2.5%", borderRadius:"4px", marginTop:"2%"}} onClick={()=>handledelete(el.course_id)}>Delete</button></TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </div>
                : <div>Sorry You Cannot Access This Page</div>
            }
          </div>
      }
    </div>
  )
}
