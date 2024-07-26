import React from 'react';
import Container from './Container';
import SectionTitle from './SectionTitle';
import { amazonImg, cyberImg, noorShop } from '../assets/index.jsx'
import ProjectsLink from './ProjectsLink.jsx';

const Project = () => {
    return (
        <Container id='project' className='py-24'>
            <SectionTitle title='Some Things I have Built' titleN0='03.' />
            <div className="mt-10 flex flex-col items-center justify-center gap-28">
                <div className="flex flex-col lg:flex-row gap-6">
                    <a href="https://www.ahriyad.com/" target='blank' className='w-full lg:w-1/2 h-auto relative rounded-xl group'>
                        <img src={amazonImg} alt="amazonImg" className='w-full h-full object-cover' />
                        <div className="absolute w-full h-full bg-designColor/10 top-0 left-0 group-hover:bg-transparent duration-300" />
                    </a>
                    <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right md:-ml-16 z-10">
                        <div className="">
                            <p className='text-designColor text-sm tracking-wide'>Featured Project</p>
                            <h1 className='text-2xl font-bold'>Amazon Clone 2.0</h1>
                        </div>
                        <p className='bg-textBg text-sm md:text-base p-2 md:p-6 rounded-md'>An Amazon clone website for visualizing personalized Amazon website. View your products, Add your account with O-auth and then make the purchage using stripe.</p>
                        <ul className='text-xs tracking-wide md:text-sm flex gap-2 md:gap-5 justify-between text-darkText'>
                            <li>Nextjs</li>
                            <li>Typescript</li>
                            <li>Next-auth</li>
                            <li>Stripe</li>
                            <li>Vercel Deployment</li>
                        </ul>
                        <ProjectsLink link='https://nextamazon.reactbd.com/' />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row-reverse gap-6">
                    <a href="https://www.ahriyad.com/" target='blank' className='w-full lg:w-1/2 h-auto relative rounded-xl group'>
                        <img src={cyberImg} alt="amazonImg" className='w-full h-full object-cover' />
                        <div className="absolute w-full h-full bg-designColor/10 top-0 left-0 group-hover:bg-transparent duration-300" />
                    </a>
                    <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right z-10">
                        <div className="">
                            <p className='text-designColor text-sm tracking-wide'>Featured Project</p>
                            <h1 className='text-2xl font-bold'>Cyber Security Blog</h1>
                        </div>
                        <p className='bg-textBg text-sm md:text-base p-2 md:p-6 rounded-md lg:-mr-16'>A full functional Cyber Security Blog where you can view the latest post and comments on it by passing your ideas besides you can try to add your own post on it by logging on the portal.</p>
                        <ul className='text-xs tracking-wide md:text-sm flex gap-2 md:gap-5 justify-between text-darkText'>
                            <li>Nextjs</li>
                            <li>Typescript</li>
                            <li>Next-auth</li>
                            <li>Stripe</li>
                            <li>Vercel Deployment</li>
                        </ul>
                        <ProjectsLink link='https://nextamazon.reactbd.com/' />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-6">
                    <a href="https://www.ahriyad.com/" target='blank' className='w-full lg:w-1/2 h-auto relative rounded-xl group'>
                        <img src={noorShop} alt="amazonImg" className='w-full h-full object-cover' />
                        <div className="absolute w-full h-full bg-designColor/10 top-0 left-0 group-hover:bg-transparent duration-300" />
                    </a>
                    <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right md:-ml-16 z-10">
                        <div className="">
                            <p className='text-designColor text-sm tracking-wide'>Featured Project</p>
                            <h1 className='text-2xl font-bold'>Noor Shop</h1>
                        </div>
                        <p className='bg-textBg text-sm md:text-base p-2 md:p-6 rounded-md'>An Amazon clone website for visualizing personalized Amazon website. View your products, Add your account with O-auth and then make the purchage using stripe.</p>
                        <ul className='text-xs tracking-wide md:text-sm flex gap-2 md:gap-5 justify-between text-darkText'>
                            <li>Nextjs</li>
                            <li>Typescript</li>
                            <li>Next-auth</li>
                            <li>Stripe</li>
                            <li>Vercel Deployment</li>
                        </ul>
                        <ProjectsLink link='https://nextamazon.reactbd.com/' />
                    </div>
                </div>
            </div>
        </Container >
    );
};

export default Project;