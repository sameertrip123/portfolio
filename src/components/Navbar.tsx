import React, { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import useDarkMode from '../hooks/useDark'

type Props = {
  name: string
  tclass: string
  onClk?: () => void
}

const TextMenu = ({ name, tclass, onClk = () => {} }: Props) => (
  <li
    className={`text-lprimary font-semibold dark:text-dprimary hover:text-lprimary dark:hover:text-dprimary hover:scale-105 hover:ease-out ${tclass}`}
    onClick={onClk}
  >
    <a href={`#${name.toLowerCase()}`}>{name}</a>
  </li>
)

export const Button = (props: { name: string; onClick: () => void }) => (
  <button
    onClick={props.onClick}
    className='dark:border-dprimary hover:bg-lprimary hover:dark:bg-dprimary mx-2 my-2 px-6 py-2 border border-lprimary rounded font-semibold text-lprimary hover:text-dtext dark:hover:text-lprimary dark:text-dprimary hover:ease-out shadow-xl'
  >
    {props.name}
  </button>
)

export const Navbar = () => {
  const elements = ['About', 'Experience', 'Project', 'Contact']
  const [nav, setNav] = useState(false)
  const [theme, setTheme] = useDarkMode()
  const isDark = theme === 'dark'
  const download = () => {
    const a = document.createElement('a')
    a.href = 'https://sameertrip123.github.io/cv'
    a.target = '_blank'
    a.click()
  }

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='top-0 left-0 fixed bg-lbg dark:bg-dbg shadow-sm w-full'>
      <nav className='flex justify-between items-center mx-auto px-8 max-w-[1240px] h-24 duration-500 ease-in-out'>
        <h1 className='w-full font-bold text-3xl text-lprimary dark:text-dprimary'>sameer</h1>
        <ul className='md:flex hidden'>
          {elements.map((e, i) => (
            <TextMenu key={i} name={e} tclass='p-4' />
          ))}
          <Button name='Résumé' onClick={download} />
        </ul>
        <DarkModeSwitch
          className='mx-6'
          onChange={() => {
            setTheme(isDark ? 'light' : 'dark')
          }}
          checked={!isDark}
          size={40}
          sunColor={'#eff1f5'}
          moonColor={'#181926'}
        />
        <div className='block md:hidden'>
          <Hamburger
            toggled={nav}
            onToggle={handleNav}
            size={20}
            color={isDark ? '#eff1f5' : '#181926'}
          />
        </div>
        {nav && (
          <div
            className='top-24 left-0 fixed md:hidden backdrop-blur-sm w-full h-full'
            onClick={handleNav}
          ></div>
        )}
        <ul
          className={`md:hidden fixed shadow-lg top-24 w-[60%] bg-lbg dark:bg-dbg h-full ease-in-out duration-300 ${
            nav ? 'right-0' : 'right-[-100%]'
          }`}
        >
          <ul className='flex flex-col items-center'>
            {elements.map((e, i) => (
              <TextMenu
                name={e}
                key={i}
                onClk={handleNav}
                tclass={`font-mono text-xl p-4 items-center ${
                  i !== 3 ? ' border-b border-dprimary' : ''
                }`}
              />
            ))}
            <Button name='resume' onClick={download} />
          </ul>
        </ul>
      </nav>
    </div>
  )
}
