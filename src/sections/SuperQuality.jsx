import { Button } from '@mui/material'
import React from 'react'
import { shoe8 } from '../assests/images'

const SuperQuality = () => {
  return (
<section id='about us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
<div className='flex flex-1 flex-col'>

    <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'> 
         We provide you <span className='text-coral-red'> super</span>
          <span className='text-coral-red'>Quality</span>shoes

    </h2>

    <p className=' mt-4 lg:max-w-lg info-text'>
      Ensuring premium comfort and style, our meticulously crafted footwear 
      is designed to elevate your experience,providing you unmatched quality,innovation,and a touch of elegance
      </p>
      <p className='mt-6 lg:max-w-lg info-text'>
        Our dedcation to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
bg-coral-red rounded-full text-white border-coral-red'> View Details</button>

        </div>
</div>
<div className='  flex-1 flex justify-center items-center'>
  <img src={shoe8} alt="shoe8" width={570} height={522} className='object-contain'/>
</div>
</section> 
 )
}

export default SuperQuality