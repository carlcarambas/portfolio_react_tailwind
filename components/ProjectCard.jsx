import Link from 'next/link'
import Image from 'next/image'
import { Card, CardHeader } from './ui/card'
import { FolderGit2, Link2Icon } from 'lucide-react'
import { Badge } from './ui/badge'

const ProjectCard = ({ project, cardStyle = null }) => {
  return (
    <Card
      className={
        cardStyle ? cardStyle : 'group overflow-hidden relative min-h-[478px]'
      }
    >
      <CardHeader className="p-0">
        {/* image of project */}
        <div
          className="relative w-full h-[300px] flex items-center justify-center
        bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light 
        xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden"
        >
          <Image
            className="object-cover absolute bottom-0 shadow-2xl w-[247px] h-[250px] "
            src={project.image}
            width={247}
            height={250}
            alt=""
          />
          {/* buttons */}
          <div className="flex gap-x-4">
            {/* link */}
            <Link
              href={project.link}
              className="bg-secondary/60 w-[54px] h-[54px] rounded-full 
              flex justify-center items-center
              scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100
              transition-all duration-200"
            >
              <Link2Icon className="text-white" />
            </Link>
            {/* github */}
            <Link
              href={project.github}
              className="bg-secondary/60 w-[54px] h-[54px] rounded-full 
              flex justify-center items-center
              scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100
              transition-all duration-400"
            >
              <FolderGit2 className="text-white" />
            </Link>
          </div>
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
