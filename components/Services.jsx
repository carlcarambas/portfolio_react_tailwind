import { Blocks, GanttChartSquare } from 'lucide-react'

const servicesData = [
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'Front-End Development',
    description: 'UI design and development using ReactJS or Angular',
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'Backend API Development',
    description:
      'RESTful API Development using Nodejs either NestJS or Express framework',
  },
]

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title">My Services</h2>
      </div>
    </section>
  )
}

export default Services
