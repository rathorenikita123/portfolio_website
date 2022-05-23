import React from 'react'; 
import './Skill.css';
import h from  './html-removebg-preview.png';
import cs from  './css-removebg-preview.png';
import js from  './javascript-removebg-preview.png';
import rj from  './react-removebg-preview.png';
import njs from  './nextjs-removebg-preview.png';
import py from  './python-removebg-preview.png';
import cp from  './c++-removebg-preview.png';
import c from  './c-removebg-preview.png';

const Skills = () => {
    return (
        <div className="s">
            <div className="s-all">
                <h2 className="s-h">Skills</h2>
                <div className="s-info"> 
                    <img src={h} alt=""className="s-i" />
                    <img src={cs} alt=""className="s-i" />
                    <img src={js} alt=""className="s-i" />
                    <img src={rj} alt=""className="s-i" />
                    <img src={njs} alt=""className="s-i" />
                    <img src={py} alt=""className="s-i" />
                    <img  src={cp} alt=""className="s-i"/>
                    <img  src={c} alt=""className="s-i"/>
                </div>
            </div>
        </div>
    );
}

export default Skills;


