import ContactForm from '@/components/ContactForm'
import FeatureItem from '@/components/FeatureItem'
import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone, LuMapPin } from "react-icons/lu";
import { SiInstagram } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const features = [
  {
    id: 'email',
    title: 'Email',
    description: 'contato@skillbridge.com',
    icon: <MdOutlineEmail/>,
    bgClass: 'bg-blue-700/30'
  },
  {
    id: 'phone',
    title: 'Telefone',
    description: '+55 (11) 99999-9999',
    icon: <LuPhone/>,
    bgClass: 'bg-green-700'
  },
  {
    id: 'address',
    title: 'Endereço',
    description: 'Av. Paulista, 1000 - São Paulo, SP - 01310-100',
    icon: <LuMapPin/>,
    bgClass: 'bg-purple-700'
  }
]


export default function Contact() {
  return (
    <div className="bg-gray-200 dark:bg-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <ContactForm />
        </div>
        <aside className="md:col-span-1 flex flex-col gap-6">
          {features.map((f) => (
            <div key={f.id} className='bg-gray-300 dark:bg-zinc-700 rounded-xl p-6 transform transition-transform duration-200 ease-out hover:-translate-y-2 hover:shadow-xl'>
              <FeatureItem {...f}/>
            </div>
          ))}
        </aside>
      </div>
    </div>
  )
}
