import React from 'react'
import { AiOutlineYoutube } from 'react-icons/ai'
import { RxOpenInNewWindow } from 'react-icons/rx'
import { TbBrandGithub } from 'react-icons/tb'

const ProjectsLink = ({ link }) => {
    return (
        <div className='flex items-center text-2xl gap-2'>
            <a href="https://github.com/mdalihasanriyad/" target='blank' className='hover:text-designColor duration-200' ><TbBrandGithub /></a>
            <a href="https://www.youtube.com/@riyadmemories" target='blank' className='hover:text-designColor duration-200' ><AiOutlineYoutube /></a>
            <a href={link} target='blank' className='hover:text-designColor duration-200' ><RxOpenInNewWindow /></a>
        </div>
    )
}

export default ProjectsLink
