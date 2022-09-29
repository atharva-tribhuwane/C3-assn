// import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { Dashboard2 } from './components/Dashboard2';
import { Dashboard3 } from './components/Dashboard3';
import { Signup } from './components/Signup';
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Home/> */}
      <Dashboard/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/admindashboard" element={<Dashboard/>}></Route>
        <Route path="/teacherdashboard" element={<Dashboard2/>}></Route>
        <Route path="/studentdashboard" element={<Dashboard3/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
