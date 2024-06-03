import React, { useState } from 'react';
import contact1 from './image/1.png';
import contact2 from './image/contact.jpg';

function Contact(){

    return (
        <section className="contact" id="contact">
            <h1 className="heading"><span>Contact</span> us</h1>
            <div className="row">
                <p className='image'>
                    <img src={contact1} alt=""/>
                </p>
                <p className='image2'>
                        <img src={contact2} alt=""/>
                </p>
            </div>
        </section>
    );
}

export default Contact;