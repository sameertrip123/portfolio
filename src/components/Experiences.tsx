import React, { useState } from 'react'
import { experiences } from './data'

export const Experiences = () => {
  const [company, setCompany] = useState(0)

  return (
    <div
      id='experience'
      className='flex flex-col justify-center mx-auto mt-[-96px] px-8 w-full max-w-[920px] h-screen text-left'
    >
      <div className='mb-6 font-mono text-2xl text-lprimary md:text-4xl dark:text-dprimary'>
        Experiences
      </div>
      <div className='flex flex-col mx-auto'>
        <div className='flex md:hidden m-2'>
          {experiences.map((e, i) => (
            <div
              key={i}
              className={`flex h-12 w-42 hover:bg-lsurface dark:hover:bg-dsurface ${
                i === company ? 'text-lprimary dark:text-dprimary' : 'text-ltext dark:text-dtext'
              }`}
              onClick={() => setCompany(i)}
            >
              <div className='mx-4 my-auto'>{e.company}</div>
            </div>
          ))}
        </div>

        <div className='flex mx-auto'>
          <div className='md:flex flex-col hidden'>
            {experiences.map((e, i) => (
              <div
                key={i}
                className={`flex h-12 w-42 mb-0.5 hover:cursor-pointer hover:bg-lprimary dark:border-dprimary hover:dark:bg-dprimary mx-2 my-2 px-2 py-2 border border-lprimary rounded font-semibold text-lprimary hover:text-dtext dark:hover:text-lprimary dark:text-dprimary ${
                  i === company
                    ? 'text-lprimary dark:text-dprimary'
                    : 'text-lprimary dark:text-dtext'
                }`}
                onClick={() => setCompany(i)}
              >
                <div className='mx-4 my-auto'>{e.company}</div>
              </div>
            ))}
          </div>
          <div className='flex flex-col ml-4 max-w-[624px] h-[364px]'>
            <p className='m-2 text-lprimary text-xl md:text-2xl dark:text-dprimary'>
              {experiences[company].position}{' '}
              <a
                href={experiences[company].companyLink}
                target='_blank'
                className='text-llav dark:text-dlav'
                rel='noreferrer'
              >
                {' '}
                @{experiences[company].company}
              </a>
            </p>
            <p className='m-2 font-mono text-llav text-xs md:text-sm dark:text-dlav'>
              {experiences[company].startDate} - {experiences[company].endDate ?? 'Present'}
            </p>
            <ul className='mx-4 list-disc'>
              {experiences[company].description.map((w, i) => (
                <li key={i} className='mb-2 text-base text-lprimary dark:text-dprimary'>
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
