import React from 'react';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';

import { logout, selectUser } from '../../Features/userSlice';

import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material';

const Home = () => {

    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();

        dispatch(logout());
    }

    return (
        <>
            <Box p={2} sx={{ display: 'flex', justifyContent: "center", margin: 'auto', alignItems: 'center', marginTop: "4rem" }} maxWidth="md">
                <Card sx={{ bgcolor: "#F4F5F7" }}>
                    <CardContent>
                        <Typography sx={{ fontWeight: "bold" }} variant="h5">
                            Welcome <span style={{ color: "#1976d2" }}>{user.name}</span>!
                        </Typography>
                        <Typography variant="subtitle1">
                            You are logged in.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={(e) => handleLogout(e)}
                        >
                            Logout
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}

export default Home;