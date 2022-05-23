import React from 'react';
import './Introduction.css';
import Me from './Nikita_Rathore(Profile).png';

const Introduction = () => {
    return (
        <div className='i'>
            <div className="i-left">
                <h1 className='i-intro'>Hello</h1>
                <h2 className='i-intro-name'>I'm Nikita Rathore <br/>I'm a student at IIIT Gwalior
                <br/>
                <span className='i-intro-and'>and a  </span>
                <span className='i-intro-dev'>Frontend Web Developer</span>
                </h2>
            </div>
            <div className='i-right'>
                <img src={Me} alt="Profile_Picture" className="i-img"/>   
            </div>
        </div>
    );
}

export default Introduction;