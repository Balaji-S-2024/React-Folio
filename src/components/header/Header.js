import react from 'react'
import * as React from 'react';
import {Link} from 'react-scroll'
import './Header.css'

const Header = () => {
    return(
        <div className='header'>
            <div className='header__name'>
                <h1>Balaji<span> S</span></h1>
            </div>
            <div className='header__list'>
                <Link to='about' smooth={true} duration={500}>
                    <h4>
                        About me
                    </h4>
                </Link>
                <Link to='project' smooth={true} duration={500}>
                    <h4>
                        Project
                    </h4>
                </Link>
                <Link to='skill' smooth={true} duration={500}>
                    <h4>
                        Skills
                    </h4>
                </Link>
                <Link to='contact' smooth={true} duration={500}>
                    <h4>
                        Contact
                    </h4>
                </Link>
            </div>

        </div>
    )
}

export default Header;