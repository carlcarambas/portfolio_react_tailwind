'use client'
import React, { useState } from 'react'
import { projectData } from '@/lib/developer-data'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

const DEFAULT_CATEGORY = 'all projects'

const uniqueCategories = [
  DEFAULT_CATEGORY,
  ...new Set(projectData.map((project) => project.category)),
]

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories)
  const [currentCategory, setCurrentCategory] = useState(DEFAULT_CATEGORY)
  console.log('categories', categories)
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={currentCategory}>
          <TabsList>
            {categories.map((category, index) => {
              return (
                <TabsTrigger key={index} value={category}>
                  {category}
                </TabsTrigger>
              )
            })}
          </TabsList>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects
