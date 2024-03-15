import React from 'react'
import { Button } from './Navbar'
import CV from '../assets/cv.pdf'
import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'

export const Contact = () => {
  return (
    <div
      id='contact'
      className='flex flex-col justify-center mx-auto mt-[-96px] px-8 w-full max-w-[920px] h-screen text-left'
    >
      <div className='mb-8 font-mono text-2xl text-lprimary md:text-4xl dark:text-dprimary'>
        Contact
      </div>
      <div className='grid grid-cols-1 md:grid-cols-5'>
        <div className='md:col-span-3 mr-8 mb-8'>
          <p className='my-8 text-base text-lprimary md:text-lg dark:text-dprimary'>
            I am actively looking for new roles right now. Feel free to reach out to me for any
            opportunities or discussions.
          </p>
          <div>
            <Button
              name='Mail me'
              onClick={() => {
                const a = document.createElement('a')
                a.href = 'mailto:sameertrip123@gmail.com'
                a.rel = 'noreferrer'
                a.click()
              }}
            />
            <Button
              name='Résumé'
              onClick={() => {
                const a = document.createElement('a')
                a.href = CV
                a.target = '_blank'
                a.click()
              }}
            />
          </div>
        </div>
        <div className='md:col-span-2 my-8'>
          <div className='font-mono text-2xl text-lprimary dark:text-dprimary'>
            find me elsewhere
          </div>
          <div className='bg-lsubtext dark:bg-dsubtext mt-2 px-16 w-full h-[1px]'></div>
          <div className='flex justify-around mt-4 w-full'>
            <a href='https://www.linkedin.com/in/sameertri039/' target='_blank' rel='noreferrer'>
              <FiLinkedin
                className='text-lprimary dark:text-dtext hover:scale-110 hover:ease-out'
                size={25}
              />
            </a>
            <a href='https://github.com/sameertrip123' target='_blank' rel='noreferrer'>
              <FiGithub
                className='text-lprimary dark:text-dtext hover:scale-110 hover:ease-out'
                size={25}
              />
            </a>
            <a href='https://leetcode.com/sameertri039/' target='_blank' rel='noreferrer'>
              <SiLeetcode
                className='text-lprimary dark:text-dtext hover:scale-110 hover:ease-out'
                size={25}
              />
            </a>
            <a href='https://www.instagram.com/sameertri039/' target='_blank' rel='noreferrer'>
              <FiInstagram
                className='text-lprimary dark:text-dtext hover:scale-110 hover:ease-out'
                size={25}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
