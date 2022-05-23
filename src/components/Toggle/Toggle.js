import React from 'react'; 
import './Toggle.css';
import { themeChange } from 'theme-change';

themeChange()

const Toogle = () => {
    return (
        <div className="t">
            <label className="switch">
                <input type="checkbox"/>
                <span data-toggle-theme="dark,light" data-act-class="ACTIVECLASS" className="slider round"></span>
            </label>
        </div>
    );
}

export default Toogle;
