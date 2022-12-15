import React, { useState } from 'react';

import styles from './LoginForm.module.css';

import {
    Container,
    Box,
    Stack,
    Card,
    CardContent,
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

// Images
import login from '../../assets/Images/login.svg'

const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword((show) => !show);
    };

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: "center", margin: 'auto', alignItems: 'center' }} maxWidth="md">
                <Stack p={5}>
                    <Box mb={5}>
                        <Typography mb={1} variant="h4" color="primary">Login Here</Typography>
                        <Divider />
                    </Box>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={5} lg={5} sx={{ margin: 'auto' }}>
                            <Box>
                                <img src={login} className={styles.img} alt="login" />
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={12} md={7} lg={7} sx={{ margin: 'auto' }}>
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
                                            fullWidth
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
                </Stack>
            </Box>
        </>
    )
}

export default LoginForm;