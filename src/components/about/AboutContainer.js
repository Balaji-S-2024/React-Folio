// import React from 'react'
import {Element} from 'react-scroll';
import AboutContent from './aboutcontent/AboutContent'
import './AboutContainer.css'

const AbouContainer = () => {
    return (
        <Element name='about' className='aboutcontainer'> 
            <AboutContent/>
        </Element>
    );
};

export default AbouContainer;