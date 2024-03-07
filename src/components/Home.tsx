import React from 'react'

export const Home = () => {
  return (
    <div className='mt-24'>
      <div className='flex flex-col justify-center mx-auto mt-[-96px] px-8 w-full max-w-[920px] h-screen text-left'>
        <p className='p-2 font-mono text-lprimary dark:text-dprimary'>Hi, my name is</p>
        <h1 className='md:py-1 font-bold text-3xl text-ltext sm:text-6xl md:text-7xl dark:text-dtext'>
          sameer tripathi
        </h1>
        <p className='py-4 font-bold text-lsubtext text-xl sm:text-4xl md:text-5xl dark:text-dsubtext'>
          software engineer
        </p>
        <p className='font-bold text-lsubtext text-md md:text-xl dark:text-dsubtext'>
          I’m a software engineer with over 2 years of experience. Currently, I’m focused on
          building cutting edge softwares at{' '}
          <a
            href='https://blox.xyz/'
            target='_blank'
            className='text-lpeach dark:text-dpeach'
            rel='noreferrer'
          >
            Blox.xyz
          </a>
        </p>
      </div>
    </div>
  )
}
