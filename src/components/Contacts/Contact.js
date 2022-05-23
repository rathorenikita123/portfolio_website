import React, { useRef } from 'react';
import './Contact.css';
import git from './github-icon.png';
import insta from './insta-icon.png';
import linkedin from './linkedin-icon.png';
import mail from './mail-icon.png';
import emailjs from '@emailjs/browser';
//import 'semantic-ui-css/semantic.min.css';

const Contact = () => {
    const formref = useRef();
    const handlesubmit = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            'service_r4peozy', 
            'template_m9y5fjt', 
            formref.current, 
            'user_kzEiC1Nrt7bsz5lPTn0xQ'
        )
        .then(
            (result) => {
            console.log(result.text);
        }, 
        (error) => {
            console.log(error.text);
        });
    }
    return (
        <div className="c">
            <form ref={formref} onSubmit={handlesubmit}>
                <input  type="text" placeholder="Name" name="user_name" />
                <input  type="text" placeholder="Subject" name="user_subject" />
                <input  type="text" placeholder="Email" name="user_email" />
                <textarea  rows="5" placeholder="Message" name="Message" />
                <br></br>
                <button>Submit</button>         
            </form>
            <div className="c-card">
                <h2 className="c-h">Contact Me</h2>
                <div className="c-info">
                    <div className='c-info-item'>
                        <a target="_blank" rel="noreferrer" href="https://github.com/rathorenikita123">
                            <img src={git} alt=""  className="c-img" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nikita-rathore-375610206/">
                            <img src={linkedin} alt=""  className="c-img"/>
                        </a>
                        <a target="_blank" rel="noreferrer" href="mailto:nikitarathore271201@gmail.com">
                            <img src={mail} alt=""  className="c-img"/>
                        </a>
                        <a target="_blank" rel="noreferrer" href="">
                             <img src={insta} alt="" className="c-img"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
