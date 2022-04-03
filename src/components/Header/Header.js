import React from 'react';
import CustomLink from '../CustomLink/CustomeLink';

const Header = () => {
    return (
        <div>
            <h1>Welcomr to my fancy Routing Website!!</h1>
            <nav>
               <p><CustomLink to="/">Home</CustomLink></p>
               <p><CustomLink to="/friends">Friends</CustomLink></p>
               <p><CustomLink to="/about">About</CustomLink></p>
            </nav>
        </div>
    );
};

export default Header;