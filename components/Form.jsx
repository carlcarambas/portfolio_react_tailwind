'use client'

import { ArrowRightIcon, Mail, MessageSquare, Text, User } from 'lucide-react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name" />
        <User size={20} className="absolute right-6" />
      </div>
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" />
        <Mail size={20} className="absolute right-6" />
      </div>
      <div className="relative flex items-center">
        <Textarea id="message" placeholder="Type your message here." />
        <MessageSquare size={20} className="absolute right-6 top-4" />
      </div>
      <Button className="flex items-center max-w-[166px] gap-x-1">
        Send <ArrowRightIcon size={20} />
      </Button>
    </form>
  )
}

export default Form
