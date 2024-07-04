import { Box, Button, Container, CssBaseline, TextField, Typography, Grid, Avatar } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../firebase/firebaseConfig"

const loginForm = {
    email: '',
    password: ''
}

const Login = () => {

    const [login, setLogin] = useState(loginForm);

    const navi = useNavigate();

    const handleChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
        console.log(login);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(login);
        try {
            const user = await signInWithEmailAndPassword(auth, login.email, login.password);
            alert("Login Success");
            navi("/profile")

        } catch (error) {
            console.log("Failded to login", error.message);
        }

    }

    return (
        <Container maxWidth='xs'>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 15,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography variant='h5'> Sign in</Typography>

                <Box component="form" onSubmit={handleSubmit} >

                    <TextField
                        id='email'
                        required
                        label="Email Address"
                        name='email'
                        fullWidth
                        autoFocus
                        margin='normal'
                        onChange={handleChange}
                    ></TextField>
                    <TextField
                        id='password'
                        required
                        label="Password"
                        name='password'
                        fullWidth
                        autoFocus
                        margin='normal'
                        onChange={handleChange}
                    ></TextField>

                    <Button
                        variant='contained'
                        fullWidth
                        type='submit'
                        sx={{
                            mt: 3
                        }}
                    >
                        Sign In
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to={"/signup"} style={{ textDecoration: 'none' }}>

                                <Typography
                                    sx={{
                                        textDecoration: 'none',
                                        marginTop: 2
                                    }}
                                >Don't have an account? Sign Up</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );

}

export default Login
