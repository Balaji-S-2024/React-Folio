// import React from 'react'
import {Element} from 'react-scroll'
import Project from './project/Project'
import django_ecommerce from '../../assets/images/django_ecommerce.png'
import php_login from '../../assets/images/php_login.png'
import dsa_chess from '../../assets/images/dsa_chess.png'
import python_tkinter from '../../assets/images/python_tkinter.png'
import '../projects/ProjectContainer.css'

const ProjectContainer = () => {
    const projects = [
        {
            image:django_ecommerce,
            title:"Django E-Commerce",
            desc:"Pharmacy Management System with Python Django",
            link:"https://github.com/Balaji-S-2024/Django-Ecommerce",
        },
        {
            image:php_login,
            title:"Simple Login Page with MySQL and PHP",
            desc:"With PHP and MySQL Database done a login page to understand the data flow",
            link:"https://sturegisterportal.000webhostapp.com/signup.php",
        },
        {
            image:dsa_chess,
            title:"Chess Game Using Graph DSA",
            desc:"Implemented Chess Board in console Using Graph DSA",
            link:"https://github.com/Balaji-S-2024/DSA-Chess-Game/",
        },
        {
            //E:/HTML/spiderman.jpeg  django_ecommerce
            image:python_tkinter,
            title:"Python Tkinter Oracle Connectivity",
            desc:"Using Tkinter Module in Python Oracle Databsase Connectivity Activity are done.",
            link:"https://github.com/Balaji-S-2024/Python-Tkinter-Oracle",
        },
    ];


    return(
        <Element className='projectcontainer'>
            <h1>Projects</h1>
            <p>THese are the Projects I made by own </p>
            <div className='projectcontainer__projects'>
                {
                    projects.map((project, index)=>{
                        return(
                            <div>
                                <Project key = {index} image={project.image} title={project.title} desc={project.desc} link={project.link}/>
                            </div>
                    )
                })}
            </div>
        </Element>
    );
};

export default ProjectContainer;