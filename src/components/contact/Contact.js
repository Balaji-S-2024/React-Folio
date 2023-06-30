// import React from 'react';
import {Element} from 'react-scroll';
import {IconButton} from '@material-ui/core';
import {LinkedIn, Facebook, Instagram, Email, GitHub} from '@material-ui/icons';
import './Contact.css'

const Contact = () => {
    return(
        <Element className='contact' id='contact'>
            <h1>Contact</h1>
            <div className='contact__container'>
            <p>
            <IconButton>
                        <Email/>
                    </IconButton>
                    Email : <a href="mailto:balajisankar0202@gmail.com"><span>balajisankar0202@gmail.com</span></a> </p>
            <p>
            <IconButton>
                        <GitHub/>
                    </IconButton>Github: <a href="https://github.com/Balaji-S-2024"> <span>https://github.com/Balaji-S-2024</span></a></p>
            <div className='contact__icons'>
                <a href="https://www.linkedin.com/in/balajisankarmca/">
                    <IconButton>
                        <LinkedIn/>
                    </IconButton>
                </a>
                <a href="https://www.facebook.com/balaji.sankar.16547008">
                    <IconButton>
                        <Facebook/>
                    </IconButton>
                </a>
                <a href="https://www.instagram.com/lone_j0e/">
                    <IconButton>
                        <Instagram/>
                    </IconButton>
                </a>

            </div>
            </div>

        </Element>
    );
};

export default Contact;