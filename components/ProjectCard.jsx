import Link from 'next/link'
import Image from 'next/image'
import { Card, CardHeader } from './ui/card'
import { Github, Link2Icon } from 'lucide-react'
import { Badge } from './ui/badge'

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <CardHeader className="p-0">
        {/* image of project */}
        <div
          className="relative w-full h-[300px] flex items-center justify-center
        bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%]"
        >
          <Image
            className="object-cover absolute bottom-0 shadow-2xl w-[247px] h-[250px] "
            src={project.image}
            width={247}
            height={250}
            alt=""
          />
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 top-4 left-5 absolute">
          {project.category}
        </Badge>
        <h4 className="h4 mb-2">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  )
}

export default ProjectCard
