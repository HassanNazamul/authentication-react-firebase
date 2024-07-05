import { Box, Button, Container, CssBaseline, TextField, Typography, Grid, Avatar } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from "../../firebase/firebaseConfig"
import { ref, get } from 'firebase/database';
import { toast } from 'react-toastify';


// Login form empty to structure object
const loginForm = {
    email: '',
    password: ''
}

//Functional Component
const Login = () => {

    //Variable initized to empty form
    const [login, setLogin] = useState(loginForm);

    //to redirect
    const navi = useNavigate();

    // filling the empty object preparation to submit the form
    const handleChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
        console.log(login);
    }

    //handling function when registration  happen
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(login);

        //calling firebase login function
        try {
            const userCredential = await signInWithEmailAndPassword(auth, login.email, login.password);
            const user = userCredential.user;

            // Retrieve additional user information from Realtime Database
            const userRef = ref(db, 'users/', user.uid);

            const userShot = await get(userRef);

            if (userShot.exists) {
                const userData = userShot.val();

                const userInfo = userData[user.uid];

                // Extract data from userData
                const { email, firstName, lastName } = userInfo;

                // Store user data in local storage
                const userDetails = {
                    uid: user.uid,
                    email: user.email,
                    firstName: firstName,
                    lastName: lastName,
                };
                //storing user data as a string in local storage

                localStorage.setItem('user', JSON.stringify(userDetails));
                toast.success("Welcome Login Success", { autoClose: 1000 });
                navi("/profile")//upon sucess redirected to profile
            }
            else {
                toast.error("User data not found", { autoClose: 1000 });
            }

        } catch (error) {
            if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found') {
                toast.error("Invalid email or password", { autoClose: 1000 });
            } else if (error.message.includes('400')) {
                toast.error("Bad Request: Check your input data", { autoClose: 1000 });
            } else {
                toast.error("Login Failed", { autoClose: 1000 });
            }
            console.log("Failed to login", error.message);
        }

    }

    return (
        <Container maxWidth='xs'>
            <CssBaseline />
            <Box
                sx={{
                    borderRadius: "8px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    marginTop: 15,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
                padding={5}
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
