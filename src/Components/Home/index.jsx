import React from 'react';

import { useDispatch } from 'react-redux';

import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material';

import { logout } from '../../Features/userSlice';

const Home = () => {

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
                            Welcome <span style={{ color: "#1976d2" }}>Name</span>!
                        </Typography>
                        <Typography variant="subtitle1">
                            𝐇𝐞𝐥𝐥𝐨 𝐭𝐡𝐞𝐫𝐞, 𝐟𝐞𝐥𝐥𝐨𝐰 <span style={{ color: "#1976d2" }}>&lt;𝚍𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛𝚜 /&gt;</span>!
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