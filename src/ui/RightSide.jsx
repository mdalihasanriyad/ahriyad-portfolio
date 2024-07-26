import React from 'react'

const RightSide = () => {
    return (
        <div className=' w-full h-full flex flex-col items-center justify-end gap-6'>
            <a href="mailto:ahriyadinfo@gmail.com">
                <p className='text-sm rotate-90 w-72 tracking-widest text-designColor/80 hover:text-designColor'>ahriyadinfo@gmail.com</p>
            </a>
            <div className="w-[1px] h-32 bg-darkText"></div>
        </div>
    )
}

export default RightSide
