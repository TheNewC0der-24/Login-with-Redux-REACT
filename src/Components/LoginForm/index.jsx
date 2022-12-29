import React, { useState } from 'react';

import styles from './LoginForm.module.css';

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
import login from '../../assets/Images/login.mp4'

const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword((show) => !show);
    };

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
                                    src={login}
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
                                <form>
                                    <Box mt={5} mb={3}>
                                        <Stack mb={2}>
                                            <TextField
                                                fullWidth
                                                size='small'
                                                label='Name'
                                                mb={3}
                                            />
                                        </Stack>
                                        <Stack mb={2}>
                                            <TextField
                                                fullWidth
                                                size='small'
                                                type='email'
                                                label='Email'
                                            />
                                        </Stack>
                                        <Stack>
                                            <TextField
                                                fullWidth
                                                size='small'
                                                type={showPassword ? 'text' : 'password'}
                                                label='Password'
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