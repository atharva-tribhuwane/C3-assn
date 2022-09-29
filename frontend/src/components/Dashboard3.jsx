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
export const Dashboard3 = () => {
  const { token, usertype,id } = React.useContext(LoginContext);
  console.log(id);
  const [list, setList] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [showall, setShowall] = React.useState(false);
  const [filtered,setFiltered] = React.useState(null);
  const [unfiltered,setUnfiltered] = React.useState(null)
  function getCourses() {
    console.log("insidefunction");
    console.log("insidefunction",token,usertype,id);
    setLoading(true);
    if (token !== null && usertype === "student") {
      fetch("http://localhost:8080/course/all")
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            let uf=[];
         res.forEach((el)=>{
            if(el.subscribers.includes(id)){
                uf.push(el);
            }
         });
         console.log(uf);
         setFiltered(uf);
         setList(uf);
          setUnfiltered(res);
        //   setList(res);
          setLoading(false)
          
        })
        .catch((err) => console.log(err));
    }
  }

  function handledelete(id) {
    // fetch(`http://localhost:8080/course/delete/:${id}`, {
    //   method: "DELETE"
    // })
    //   .then((res) => res.json())
    //   .then((res) => alert("Deleted Successfully"))
    //   .catch((err) => alert("Course Deletion failed"));
  }
  React.useEffect(() => {
    getCourses();
  }, [token])
  return (
    <div style={{marginTop:"5%"}}>
      {
        loading ? <div>Loading...</div>
          : <div>
            {
              token !== null && usertype === "student" ?
                <div>
                  <div>
                    <button onClick={() =>{
                        if(!showall){
                            setList(filtered);
                            setShowall(true);
                        }
                        else{
                            setList(unfiltered);
                            setShowall(false);
                        }
                        
                    }}>Show All</button>
                  </div>
                  {
                    showall ? <div></div> : null
                  }
                  <div>
                    <h1>Your Courses List</h1>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                          <TableRow>
                          
                            <TableCell  style={{ fontWeight: "700" }}>Course_id</TableCell>
                            <TableCell align="right" style={{ fontWeight: "700" }}>Title</TableCell>
                         
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
                             
                              <TableCell align="right" style={{textDecoration:"underline",color:"blue"}}>{
                                    el.subscribers.includes(id)?<span>View Course Notes</span>:<span></span>
                                }</TableCell>
                              <TableCell align="right"><button onClick={()=>handledelete(el.course_id)}>
                                {
                                    el.subscribers.includes(id)?<span>Unsubscribe</span>:<span>Subscribe</span>
                                }
                                </button></TableCell>
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
