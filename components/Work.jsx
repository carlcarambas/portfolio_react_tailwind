'use client'
import Link from 'next/link'
import { Button } from './ui/button'

import { Swiper, SwiperSlide } from 'swiper/react'

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
    category: 'next js / nest js',
    name: 'Copyt',
    description:
      'An all in one operating system for resellers, this application includes Smart Listing & Delisting, Inventory Management, Consignment and Sourcing.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'react js / express js',
    name: 'Alto Platform',
    description:
      'ALTO is a contract compliance system, its main objective is to provide platform for all markets to monitor and maintain contract agreements.',
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
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 } }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only first 4 projects */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Work
