'use client'
import React, { useState } from 'react'
import { projectData } from '@/lib/developer-data'

const uniqueCategories = [
  ...new Set(projectData.map((project) => project.category)),
]

const Projects = () => {
  return (
    <section className="min-h-screen pt-12">
      {JSON.stringify(uniqueCategories)}
    </section>
  )
}

export default Projects
