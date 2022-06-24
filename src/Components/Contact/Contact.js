import React from 'react';
import email from '../../assest/Email.webp';
import { BsFillTelephoneForwardFill } from 'react-icons/bs';
import toast, { Toaster } from 'react-hot-toast';
import './Contact.scss'
const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e?.target?.name?.value, e?.target?.email?.value, e?.target?.message?.value);
        toast.success('Your response have been saved');
        console.log(e);
        const contactForm = document.getElementById('contactForm')
        contactForm.reset()
    }
    return (
        <div>
            <p style={{ fontWeight: 'bolder', fontSize: '2em', textAlign: 'center' }}><span style={{ color: 'blue' }}>Contact </span >Me</p>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }} className="app__contact-info">
                <div style={{ boxShadow: '0 0 20px rgba(0,0,0,.1)', width: 290, display: 'flex', padding: '23px 13px', borderRadius: 10, margin: '8px 21px' }}>
                    <img src={email} style={{ width: '45px', height: 25, boxShadow: '0 0 20px rgba(0,0,0,.1)' }} alt="" />
                    <a href="mailto:ovilashmoitraofficial@gmail.com" target={'_blank'} rel="noreferrer" style={{ color: 'GrayText', textDecoration: 'none' }}>ovilashmoitraofficial@gmail.com</a>
                </div>
                <div style={{ boxShadow: '0 0 20px rgba(0,0,0,.1)', width: 290, display: 'flex', padding: '20px 10px', borderRadius: 10 }}>
                    <BsFillTelephoneForwardFill style={{ width: '45px', height: 30 }} />
                    <a href="tel:+8801874653773" target={'_blank'} rel="noreferrer" style={{ color: 'GrayText', textDecoration: 'none' }}>+8801874653773</a>
                </div>
            </div>
            <div className="app__contact-form">
                <form onSubmit={handleSubmit} id='contactForm' >
                    <input type="text" name="name" id="name" placeholder='Enter your name here' required />
                    <input type="email" name="email" id="email" placeholder='Enter your name here' required />
                    <textarea name="message" id="" cols="100" rows="100" placeholder='Enter message here' required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <Toaster />
        </div>
    );
};

export default Contact;