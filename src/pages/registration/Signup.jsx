import React, { useState } from 'react'
import { Grid, Typography, TextField, CssBaseline, Container, Box, Button, Avatar } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { auth, db } from '../../firebase/firebaseConfig';
import { toast } from 'react-toastify';

// sign up form empty to structure object
const signUpForm = {

    fname: '',
    lname: '',
    email: '',
    password: '',
    // repassword: ''
}

//Functional Component
const Signup = () => {

    //Variable initized to empty form
    const [form, setForm] = useState(signUpForm);

    //to redirect
    const navi = useNavigate();



    //handling function when registration  happen
    const handleSubmit = async (e) => {
        e.preventDefault();

        //calling firebase signup function
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);

            const user = userCredential.user;

            const userRef = ref(db, 'users/' + user.uid);

            // Save additional user information to the Realtime Database
            await set(userRef, {
                firstName: form.fname,
                lastName: form.lname,
                email: form.email
            });

            toast.success("Congrats! Sigup Success", { autoClose: 1000 });
            navi("/");//upon success redirect to Login page

        } catch (error) {
            console.log("Faild to register", error.message);
            toast.error("Sign-up Failed", { autoClose: 1000 });
        }
        // console.log(form);

    }

    // filling the empty object preparation to submit the form
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        // console.log(form);
    }

    return (

        <Container component="main" maxWidth="xs">
            {/* <Button onClick={notify}>Toast</Button> */}
            <CssBaseline />
            <Box
                sx={{
                    borderRadius: "8px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                padding={5}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>

                    {/* parent grid for all user input */}
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="fname"
                                onChange={handleChange}
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="lname"
                                onChange={handleChange}
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="email"
                                onChange={handleChange}
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="password"
                                onChange={handleChange}
                                required
                                fullWidth
                                label="Password"
                                type="password"
                                id="password"
                            />
                        </Grid>
                        {/* <Grid item xs={12}>
                            <TextField
                                name="repassword"
                                onChange={handleChange}
                                required
                                fullWidth
                                label="Re-Password"
                                type="password"
                                id="repassword"
                            />
                        </Grid> */}

                    </Grid>
                    {/* parent grid for all user input end*/}


                    {/* submit button */}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    {/* submit button end */}

                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to={"/"} style={{ textDecoration: 'none' }}>

                                <Typography
                                    sx={{
                                        textDecoration: 'none',
                                        marginTop: 2
                                    }}
                                >Already have an account? Login </Typography>
                            </Link>
                        </Grid>
                    </Grid>

                </Box>
                {/* Child box end */}

            </Box>
            {/* parent box end */}
        </Container>
    )

}

export default Signup
