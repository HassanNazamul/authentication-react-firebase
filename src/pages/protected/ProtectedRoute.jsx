import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
    //getting logged in user info from local storage
    //and converting it to json object
    const isAuthenticated = JSON.parse(localStorage.getItem('user'));

    //checking whether user logged in or not
    if (!isAuthenticated) {
        //if not then redirect back to login page
        return <Navigate to="/" />;
    }

    return children;
};

