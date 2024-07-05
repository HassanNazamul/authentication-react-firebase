import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);

    const navi = useNavigate();

    const handleLogout = () => {
        localStorage.clear('user');
        navi("/");
    }

    return (



        <div>
            <h1>Profile Page</h1>
            {
                user &&
                <Button onClick={handleLogout}>Logout</Button>
            }
        </div >
    );
}

export default Profile
