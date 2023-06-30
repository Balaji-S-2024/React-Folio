import React from 'react'
import { Link } from 'react-scroll';
import './AboutContent.css'

const AboutContent = () => {
    return (
        <div className='topContent'>
            <div className='topContent__container'>
                 <p>Hello I'm Balaji Sankar</p>
                 <p>I'm Web Developer</p>
                 <a href="https://rxresu.me/r/N7p1jqT8">
                    <button className='topContent__download' target='__blank'>Download CV </button>
                 </a>
                 <Link to='project' smooth={true} duration={500}>
                    <button className='topContent__project'>Projects</button>
                 </Link>
            </div>

        </div>
    );
}

export default AboutContent;