import logo from './logo.svg';
import './App.css';

// Component
import LoginForm from './Components/LoginForm';
import Home from './Components/Home';

import {
  Box,
  AppBar,
  Toolbar,
  Typography,
} from '@mui/material';

import { useSelector } from 'react-redux';
import { selectUser } from './Features/userSlice';

function App() {

  const user = useSelector(selectUser);

  return (
    <>
      <Box>
        <AppBar sx={{ backgroundColor: "#dee2e6" }} position="static">
          <Toolbar>
            <img src={logo} className="App-logo" alt="logo" />
            <Typography
              sx={{ color: "#000" }}
              variant="h6"
            >
              Login With Redux
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      {
        user ? (
          <Home />
        ) : (
          <LoginForm />
        )
      }
    </>
  );
}

export default App;
