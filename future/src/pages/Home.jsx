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

export default function Home() {
  return (
    <main>
      <Hero>
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
      <section className="bg-zinc-800 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">Por que escolher o SkillBridge?</h2>
          <p className='text-white mt-4 text-lg sm:text-xl mb-6'>A plataforma completa para o profissional do futuro</p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 justify-items-center">
            <Card 
                variant="elevated" 
                className="bg-zinc-700 transform transition-transform duration-200 ease-out hover:-translate-y-2 hover:shadow-xl flex flex-col items-center justify-center mx-auto max-w-sm" 
                header={<IconBadge icon={<IoIosPeople />} bgClass="bg-blue-700/30" textClass='text-blue-400'/>} 
                footer="Encontre profissionais alinhados com suas habilidades, valores e objetivos de carreira"
                >
                Conexões Inteligentes
            </Card>
            <Card 
                variant="elevated" 
                className="bg-zinc-700 transform transition-transform duration-200 ease-out hover:-translate-y-2 hover:shadow-xl mx-auto max-w-sm" 
                header={<IconBadge icon={<FaCheckCircle />} bgClass="bg-green-700/30" textClass='text-green-400'/>} 
                footer="Compartilhe conhecimento e desenvolva novas competências através da colaboração"
                >
                Desenvolvimento Contínuo
            </Card>
            <Card 
                variant="elevated" 
                className="bg-zinc-700 transform transition-transform duration-200 ease-out hover:-translate-y-2 hover:shadow-xl mx-auto max-w-sm" 
                header={<IconBadge icon={<BsBriefcaseFill />} bgClass="bg-purple-700/30" textClass='text-purple-400'/>} 
                footer="Descubra projetos, vagas e colaborações que fazem sentido para sua trajetória"
                >
                Oportunidades Reais
            </Card>
            <Card 
                variant="elevated" 
                className="bg-zinc-700 transform transition-transform duration-200 ease-out hover:-translate-y-2 hover:shadow-xl mx-auto max-w-sm" 
                header={<IconBadge icon={<IoBookOutline />} bgClass="bg-orange-700/30 " textClass='text-orange-400'/>} 
                footer="Mostre suas habilidades técnicas, soft skills e experiências de forma profissional"
                >
                Perfis Completos
            </Card>
            <Card 
                variant="elevated" 
                className="bg-zinc-700 transform transition-transform duration-200 ease-out hover:-translate-y-2 hover:shadow-xl mx-auto max-w-sm" 
                header={<IconBadge icon={<MdOutlineEmail />} bgClass="bg-red-700/30" textClass='text-red-400'/>} 
                footer="Recomende e seja recomendado por profissionais da sua rede"
                >
                Recomendações
            </Card>
            <Card 
                variant="elevated" 
                className="bg-zinc-700 transform transition-transform duration-200 ease-out hover:-translate-y-2 hover:shadow-xl mx-auto max-w-sm" 
                header={<IconBadge icon={<IoIosSearch />} bgClass="bg-emerald-700/30" textClass='text-emerald-400'/>} 
                footer="Filtre por área, cidade, tecnologia e encontre exatamente quem você procura"
                >
                Busca Avançada
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}


