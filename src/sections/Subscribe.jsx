import React from 'react'

const Subscribe = () => {
  return (
    <section className='max-container flex justify-between items-center lg:flex-col gap-10 ' id='contact-us' >

      <h3 className='text-4xl leading-[68px] lg:max-w-full font-palnquin font-bold'>
        Sign Up for <span className='text-coral-red'>updates </span> & Newsletter
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type="text" placeholder='subscribe@nike.com' className='input' />
        <div>
        <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
bg-coral-red rounded-full text-white border-black'>sign  up</button>

        </div>
      </div>
    </section>
  )
}

export default Subscribe