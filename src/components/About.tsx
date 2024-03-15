import React from 'react'
import { Skills } from './Skills'

export const About = (props: {}) => {
  return (
    <div
      id='about'
      className='flex flex-col justify-center mx-auto mt-[-96px] px-8 w-full max-w-[920px] h-screen text-left'
    >
      <div className='mb-16 font-mono text-2xl text-lprimary md:text-4xl dark:text-dprimary'>
        About
      </div>
      <div className='flex md:flex-row flex-col'>
        <p className='my-auto md:mr-24 mb-16 text-lprimary text-sm md:text-lg md:text-md dark:text-dprimary'>
          While I'm relatively new to the field of software engineering, I offer a fresh perspective
          in product development. My foundation in various aspects of software development is solid,
          particularly in Backend Development. Though my experience in frontend development is
          limited, I'm eager to learn and grow in this area. Skilled in languages like C/C++ and
          Java, coupled with expertise in Data Structures & Algorithms and Distributed Systems, I'm
          dedicated to continuous learning and problem-solving to deliver impactful solutions.
        </p>
        <div className='mx-auto'>
          <Skills />
        </div>
      </div>
    </div>
  )
}
