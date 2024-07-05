import { Box, Button, Container, CssBaseline, Typography } from '@mui/material';

import React from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const navi = useNavigate();
    const storedUserData = localStorage.getItem('user');

    // Parse the stored JSON string back into an object
    const userDetails = JSON.parse(storedUserData);

    const handleLogout = () => {
        localStorage.clear('user');
        navi("/");
    }

    return (

        <div>

            <Container maxWidth='xs'>
                <CssBaseline />
                <Box
                    marginTop={20}
                    sx={{
                        // border: "1px solid gray",
                        borderRadius: "8px", 
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                    padding={5}
                >

                    <Typography variant='h4'>Welcome</Typography>
                    <Typography marginTop={2} variant='h5'>
                        {userDetails.firstName}  {userDetails.lastName}
                    </Typography>

                    {storedUserData &&
                        <Button
                            variant='contained'
                            sx={{
                                marginTop: 2
                            }}
                            color='warning'
                            onClick={handleLogout}
                        >
                            Logout
                        </Button>}

                </Box>

            </Container>
        </div >
    );
}

export default Profile
