import React from 'react'
import Card from '@/components/Cards'
import Hero from '@/components/Hero.jsx'
import { IoIosPeople,IoIosSearch } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import IconBadge from '@/components/IconBadge';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import Section from '@/components/Section';

const dataCards = [
    {
        title: 'Conexões Inteligentes',
        footer: 'Encontre profissionais alinhados com suas habilidades, valores e objetivos de carreira',
        icon: <IoIosPeople />, bgClass: 'bg-blue-700/30', textClass: 'text-blue-400'
    },
    {
        title: 'Desenvolvimento Contínuo',
        footer: 'Compartilhe conhecimento e desenvolva novas competências através da colaboração',
        icon: <FaCheckCircle />, bgClass: 'bg-green-700/30', textClass: 'text-green-400'
    },
    {
        title: 'Oportunidades Reais',
        footer: 'Descubra projetos, vagas e colaborações que fazem sentido para sua trajetória',
        icon: <BsBriefcaseFill />, bgClass: 'bg-purple-700/30', textClass: 'text-purple-400'
    },
    {
        title: 'Perfis Completos',
        footer: 'Mostre suas habilidades técnicas, soft skills e experiências de forma profissional',
        icon: <IoBookOutline />, bgClass: 'bg-orange-700/30', textClass: 'text-orange-400'
    },
    {
        title: 'Recomendações',
        footer: 'Recomende e seja recomendado por profissionais da sua rede',
        icon: <MdOutlineEmail />, bgClass: 'bg-red-700/30', textClass: 'text-red-400'
    },
    {
        title: 'Busca Avançada',
        footer: 'Filtre por área, cidade, tecnologia e encontre exatamente quem você procura',
        icon: <IoIosSearch />, bgClass: 'bg-emerald-700/30', textClass: 'text-emerald-400'
    }
]

export default function Home() {
  return (
    <main>
      <Hero
        title = "O Futuro do Trabalho Começa Aqui"
        subtitle = "Conectando pessoas, competências e propósito através da tecnologia"
        text = "Uma plataforma que transforma relações profissionais e promove um futuro mais justo, inclusivo e sustentável"
        >
        <Link to="/dashboard" className="inline-block">
            <Button variant='transparent' className="border-2 bg-black hover:bg-transparent hover:text-black">
                Comece Agora
            </Button>
        </Link>
        <Link to="/about" className="inline-block">
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black">
                Saiba Mais
            </Button>
        </Link>
      </Hero>
      <Section
        className='py-16'
        title="Por que escolher o SkillBridge?"
        subtitle="A plataforma completa para o profissional do futuro"
        >
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 justify-items-center">
            {dataCards.map((f) => (
                <Card
                key={f.title}
                variant="elevated"
                className="bg-zinc-700 transform transition-transform duration-200 ease-out hover:-translate-y-2 hover:shadow-xl mx-auto max-w-sm"
                header={<IconBadge icon={f.icon} bgClass={f.bgClass} textClass={f.textClass} />}
                footer={f.footer}
                >
                    {f.title}
                </Card>
            ))}
        </div>
      </Section>
    </main>
  )
}


