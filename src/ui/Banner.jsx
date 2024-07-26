import React from 'react';
import Container from './Container';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';


const Banner = () => {

    const stringArray = ['I build things for the web.', 'Passionate web developer',
        'Love to learn new ideas']
    return (
        <Container id='home' className='py-10 md:py-24 flex flex-col lg:gap-8 md:px-10 xl:px-4'>
            <motion.h3
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-lg text-designColor font-semibold tracking-wide'>Hi, my name is</motion.h3 >

            <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-4xl lg:text-6xl mb-2 font-bold'>Ali Hasan Riyad.

                <span className='text-darkText font-semibold  lg:mt-4'>
                    <Typewriter
                        options={{
                            strings: stringArray,
                            autoStart: true,
                            loop: true,
                        }} />
                </span>

            </motion.h1>
            <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className='text-darkText md:max-w-[650px] font-medium leading-7'
            >I am a web developer with 2+ years of experience in React. I have a strong foundation in front-end & back-end development and am skilled in creating user-friendly and responsive web applications using React and its ecosystem. {''}
                <a href="https://www.facebook.com/ahriyad.me" target='blank' >
                    <span className='text-designColor inline-flex relative h-7  cursor-pointer overflow-x-hidden group '>Learn more
                        <span className='absolute w-full h-[1px] bg-designColor left-0 bottom-0 -translate-x-[110%] transition-transform group-hover:translate-x-0  duration-500 ' />
                    </span>

                </a>
            </motion.p >
            <motion.a
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                href="https://www.ahriyad.com/"
                target='blank'
                className='w-52 h-14 text-sm border border-designColor rounded-md text-designColor tracking-wide font-semibold hover:bg-hoverColor duration-300 flex items-center justify-center'
            >

                Check out my project
            </motion.a>
        </Container>
    );
};

export default Banner;