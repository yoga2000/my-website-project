import React from 'react'
import { offer } from '../assests/images'
import Button from '../Components/Button'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
<div className='flex-1'>
  <img src={offer} alt="offer" width={773} height={687}  className='object-contain w-full'/>

</div>
<div className='flex flex-1 flex-col'>

    <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'> 
         <span className='text-coral-red'>Special</span> Offer

    </h2>

    <p className=' mt-4 lg:max-w-lg info-text'>
      Embark on a shopping journey that redefines you experience with unbeatable deals.
      </p>
      <p className='mt-6 lg:max-w-lg info-text'>
        Navigate a realm of possiblities designed to fullfill your unique desires,
        surpassing the loftiest expections.Your journey with us is nothing short of exceptional
        </p>
        <div className='mt-11  flex flex-wrap gap-4'>
<Button label='shop now ' />
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
bg-white rounded-full text-slate-gray border-slate-gray'>Learn more</button>


        </div>
</div>
    </section>
  )
}

export default SpecialOffer