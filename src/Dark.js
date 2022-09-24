
import React from 'react';
import logo from './image/profile-pic.jpeg';
import {FaInstagram, FaFacebook, FaGithub,FaEnvelope, FaLinkedin} from 'react-icons/fa';

const website = {'display': 'block', 'color':'white'};


export default function Dark(props){
    return(
        
        <>
            
            <img className="profile-pic" src={logo} alt='profile pic'/>
            <div className='main' style={{"backgroundColor" : props.abc, 'color': props.def}}>
            <h2>Rahul Bisht</h2>
            <h4>Frontend Developer</h4>
            <a href='https://linkedin.com/in/rahul-bisht-033454238' rel="noreferrer" target="_blank" className='website' style={website}>Rahulbisht.com </a>
            <a href='mailto:rahulbeast1957@gmail.com' rel="noreferrer" target="_blank" className='email'><FaEnvelope className='mail'/>Email</a>
            < a href='https://linkedin.com/in/rahul-bisht-033454238' rel="noreferrer" target="_blank" className='linkedin'><FaLinkedin className='mail'/> Linkedin</a>
            <div className='para'>
                <h3>About</h3>
                <p className='about'>
                I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>
                <h3>Interest</h3>
                <p className='interest'>
                Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </p>
            </div>
            <div className='foot'>
                <a className='social' href='https://instagram.com/_rahul_bisht._'rel="noreferrer" target="_blank" ><FaInstagram   size={30} /></a>
                <a className='social' href='https://www.facebook.com/people/Rahul-Bisht/100007715534405' rel="noreferrer" target="_blank"><FaFacebook  size={30} /></a>
                <a className='social' href='https://github.com/hyderr'rel="noreferrer" target="_blank"><FaGithub  size={30} /></a>
            </div> 
        
            </div>
        </>
        
    )
};