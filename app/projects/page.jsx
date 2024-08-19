'use client'
import React, { useState } from 'react'
import { projectData } from '@/lib/developer-data'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ProjectCard from '@/components/ProjectCard'

const ALL_PROJECTS = 'all projects'

const uniqueCategories = [
  ALL_PROJECTS,
  ...new Set(projectData.map((project) => project.category)),
]

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories)
  const [currentCategory, setCurrentCategory] = useState(ALL_PROJECTS)

  const filteredProjects = projectData.filter((project) => {
    return currentCategory === ALL_PROJECTS
      ? project
      : project.category === currentCategory
  })

  console.log('filteredProjects', filteredProjects)
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={currentCategory} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  key={index}
                  value={category}
                  onClick={() => setCurrentCategory(category)}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              )
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl: mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={currentCategory} key={index}>
                  <ProjectCard
                    project={project}
                    cardStyle="group overflow-hidden relative min-h-[100%]"
                  />
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects
