import React from 'react';
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import './Project.scss'
const Project = ({ elem }) => {

    return (
        <div className='app__project'>
            <div>
                <img src={elem?.img} alt="" />
                <div className='app__project-link'> <a href={elem?.LiveWebsite} ><AiFillEye /></a> <a href={elem?.GitHubLink} ><AiFillGithub /></a></div>
            </div>
            <p>{elem?.name}</p>
        </div>
    );
};

export default Project;