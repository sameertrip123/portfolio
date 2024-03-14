import { useState } from 'react'
import { FiGithub } from 'react-icons/fi'
import { projects } from './data'

export const Projects = () => {
  const [project, setProject] = useState(0)

  return (
    <div
      id='project'
      className='flex flex-col justify-center mx-auto mt-[-96px] px-8 w-full max-w-[920px] h-screen text-left'
    >
      <div className='mb-6 font-mono text-2xl text-lprimary md:text-4xl dark:text-dprimary'>
        projects
      </div>
      <div className='flex flex-col mx-auto'>
        <div className='flex md:hidden m-2'>
          {projects.map((e, i) => (
            <div
              key={i}
              className={`flex h-12 w-42 hover:bg-lsurface dark:hover:bg-dsurface ${
                i === project
                  ? 'text-lprimary dark:text-dprimary'
                  : 'text-lprimary dark:text-dprimary'
              }`}
              onClick={() => setProject(i)}
            >
              <div className='mx-4 my-auto'>{e.title}</div>
            </div>
          ))}
        </div>

        <div className='flex mx-auto'>
          <div className='md:flex flex-col hidden'>
            {projects.map((e, i) => (
              <div
                key={i}
                className={`flex h-12 w-42 mb-0.5 hover:cursor-pointer hover:bg-lprimary dark:border-dprimary hover:dark:bg-dprimary mx-2 my-2 px-2 py-2 border border-lprimary rounded font-semibold text-lprimary hover:text-dprimary dark:hover:text-lprimary dark:text-dprimary ${
                  i === project ? 'text-lprimary dark:text-dprimary' : 'text-ltext dark:text-dtext'
                }`}
                onClick={() => setProject(i)}
              >
                <div className='mx-4 my-auto'>{e.title}</div>
              </div>
            ))}
          </div>
          <div className='flex flex-col ml-4 max-w-[624px] h-[364px]'>
            <p className='flex items-center gap-3 m-2 text-ltext text-xl md:text-2xl dark:text-dtext'>
              {projects[project].title}{' '}
              <a
                href={projects[project].githubLink}
                target='_blank'
                className='text-lprimary dark:text-dprimary'
                rel='noreferrer'
              >
                <FiGithub className='text-ltext dark:text-dtext' size={20} />{' '}
              </a>
            </p>
            <ul className='flex items-center gap-3 m-2 font-mono text-llav text-xs md:text-sm dark:text-dlav'>
              {projects[project].techStack.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <ul className='mx-4 list-disc'>
              {projects[project].description.map((w, i) => (
                <li key={i} className='mb-2 text-base text-ltext md:text-md dark:text-dtext'>
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
