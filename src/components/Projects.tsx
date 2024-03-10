import React from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { project, projects } from './data'

const Card = (props: { proj: project }) => (
  <div className='flex flex-col flex-shrink-0 justify-between bg-lbg dark:bg-dbg hover:shadow-glow hover:dark:shadow-glowdark mx-auto rounded-xl w-56 h-64 hover:scale-110 duration-200 ease-out'>
    <p className='p-1 w-full text-center text-lprimary text-xl dark:text-dprimary'>
      {props.proj.title}
    </p>
    <p className='px-4 w-full text-ltext text-sm dark:text-dtext'>{props.proj.description}</p>
    <div className='flex justify-between my-3 w-full'>
      <div></div>
      {(props.proj.docLink ?? '') !== '' && (
        <a href={props.proj.docLink} target={'_blank'} rel='noreferrer'>
          <HiOutlineDocumentText className='text-ltext dark:text-dtext' size={25} />
        </a>
      )}
      <a href={props.proj.githubLink} target={'_blank'} rel='noreferrer'>
        <FiGithub className='text-ltext dark:text-dtext' size={25} />
      </a>
      {(props.proj.outLink ?? '') !== '' && (
        <a href={props.proj.outLink} target={'_blank'} rel='noreferrer'>
          <FiExternalLink className='text-ltext dark:text-dtext' size={25} />
        </a>
      )}
      <div></div>
    </div>
  </div>
)

export const Projects = () => {
  return (
    <div
      id='projects'
      className='flex flex-col justify-center mx-auto my-[64px] px-8 w-full max-w-[920px] min-h-screen text-left'
    >
      <div className='mb-16 font-mono text-2xl text-lprimary md:text-4xl dark:text-dprimary'>
        projects
      </div>
      <div className='gap-y-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        {projects.map((p, i) => (
          <Card proj={p} key={i} />
        ))}
      </div>
      <div className='flex'>
        <p className='mt-8 text-ltext dark:text-dtext'>
          {'>'} feel free to find more projects{' '}
          <a
            className='underline'
            href='https://github.com/ashis0013'
            target='_blank'
            rel='noreferrer'
          >
            here
          </a>
        </p>
      </div>
    </div>
  )
}
