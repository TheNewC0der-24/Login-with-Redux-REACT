import logo from './logo.svg';
import './App.css';

// Component
import LoginForm from './Components/LoginForm';

import {
  Box,
  AppBar,
  Toolbar,
  Typography,
} from '@mui/material';

function App() {
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

      <LoginForm />
    </>
  );
}

export default App;
