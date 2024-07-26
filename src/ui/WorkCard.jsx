import React from 'react'
import { TiArrowForward } from 'react-icons/ti'
import { motion } from 'framer-motion'

const WorkCard = ({ jobTitle, jobTag, date, detailsOne, detailsTwo, detailsThree }) => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <h3 className='gap-2 text-xl font-medium flex'>{jobTitle} <span className='text-designColor'>{jobTag}</span></h3>
            <h3 className='text-sm font-medium text-darkText mt-2'>{date}</h3>
            <h3 className='mt-6 flex  flex-col gap-3'>
                <p className='flex gap-2 text-darkText'><span className='text-designColor mt-1'><TiArrowForward /></span>{detailsOne}</p>
                <p className='flex gap-2 text-darkText'><span className='text-designColor mt-1'><TiArrowForward /></span>{detailsTwo}</p>
                <p className='flex gap-2 text-darkText'><span className='text-designColor mt-1'><TiArrowForward /></span>{detailsThree}</p>
            </h3>
        </motion.div>
    )
}

export default WorkCard
