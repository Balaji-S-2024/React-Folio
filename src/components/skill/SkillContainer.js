import React from 'react'
import {Element} from 'react-scroll'
import LinearProgress from '@material-ui/core/LinearProgress'
import '../skill/SkillContainer.css'

const SkillContainer = () => {
    return (
        <Element className='skillcontainer' id='skill'>
            <LinearProgress variant='determinate' value={100}/>
            <div className='skillcontainer__text'>
                <h2>SKILL SET</h2>
                
                <div  className='skillcontainer__skillset'>
                    <h3>Java</h3>
                    <div className='skillcontainer__slider  skillcontainer_slider1' >
                        <LinearProgress variant='determinate' value={70}/>
                    </div>
                </div>
                <div  className='skillcontainer__skillset'>
                    <h3>Python</h3>
                    <div className='skillcontainer__slider skillcontainer_slider2'>
                        <LinearProgress variant='determinate' value={50}/>
                    </div>
                </div>
                <div  className='skillcontainer__skillset'>
                    <h3>React</h3>
                    <div className='skillcontainer__slider skillcontainer_slider3'>
                        <LinearProgress variant='determinate' value={40}/>
                    </div>
                </div>
                <div  className='skillcontainer__skillset'>
                    <h3>Django</h3>
                    <div className='skillcontainer__slider skillcontainer_slider4'>
                        <LinearProgress variant='determinate' value={50}/>
                    </div>
                </div>
                <div  className='skillcontainer__skillset'>
                    <h3>DBMS</h3>
                    <div className='skillcontainer__slider skillcontainer_slider5'>
                        <LinearProgress variant='determinate' value={50}/>
                    </div>
                </div>

            </div>

        </Element>
    );
};

export default SkillContainer;