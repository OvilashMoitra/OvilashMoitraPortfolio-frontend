import React from 'react';
import './About.scss';
import { motion } from "framer-motion"
import NextJS from '../../assest/Next JS.png'
import ReactJS from '../../assest/images.png'
import Mern from '../../assest/MREN-stack-1.jpg'
import Backend from '../../assest/Backend.png'
const About = () => {
    return (
        <section id='About'>
            <p style={{ fontWeight: 'bolder', fontSize: '2em', textAlign: 'center' }}>I know <span style={{ color: 'blue' }}>Good Website </span >Means <span style={{ color: 'blue' }}>Good Business</span> </p>
            <div className="app__about-container">
                <motion.div
                    whileInView={{ y: [-100, 0] }}
                    className="app__about">
                    <motion.img
                        whileInView={{ scale: [0, 1] }}
                        transition={{ duration: 1 }}
                        src={NextJS} alt="" />
                    <p>I am learning Next JS</p>
                </motion.div>
                <motion.div
                    whileInView={{ y: [100, 0] }}
                    className="app__about">
                    <motion.img
                        whileInView={{ scale: [0, 1] }}
                        transition={{ duration: 1 }}
                        src={ReactJS} alt=""
                        style={{ backgroundColor: 'white' }}
                    />

                    <p>I am good at React JS.I have also some project on React</p>
                </motion.div>
                <motion.div
                    whileInView={{ y: [-100, 0] }}
                    className="app__about">
                    <motion.img
                        whileInView={{ scale: [0, 1] }}
                        transition={{ duration: 1 }}
                        src={Mern} alt="" />
                    <p>I am learning Mern Stack Development</p>
                </motion.div>
                <motion.div
                    whileInView={{ y: [100, 0] }}
                    className="app__about">
                    <motion.img
                        whileInView={{ scale: [0, 1], scaleZ: [0, 1] }}
                        transition={{ duration: 1 }}
                        src={Backend} alt="" />
                    <p>I am begginer at Backend. I only know the CURD operation.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;