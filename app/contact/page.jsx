import Form from '@/components/Form'
import { HomeIcon, MailIcon, PhoneCall } from 'lucide-react'

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text and illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="bg-primary h-[2px] w-[30px]"></span>
              Contact me 📨
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together</h1>
            <p className="subtitle max-w-[400px]">
              Open to fullstack roles and project work. Send me a note and I
              will get back to you.
            </p>
          </div>
          {/* illustration */}
          <div
            className="hidden xl:flex w-full 
          bg-contact_illustration_light dark:bg-contact_illustration_dark 
          bg-contain bg-no-repeat bg-top"
          />
        </div>

        {/* info text and form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* text */}
          <div
            className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24
          text-base xl:text-lg"
          >
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <a
                href="mailto:carlmark.carambas@gmail.com"
                className="hover:text-primary transition-all"
              >
                carlmark.carambas@gmail.com
              </a>
            </div>
            {/* address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Mabalacat, Pampanga, Philippines</div>
            </div>
            {/* number */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <a
                href="tel:+639053690338"
                className="hover:text-primary transition-all"
              >
                +63 905 369 0338
              </a>
            </div>
          </div>
          {/* form */}
          <Form />
        </div>
      </div>
    </section>
  )
}

export default Contact
