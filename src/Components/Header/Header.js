import React from 'react';
import { motion } from "framer-motion"
import prof from '../../assest/business-professional-attire-office-men-style-gabriel-macht-luxe-digital-removebg-preview.png'
import './Header.scss'
const Header = () => {
    return (
        <div
            id='Home'
            className='header'>
            <div className="headerBadge">
                <motion.div
                    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    style={{ width: '180px', boxShadow: '0 0 20px rgba(0,0,0,.3)', borderRadius: '10px', textAlign: "center", display: 'flex', marginRight: '10px' }}>
                    <motion.p
                        style={{ fontSize: '30px' }}
                    >👍</motion.p>
                    <motion.div>
                        <p>Hi,I am</p>
                        <h3>Ovilash </h3>
                    </motion.div>
                </motion.div>
                <motion.div
                    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    style={{ width: '160px', boxShadow: '0 0 20px rgba(0,0,0,.3)', borderRadius: '10px', textAlign: "right", padding: '10px', lineHeight: '0', marginTop: '10px' }}>
                    <motion.p
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                    >Web Developer</motion.p>
                    <motion.p
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                    >Freelancer </motion.p>
                </motion.div>
            </div>
            <div className='header-image'>
                <motion.img
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    style={{ marginTop: 150 }}
                    src={prof} alt="" />
            </div>
            <div className='header-expertise'>
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1 }}
                    src={"https://icon-library.com/images/react-icon/react-icon-28.jpg"} alt="" />
                <motion.img
                    whileInView={{ x: [100, 0] }}
                    src={"https://iconape.com/wp-content/files/zk/93042/svg/react.svg"} alt="" />
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png"} alt="" />
            </div>
        </div>
    );
};

export default Header;