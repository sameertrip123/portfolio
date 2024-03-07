import React, { useEffect, useState } from 'react'
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from 'react-icons/md'

export const Skills = () => {
  const vals = [
    ['go', 'kotlin', 'typescript', 'microservices'],
    ['react', 'node.js', 'python', 'aws'],
    ['java', 'android dev', 'problem solving', 'LLD'],
  ]

  const [idx, setIdx] = useState(0)
  const prevVals = () => setIdx((x) => (vals.length + x - 1) % vals.length)
  const nextVals = () => setIdx((x) => (x + 1) % vals.length)
  useEffect(() => {
    setInterval(prevVals, 7500)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='flex flex-col flex-shrink-0 dark:border-dprimary shadow-lg border border-lprimary w-56 h-64 text-ltext dark:text-dtext duration-200 ease-in-out'>
      <div className='hover:bg-lprimary dark:hover:bg-dprimary py-2 w-full text-center text-xl hover:text-dtext'>
        Skills
      </div>
      <div className='bg-lprimary dark:bg-dprimary w-full h-[1px]'></div>
      <div className='flex w-full h-full'>
        <MdOutlineArrowBackIosNew className='my-auto' onClick={prevVals} />
        <div className='flex flex-col m-auto text-center'>
          {vals[idx].map((skill, i) => (
            <div
              key={i}
              className='my-2 w-full font-light font-mono text-lg duration-200 ease-out hover:scale-110'
            >
              {skill}
            </div>
          ))}
        </div>
        <MdOutlineArrowForwardIos className='my-auto' onClick={nextVals} />
      </div>
    </div>
  )
}
