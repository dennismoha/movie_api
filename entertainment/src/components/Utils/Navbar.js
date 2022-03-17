import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Navbar() {  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar onClick={()=> window.scroll(0,0)}>
        <Toolbar>       
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             <Link to="/">Home</Link>
          </Typography>          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             <Link to="/album">album</Link>
          </Typography>          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             <Link to="/movies">movies</Link>
          </Typography>          
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
