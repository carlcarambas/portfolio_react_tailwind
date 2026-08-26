'use client'

import { RiLinkedinFill, RiGithubFill, RiFacebookFill } from 'react-icons/ri'

import Link from 'next/link'
const icons = [
  {
    path: 'https://www.linkedin.com/in/mac-carambas/',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/carlcarambas',
    name: <RiGithubFill />,
  },
  {
    path: '/',
    name: <RiFacebookFill />,
  },
]

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <Link
          key={index}
          href={icon.path}
          target={icon.path.startsWith('http') ? '_blank' : undefined}
          rel={icon.path.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          <div className={`${iconsStyles}`}>{icon.name}</div>
        </Link>
      ))}
    </div>
  )
}

export default Socials
