'use client'
import Link from 'next/link'
import { Button } from './ui/button'

// swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import swiper modules
import { Pagination } from 'swiper/modules'
import ProjectCard from '@/components/ProjectCard'

const projectData = [
  {
    image: '/work/3.png',
    category: 'react js',
    name: 'Nexa Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente enim placeat inventore aut. Obcaecati, odio!',
    link: '/',
    github: '/',
  },
  {
    image: '/work/2.png',
    category: 'next js',
    name: 'Lumina Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente enim placeat inventore aut. Obcaecati, odio!',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'next js',
    name: 'Evolve Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente enim placeat inventore aut. Obcaecati, odio!',
    link: '/',
    github: '/',
  },
]

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-40">
      <div className="container mx-auto">
        {/* text */}
        <div
          className="max-w-[400px] mx-auto xl:mx-0 text-center 
        xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start"
        >
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odio
            ullam impedit!
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        <div>Slider</div>
      </div>
    </section>
  )
}

export default Work