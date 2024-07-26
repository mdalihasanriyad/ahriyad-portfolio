import React, { useState } from 'react';
import Container from './Container';
import SectionTitle from './SectionTitle';
import WorkCard from './WorkCard';

const Experience = () => {
    const [workReactBd, setWorkReactBd] = useState(true);
    const [workGoogle, setWorkGoogle] = useState(false);
    const [workApple, setWorkApple] = useState(false);
    const [workSplash, setWorkSplash] = useState(false);
    const [workAmazon, setWorkAmazon] = useState(false);

    const handleReactBd = () => {
        setWorkReactBd(true);
        setWorkGoogle(false);
        setWorkApple(false);
        setWorkSplash(false);
        setWorkAmazon(false);
    }
    const handleGoogle = () => {
        setWorkReactBd(false);
        setWorkGoogle(true);
        setWorkApple(false);
        setWorkSplash(false);
        setWorkAmazon(false);
    }
    const handleApple = () => {
        setWorkReactBd(false);
        setWorkGoogle(false);
        setWorkApple(true);
        setWorkSplash(false);
        setWorkAmazon(false);
    }
    const handleSplash = () => {
        setWorkReactBd(false);
        setWorkGoogle(false);
        setWorkApple(false);
        setWorkSplash(true);
        setWorkAmazon(false);
    }
    const handleAmazon = () => {
        setWorkReactBd(false);
        setWorkGoogle(false);
        setWorkApple(false);
        setWorkSplash(false);
        setWorkAmazon(true);
    }
    return (
        <Container id='experience' className='max-w-3xl mx-auto py-10 lg:py-24 gap-16'>
            <SectionTitle title='Where I have Worked' titleN0='02.' />
            <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
                <ul className='md:w-32 flex flex-col'>
                    <li onClick={handleReactBd}
                        className={`${workReactBd ?
                            'border-l-designColor text-designColor' :
                            'border-l-hoverColor text-darkText'}
                        border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium `}>RactBD</li>
                    <li onClick={handleGoogle} className={`${workGoogle ?
                        'border-l-designColor text-designColor' :
                        'border-l-hoverColor text-darkText'}
                        border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium `}>Google</li>
                    <li onClick={handleApple} className={`${workApple ?
                        'border-l-designColor text-designColor' :
                        'border-l-hoverColor text-darkText'}
                        border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium `}>Apple</li>
                    <li onClick={handleSplash} className={`${workSplash ?
                        'border-l-designColor text-designColor' :
                        'border-l-hoverColor text-darkText'}
                        border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium `}>Splash</li>
                    <li onClick={handleAmazon} className={`${workAmazon ?
                        'border-l-designColor text-designColor' :
                        'border-l-hoverColor text-darkText'}
                        border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium `}>Amazon</li>
                </ul>
                {workReactBd && <WorkCard
                    jobTitle='Engineer'
                    jobTag='@ReactBd'
                    date='Jan- 2023 - Present'
                    detailsOne='Write modern, performant, maintainable code for a diverse array of client and internal projects'
                    detailsTwo='Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify'
                    detailsThree='Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis' />}
                {workGoogle && <WorkCard
                    jobTitle='Web Developer'
                    jobTag='@Google'
                    date='Jan- 2021 - 2023'
                    detailsOne='Write modern, performant, maintainable code for a diverse array of client and internal projects'
                    detailsTwo='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500 s'
                    detailsThree='Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis' />}
                {workApple && <WorkCard
                    jobTitle='MERN Stack Developer'
                    jobTag='@Apple'
                    date='Jan- 2022 - 2023'
                    detailsOne='Write modern, performant, maintainable code for a diverse array of client and internal projects'
                    detailsTwo='Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify'
                    detailsThree='Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis' />}
                {workSplash && <WorkCard
                    jobTitle='Web Designer'
                    jobTag='@Splash'
                    date='Jan- 2022 - 2023'
                    detailsOne='Write modern, performant, maintainable code for a diverse array of client and internal projects'
                    detailsTwo='Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify'
                    detailsThree='Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis' />}
                {workAmazon && <WorkCard
                    jobTitle='Font-End Developer'
                    jobTag='@Amazon'
                    date='Jan- 2020 - 2021'
                    detailsOne='Write modern, performant, maintainable code for a diverse array of client and internal projects'
                    detailsTwo='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
                    detailsThree='Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis' />}
            </div>
        </Container>
    );
};

export default Experience;