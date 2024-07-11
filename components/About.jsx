import DevImg from './DevImg'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Phone,
} from 'lucide-react'

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Carl Carambas',
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+639053690338',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'carlmark.carambas@gmail.com',
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'Pampanga, Philippines 2010',
  },
]

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: 'Saint Louis University',
        qualification: 'Bachelor of Science',
      },
    ],
  },
  {
    title: 'experience',
    data: [
      {
        university: 'Ulventech',
        qualification: 'Senior Fullstack Engineer',
      },
      {
        university: 'Airasia',
        qualification: 'Senior Software Engineer',
      },
      {
        university: 'Indra',
        qualification: 'Senior Software Engineer',
      },
      {
        university: 'Sunmoon Technologies',
        qualification: 'Fullstack Software Engineer',
      },
      {
        university: 'Twist Resources',
        qualification: 'Fullstack Software Engineer',
      },
    ],
  },
]

const skillData = [
  {
    title: 'skills',
    data: [
      {
        name: 'HTML, CSS',
      },
      {
        name: 'Javascript, Python',
      },
      {
        name: 'Front-End Development',
      },
      {
        name: 'Back-End Development',
      },
    ],
  },
  {
    title: 'tools',
    data: [
      {
        imgPath: '/about/vscode.svg',
      },
      {
        imgPath: '/about/vscode.svg',
      },
      {
        imgPath: '/about/vscode.svg',
      },
      {
        imgPath: '/about/vscode.svg',
      },
    ],
  },
]

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title)
  }
  console.log(getData(qualificationData, 'education'))
  return (
    <section className="xl:h-[868px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div>
          {/* image */}
          <div>
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark 
            w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
        </div>
      </div>
    </section>
    // <div>
    //   {infoData.map((info, index) => (
    //     <div>{info.text}</div>
    //   ))}
    // </div>
  )
}

export default About
