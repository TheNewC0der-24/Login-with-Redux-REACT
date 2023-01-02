import React, { useState } from 'react';

import styles from './LoginForm.module.css';

import { useDispatch } from 'react-redux';
import { login } from '../../Features/userSlice';

import {
    Box,
    Stack,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    TextField,
    IconButton,
    InputAdornment,
    Button,
    Divider,
} from '@mui/material';

// Icons
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import BoltIcon from '@mui/icons-material/Bolt';

// Images
// import login from '../../assets/Images/login.svg'
import loginImg from '../../assets/Images/login.mp4'

const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword((show) => !show);
    };

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(login({
            name: name,
            email: email,
            password: password,

            loggedIn: true,
        })
        );
    }

    return (
        <>
            <Box p={2} sx={{ display: 'flex', justifyContent: "center", margin: 'auto', alignItems: 'center', marginTop: "4rem" }} maxWidth="md">
                <Card sx={{ bgcolor: "#F4F5F7" }}>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} md={6} lg={6} sx={{ margin: 'auto' }}>
                                <CardMedia
                                    component='video'
                                    className={styles.img}
                                    src={loginImg}
                                    autoPlay
                                    loop
                                />
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} lg={6} sx={{ margin: 'auto' }}>
                                <Box mb={5}>
                                    <Box mb={1} sx={{ display: "flex" }}>
                                        <Typography variant="h4" color="primary"><BoltIcon /></Typography>
                                        <Typography variant="h4" color="primary">Login Here</Typography>
                                    </Box>
                                    <Divider />
                                </Box>
                                <form onSubmit={(e) => handleSubmit(e)}>
                                    <Box mt={5} mb={3}>
                                        <Stack mb={2}>
                                            <TextField
                                                fullWidth
                                                size='small'
                                                label='Name'
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </Stack>
                                        <Stack mb={2}>
                                            <TextField
                                                fullWidth
                                                size='small'
                                                type='email'
                                                label='Email'
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </Stack>
                                        <Stack>
                                            <TextField
                                                fullWidth
                                                size='small'
                                                type={showPassword ? 'text' : 'password'}
                                                label='Password'
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position='end'>
                                                            <IconButton onClick={handleShowPassword} edge="end">
                                                                <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                                                            </IconButton>
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                        </Stack>

                                        <Box mt={2}>
                                            <Button
                                                // fullWidth
                                                type='submit'
                                                className={styles.btn}
                                                variant='contained'
                                            >
                                                Submit
                                            </Button>
                                        </Box>
                                    </Box>
                                </form>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

export default LoginForm;