import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Project from '../Project/Project';
import './Work.scss'
const Work = () => {
    var s = 4;
    console.log(s)
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://ovilash-portfolio-backend.onrender.com/projects').then(res =>
            res.json()
        )
    )
    const [filteredItem, setFilteredItem] = useState('ALL');
    const [active, setActive] = useState('ALL');

    if (isLoading) return
    const filter = (elem) => {
        console.log(elem);
        setFilteredItem(elem)
        setActive(elem)
    }
    console.log(data);
    return (
        <div style={{ textAlign: 'center' }} id='Work' >
            <p style={{ fontWeight: 'bolder', fontSize: '2em', textAlign: 'center' }}>My creative <span style={{ color: 'blue' }}>Portfolio </span >Section</p>

            {
                ['React JS', 'NEXT JS', 'MERN', 'ALL'].map((elem, index) => <button className={`app__filter-button ${active === elem ? 'active' : null}`} onClick={() => filter(elem)} key={index}>{elem}</button>)
            }
            <div className="app__project-container">
                {
                    filteredItem === 'ALL' ? data?.map(elem => <Project elem={elem}></Project>) : data.filter(elem => elem?.category === filteredItem).map(elem => <Project elem={elem}></Project>)
                }
            </div>
        </div>
    );
};

export default Work;