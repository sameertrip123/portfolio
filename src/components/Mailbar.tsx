import React from 'react'

export const Mailbar = () => {
  return (
    <div className='scale-0 lg:scale-100 right-0 bottom-0 fixed mr-12 duration-200 ease-out'>
      <div className='flex flex-col items-center hover:scale-110 duration-300 ease-out'>
        <div
          className='my-2 font-mono font-thin text-ltext text-sm dark:text-dtext'
          style={{ writingMode: 'vertical-rl' }}
        >
          <a
            className='hover:text-lprimary dark:hover:text-dprimary visited:text-llav dark:visited:text-dlav'
            href='mailto:paulashis0013@gmail.com'
          >
            paulashis0013@gmail.com
          </a>
        </div>
        <div className='bg-ltext dark:bg-dtext w-[1px] h-28'></div>
      </div>
    </div>
  )
}
