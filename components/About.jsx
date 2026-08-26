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
  Briefcase,
} from 'lucide-react'
import Image from 'next/image'

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Carl Mark Carambas',
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+63 905 369 0338',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'carlmark.carambas@gmail.com',
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'Mabalacat, Pampanga, PH',
  },
]

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: 'Saint Louis University, Baguio',
        qualification: 'Bachelor of Information Technology',
        years: '2007 - 2012',
      },
    ],
  },
  {
    title: 'experience',
    data: [
      {
        company: 'Flexisource IT (Client: SCA)',
        role: 'Senior Fullstack Developer',
        years: 'Apr 2025 - Present',
      },
      {
        company: 'Ulventech (Client: Kinesso)',
        role: 'Senior Software Engineer',
        years: 'Jun 2023 - Apr 2025',
      },
      {
        company: 'AirAsia',
        role: 'Senior Software Engineer',
        years: 'Feb 2022 - Jun 2023',
      },
      {
        company: 'Indra Philippines (Client: AirAsia)',
        role: 'Fullstack Developer',
        years: 'Sep 2020 - Jan 2022',
      },
      {
        company: 'Sunmoon Technologies',
        role: 'Full Stack Developer',
        years: 'Sep 2018 - Aug 2020',
      },
      {
        company: 'TwistResources Inc.',
        role: 'Software Engineer',
        years: 'Jul 2016 - Sep 2018',
      },
    ],
  },
]

const skillData = [
  {
    title: 'Frontend',
    data: [
      {
        imgPath: '/about/react.svg',
        alt: 'ReactJS',
      },
      {
        imgPath: '/about/angular.svg',
        alt: 'Angular',
      },
      {
        imgPath: '/about/nextjs.svg',
        alt: 'NextJS',
      },
      {
        imgPath: '/about/typescript.svg',
        alt: 'TypeScript',
      },
      {
        imgPath: '/about/redux.svg',
        alt: 'Redux',
      },
      {
        imgPath: '/about/materialui.svg',
        alt: 'MaterialUI',
      },
      {
        imgPath: '/about/tailwind.svg',
        alt: 'Tailwind',
      },
    ],
  },
  {
    title: 'Backend',
    data: [
      {
        imgPath: '/about/nodejs.svg',
        alt: 'NodeJS',
      },
      {
        imgPath: '/about/express.svg',
        alt: 'Express',
      },
      {
        imgPath: '/about/nestjs.svg',
        alt: 'NestJS',
      },
      {
        imgPath: '/about/python.svg',
        alt: 'Python',
      },
      {
        imgPath: '/about/postgres.svg',
        alt: 'Postgres',
      },
      {
        imgPath: '/about/mongodb.svg',
        alt: 'MongoDB',
      },
      {
        imgPath: '/about/firebase.svg',
        alt: 'Firebase',
      },
    ],
  },
  {
    title: 'Web Services & Tools',
    data: [
      {
        imgPath: '/about/gcp.svg',
        alt: 'Google Cloud Services',
      },
      {
        imgPath: '/about/aws.svg',
        alt: 'Amazon Web Services',
      },
      {
        imgPath: '/about/vscode.svg',
        alt: 'Visual Studio Code',
      },
      {
        imgPath: '/about/git.svg',
        alt: 'Git',
      },
      {
        imgPath: '/about/jira.svg',
        alt: 'Jira',
      },
      {
        imgPath: '/about/docker.svg',
        alt: 'Docker',
      },
    ],
  },
]

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title)
  }
  return (
    // xl:h-[860px] pb-12 py-24 xl:py-32 xl:mb-16
    <section className="pb-12 py-24 xl:py-32 mb-16 xl:mb-0">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark 
            w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList
                className="w-full grid xl:grid-cols-3 xl:max-w-[520px] 
              xl:border dark:border-none"
              >
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Shipping Production Software for 10 Years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I work across the whole stack &mdash; React and Next.js
                      interfaces, NestJS and Express APIs, and cloud-native
                      deployments on AWS and GCP &mdash; for airlines, media,
                      and commerce teams.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        )
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Languages</div>
                      <div className="border-b border-border" />
                      <div>English, Filipino</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      Experiences
                    </h3>
                    {/* experience & education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, 'experience').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, 'experience').data.map(
                            (item, index) => {
                              const { company, role, years } = item
                              return (
                                <div key={index} className="flex gap-x-8 group">
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div
                                      className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] 
                                    group-hover:translate-y-[80px] transition-all duration-700"
                                    ></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              )
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, 'education').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, 'education').data.map(
                            (item, index) => {
                              const { university, qualification, years } = item
                              return (
                                <div key={index} className="flex gap-x-8 group">
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div
                                      className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] 
                                    group-hover:translate-y-[80px] transition-all duration-700"
                                    ></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              )
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tech Stack</h3>
                    {skillData.map((skill, index) => {
                      const { data } = skill

                      return (
                        <div key={index} className="mb-8">
                          <h4 className="text-xl font-semibold mb-2 xl:text-left">
                            {skill.title}
                          </h4>
                          {/* tech list */}
                          <div className="border-b border-border mb-4" />
                          <div className="flex gap-x-8 justify-center xl:justify-start dark:backdrop-brightness-125 rounded p-4">
                            {data.map((item, _index) => {
                              const { imgPath, alt } = item
                              return (
                                <div key={_index}>
                                  <div className="relative group">
                                    <Image
                                      src={imgPath}
                                      width={48}
                                      height={48}
                                      alt={alt}
                                      priority
                                    />
                                    <span
                                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 
                                    translate-y-full opacity-0 group-hover:opacity-90 transition-opacity duration-300 text-sm 
                                    bg-primary text-white dark:text-black p-1 rounded"
                                    >
                                      {alt}
                                    </span>
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
