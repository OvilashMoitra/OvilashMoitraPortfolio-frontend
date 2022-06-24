import React from 'react';
import './Skills.scss'
const Skills = () => {
    return (
        <>
            <p style={{ fontWeight: 'bolder', fontSize: '2em', textAlign: 'center' }}>My <span style={{ color: 'blue' }}>Skills </span ></p>
            <div className='app__skill-1'>
                {
                    ["https://res.cloudinary.com/practicaldev/image/fetch/s--UnEvWPS---/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bzaheit2gj7qnxz4xrh0.png", 'https://codersera.com/blog/wp-content/uploads/2019/10/git.0.jpg', "https://blog.logrocket.com/wp-content/uploads/2019/10/nodejs.png"].map(elem => <img src={elem} alt='' style={{ width: '100px', borderRadius: '50%' }} />)
                }

            </div>

            <br />
            <div className='app__skill-1'>

                {
                    ['https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEaZOmu1I0jYuzPKpQxMs1FEEkXunHclqJtWnpbFjMDyNjUvMKvBAidPcpIBKJQlBNIoc&usqp=CAU'].map(elem => <img src={elem} alt='' style={{ width: '50px', borderRadius: '50%' }} />)
                }
            </div>
            <br />
            <div className='app__skill-1'>
                {
                    ['https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg'].map(elem => <img src={elem} alt='' style={{ width: '50px', borderRadius: '50%' }} />)
                }
            </div>
        </>
    );
};

export default Skills;