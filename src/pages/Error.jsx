import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure toastify CSS is imported

const Error = () => {
    // useNavigate hook to navigate
    const navigate = useNavigate();

    // useEffect hook to perform side effects
    useEffect(() => {
        // Display an error toast notification with a custom message and autoClose duration
        toast.error("Invalid Entry", { autoClose: 1000 });
        // Navigate to the home page ("/") after showing the toast
        navigate("/");
    }, [navigate]); // Add navigate as a dependency

    // Return an empty fragment as the component doesn't need to render any UI
    return <></>;
}

export default Error;
