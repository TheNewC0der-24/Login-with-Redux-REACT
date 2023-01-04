import React from 'react';
import styles from './Home.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { logout, selectUser } from '../../Features/userSlice';

import {
    Box,
    Button,
    Grid,
    Typography,
} from '@mui/material';

import welcomeImg from '../../assets/Images/profile.png';

const Home = () => {

    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();

        dispatch(logout());
    }

    return (
        <>
            <Box mt={5} p={2} maxWidth="lg" sx={{ display: 'flex', justifyContent: "center", marginX: "auto" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{ margin: "auto" }}>
                        <img src={welcomeImg} alt="welcome" className={styles.img} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{ margin: "auto" }}>
                        <Typography sx={{ fontWeight: "bold" }} variant="h3">
                            Welcome <span style={{ color: "#1976d2" }}>{user.name}</span>!
                        </Typography>
                        <Typography variant="h5">
                            You are logged in.
                        </Typography>
                        <Box mt={2}>
                            <Button
                                // fullWidth
                                variant="contained"
                                onClick={(e) => handleLogout(e)}
                            >
                                Logout
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Home;