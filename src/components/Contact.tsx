import React from 'react'
import { Button } from './Navbar'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'

export const Contact = () => {
  return (
    <div
      id='contact'
      className='flex flex-col justify-center mx-auto mt-[-96px] px-8 w-full max-w-[920px] h-screen text-left'
    >
      <div className='mb-8 font-mono text-2xl text-lprimary md:text-4xl dark:text-dprimary'>
        contact
      </div>
      <div className='grid grid-cols-1 md:grid-cols-5'>
        <div className='md:col-span-3 mr-8 mb-8'>
          <p className='my-8 text-base text-ltext md:text-lg dark:text-dtext'>
            I am actively looking for new roles right now but feel free to reach out to me for any
            discussions or opportunities.
          </p>
          <div>
            <Button
              name='mail me'
              onClick={() => {
                const a = document.createElement('a')
                a.href = 'mailto:paulashis0013@gmail.com'
                a.rel = 'noreferrer'
                a.click()
              }}
            />
          </div>
        </div>
        <div className='md:col-span-2 my-8'>
          <div className='font-bold text-2xl text-lsubtext dark:text-dsubtext'>
            find me elsewhere
          </div>
          <div className='bg-lsubtext dark:bg-dsubtext mt-2 px-16 w-full h-[1px]'></div>
          <div className='flex justify-around mt-4 w-full'>
            <a
              href='https://www.linkedin.com/in/ashis-paul-173479150/'
              target='_blank'
              rel='noreferrer'
            >
              <FiLinkedin className='text-ltext dark:text-dtext' size={25} />
            </a>
            <a href='https://github.com/ashis0013' target='_blank' rel='noreferrer'>
              <FiGithub className='text-ltext dark:text-dtext' size={25} />
            </a>
            <a
              href='https://scholar.google.com/citations?user=CPM11WAAAAAJ'
              target='_blank'
              rel='noreferrer'
            >
              <SiLeetcode className='text-ltext dark:text-dtext' size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
