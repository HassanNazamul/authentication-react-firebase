import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Error = () => {
    const navi = useNavigate();

    useEffect(() => {
        toast.error("Invalid Entry", { autoClose: 1000 });
        navi("/");
    }, []);



    return (

        <></>
    );
}

export default Error
