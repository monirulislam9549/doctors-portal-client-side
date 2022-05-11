import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';
const Contact = () => {
    return (
        <div style={{ backgroundImage: `url(${appointment})` }}
            className='bg-primary px-10 py-14'>
            <div className='text-white pb-14 text-center'>
                <p className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-secondary to-accent'>Contact Us</p>
                <h4 className='text-4xl'>Stay connected with us</h4>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5'>
                <input className='input w-full max-w-md' type="text" placeholder='Email Address' />
                <input className='input w-full max-w-md' type="text" placeholder='Subject' />

                <textarea className='textarea textarea-warning w-full max-w-md' rows={6} placeholder='Your Message'> </textarea>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </div>
    );
};

export default Contact;