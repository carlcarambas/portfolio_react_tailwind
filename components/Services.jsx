import { PanelsTopLeft, CodeXml, Layers3 } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

const servicesData = [
  {
    icon: <PanelsTopLeft size={72} strokeWidth={0.9} />,
    title: 'Frontend Development',
    description: 'UI design and development, build, enhance and fix features',
  },
  {
    icon: <CodeXml size={72} strokeWidth={0.9} />,
    title: 'Backend Development',
    description:
      'RESTful API Development, Database integration, CI/CD and Documentation',
  },
  {
    icon: <Layers3 size={72} strokeWidth={0.9} />,
    title: 'Full-Stack Development',
    description: `Develop and maintain web services and interfaces, front-end and back-end process, perform tests,
    troubleshoot and fix bugs, documentation and team collaboration`,
  },
]

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 gap-y-12 xl:gap-y-24 xl:gap-x-8 justify-center">
          {servicesData.map((item, index) => {
            return (
              <Card
                key={index}
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10
                justify-center items-center relative"
              >
                <CardHeader className="absolute -top-[60px]">
                  <div
                    className="w-[140px] h-[80px] bg-white text-primary
                  dark:bg-background flex justify-center items-center"
                  >
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
