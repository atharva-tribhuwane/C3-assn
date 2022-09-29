import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import { LoginContext } from '../context/LoginContext';
const drawerWidth = 240;
function Navbar(props) {
  
  const { token, usertype,id } = React.useContext(LoginContext);
  let navItems;
  if(token.length>0){
     navItems=['Logout'];
  }
  else{
     navItems = ['Home', 'About', 'Contact', 'locate us', 'login', 'signup'];
  }
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleclick=(item)=>{
    navigate(`/${item}`);
  }
 
  

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            align="left"
          >
           C3Hub
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'white' }} onClick={()=>handleclick(item)} >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    
    </Box>
  );
}



export default Navbar;