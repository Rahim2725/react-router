import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name, username, id} = friend;
    let navigate  = useNavigate()

    const friendDitels = () => {
        const path = `Friend/${id}`
        navigate(path)
    }

    return (
        <div>
            <h2>Name: {name}</h2>
            <button onClick={friendDitels}>{username}</button>
        </div>
    );
};

export default Friend;