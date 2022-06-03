import React from 'react';
import logo from '../../assest/logo.png'
import { AiFillHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { MdContactPage } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <nav>
                <img className='logo' src={logo} alt="" />
                <ul className='menu' >
                    {
                        ['Home', 'About', 'Contact', 'Work', 'Skills'].map((elem) => {
                            return (
                                <li key={`item-${elem}`}>
                                    <div></div>
                                    <span>{elem}</span>
                                </li>
                            )
                        })

                    }
                </ul>
            </nav>
            <div className='bottom_navigation'>
                <div className='nav-div'>
                    <SiAboutdotme className='nav-icon' title='About' />
                </div>
                <div className='nav-div'>
                    <MdContactPage className='nav-icon' title='Contact' />
                </div>
                <div className='nav-div'>
                    <AiFillHome className='nav-home' title='Home' />
                </div>
                <div className='nav-div'>
                    <AiOutlineFundProjectionScreen className='nav-icon' title='Project' />
                </div>
                <div className='nav-div'>
                    <BsFillFileEarmarkTextFill className='nav-icon' />
                </div>
            </div>
        </>
    );
};

export default Navbar;