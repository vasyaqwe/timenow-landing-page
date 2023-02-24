import React from 'react'

export const Switch = ({ on, toggle }) => {

    return (
        <label htmlFor="switch" className='bg-primary-300 hover:bg-primary-400 w-[53px] h-7 inline-block rounded-full 
        cursor-pointer relative transition-all'>
            <input checked={on} onChange={toggle} type="checkbox" className='sr-only appearance-none' id='switch' />
            <span className={`w-[20px] h-[20px] bg-white absolute rounded-full top-[4px] transition-all
            ${on ? 'left-[4px]' : 'left-[29px]'}
            `}></span>
        </label>
    )
}
