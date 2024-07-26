import React from 'react';
import Container from './Container';
import SectionTitle from './SectionTitle';

const Contact = () => {
    return (
        <Container id='contact' className="py-10 lg:pb-24 flex flex-col gap-4 justify-center items-center" >
            <p className='text-lg text-designColor font-semibold tracking-wide '> <span>04.</span> What's Next?</p>
            <h2 className='text-5xl font-semibold'>Get In Touch</h2>
            <p className='max-w-xl mx-auto text-center text-darkText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsa excepturi ipsum ipsam totam mollitia reiciendis adipisci, vel odio obcaecati aspernatur blanditiis soluta ea eveniet! Veritatis, omnis. Iure, maiores sint?</p>
            <a href="mailto:ahriyad.com"><p className='w-32 h-14 border border-designColor font-semibold mt-6 text-sm flex items-center justify-center text-designColor tracking-wider rounded-md hover:bg-hoverColor duration-300'>Say Hello</p></a>
        </Container >
    );
};

export default Contact;