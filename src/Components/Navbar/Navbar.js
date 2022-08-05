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
                                    <a href={`#${elem}`}>{elem}</a>
                                </li>
                            )
                        })

                    }
                </ul>
            </nav>
            <div className='bottom_navigation'>
                <a href='#About' className='nav-div' >
                    <SiAboutdotme className='nav-icon' title='About' />
                </a>
                <a href='#Contact' className='nav-div'>
                    <MdContactPage className='nav-icon' title='Contact' />
                </a >
                <a href='#Home' className='nav-div'>
                    <AiFillHome className='nav-home' title='Home' />
                </a >
                <a href='#Work' className='nav-div'>
                    <AiOutlineFundProjectionScreen className='nav-icon' title='Project' />
                </a >
                <a href='#Skills' className='nav-div'>
                    <BsFillFileEarmarkTextFill className='nav-icon' />
                </a >
            </div>
        </>
    );
};

export default Navbar;