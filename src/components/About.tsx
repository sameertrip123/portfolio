import React from 'react'
import { Skills } from './Skills'

export const About = (props: {}) => {
  return (
    <div
      id='about'
      className='flex flex-col justify-center mx-auto mt-[-96px] px-8 w-full max-w-[920px] h-screen text-left'
    >
      <div className='mb-16 font-mono text-2xl text-lprimary md:text-4xl dark:text-dprimary'>
        about
      </div>
      <div className='flex md:flex-row flex-col'>
        <p className='my-auto md:mr-24 mb-16 text-base text-ltext md:text-lg dark:text-dtext'>
          Engineer with over 2 years of experience building products at pace and scale. Bringing in
          the declarative paradigm at product development. A dedicated problem solver. Experienced
          in almost all corners of business-driven software development. Worked extensively in
          Fullstack Development and AI as well as skilled in Microservices, Deep Learning,
          Distributed Systems, Python, Go, Kotlin, Amazon Web Service, Low-Level Design, Algorithm,
          and Data Structure.
        </p>
        <div className='mx-auto'>
          <Skills />
        </div>
      </div>
    </div>
  )
}
