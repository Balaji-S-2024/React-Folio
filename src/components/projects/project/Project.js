import React, { useState } from 'react';
import './Project.css';

const Project = ({image, title, desc, link}) => {
    const [Show, setShow] = useState(false)
    return(
        <a href={link}  onMouseEnter={()=> {setShow(true)}} onMouseLeave={()=> {setShow(false)}}>
            <div className='project'>
                {Show ? ( 
                    <div className='project__content'>
                        <h4>{title}</h4>
                        <p>{desc}</p>
                </div>
                ) : (
                <img src={image} alt="no img loaded" />
                )}
            </div>
        </a>
    );
};

export default Project;