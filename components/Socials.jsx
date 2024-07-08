'use client'

import { RiLinkedinFill, RiGithubFill, RiFacebookFill } from 'react-icons/ri'

import Link from 'next/link'
const icons = [
  {
    path: '/',
    name: <RiLinkedinFill />,
  },
  {
    path: '/',
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
        <Link key={index} href={icon.path}>
          <div className={`${iconsStyles}`}>{icon.name}</div>
        </Link>
      ))}
    </div>
  )
}

export default Socials
