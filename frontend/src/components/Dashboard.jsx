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
export const Dashboard = () => {
  const { token, usertype } = React.useContext(LoginContext);
  const [list, setList] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [addteacher, setAddteacher] = React.useState(false);
  function getTeachers() {
    setLoading(true);
    if (token !== null && usertype === "admin") {
      fetch("http://localhost:8080/teacher/list")
        .then((res) => res.json())
        .then((res) => {
          setList(res);
          setLoading(false)
        })
        .catch((err) => console.log(err));
    }
  }

  function handledelete(id) {
    fetch(`http://localhost:8080/teacher/:${id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

  }
  React.useEffect(() => {
    getTeachers();
  }, [token])
  return (
    <div>
      {
        loading ? <div>Loading...</div>
          : <div><h1>Hello World</h1>
            {
              token !== null && usertype === "admin" ?
                <div>
                  <div>
                    <button onClick={() => setAddteacher(!addteacher)}>Add Instructor</button>
                    <button>Manage Users</button>
                  </div>
                  {
                    addteacher ? <div><Adduser></Adduser></div> : null
                  }
                  <div>
                    <h1>Instuctor's List</h1>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                          <TableRow>
                            <TableCell style={{ fontWeight: "700" }}>ID</TableCell>
                            <TableCell align="right" style={{ fontWeight: "700" }}>Name</TableCell>
                            <TableCell align="right" style={{ fontWeight: "700" }}>Email</TableCell>
                            <TableCell align="right" style={{ fontWeight: "700" }}>Phone&nbsp;</TableCell>
                            <TableCell align="right" style={{ fontWeight: "700" }}>Courses</TableCell>
                            <TableCell align="right" style={{ fontWeight: "700" }}></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {list.map((el) => (
                            <TableRow
                              key={el.id}
                              style={{ cursor: "pointer" }}
                            >
                              <TableCell component="th" scope="row">
                                {el._id}
                              </TableCell>
                              <TableCell align="right">{el.name}</TableCell>
                              <TableCell align="right">{el.email}</TableCell>
                              <TableCell align="right">(+91){el.phone}</TableCell>
                              <TableCell align="right">Course</TableCell>
                              <TableCell align="right"><button onClick={()=>handledelete(el._id)}>Delete</button></TableCell>
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
