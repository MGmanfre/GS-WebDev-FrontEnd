import Card from '@/components/Cards';
import FeatureItem from '@/components/FeatureItem';
import Hero from '@/components/Hero'
import IconBadge from '@/components/IconBadge';
import Section from '@/components/Section';
import TeamCard from '@/components/teamCard';
import React from 'react';
import miguelManfre from "../assets/img/team/MiguelManfre.jpeg";
import joao from "../assets/img/team/Joao.jpeg";
import vitorPallis from "../assets/img/team/VitorPallis.jpeg";
import { AiOutlineThunderbolt, AiOutlineEye } from "react-icons/ai";
import { GoShieldCheck, GoHeart } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";

const features = [
  {
    id: 'inovacao',
    title: 'Inovação Constante',
    description: 'Sempre buscando novas formas de conectar talentos',
    icon: <AiOutlineThunderbolt />,
    bgClass: 'bg-blue-700/30'
  },
  {
    id: 'comunidade',
    title: 'Comunidade Forte',
    description: 'Mais de 10 mil profissionais conectados',
    icon: <IoIosPeople />,
    bgClass: 'bg-green-700'
  },
  {
    id: 'seguranca',
    title: 'Segurança em Primeiro Lugar',
    description: 'Seus dados protegidos com tecnologia de ponta',
    icon: <GoShieldCheck />,
    bgClass: 'bg-purple-700'
  }
]

const dataCards = [
  {
    title: 'Nossa Missão',
    footer: 'Democratizar o acesso a oportunidades profissionais, conectando talentos com empresas e projetos que valorizam suas competências e propósito.',
    icon: <AiOutlineThunderbolt />, bgClass: 'bg-blue-700/30', textClass: 'text-blue-400'
  },
  {
    title: 'Nossa Visão',
    footer: 'Ser a plataforma de referência global para profissionais que buscam construir carreiras significativas e empresas que valorizam talentos diversos.',
    icon: <AiOutlineEye />, bgClass: 'bg-green-700/30', textClass: 'text-green-400'
  },
  {
    title: 'Nossos Valores',
    footer: 'Inclusão, transparência, colaboração e inovação. Acreditamos em um futuro do trabalho mais humano, justo e sustentável.',
    icon: <GoHeart />, bgClass: 'bg-purple-700/30', textClass: 'text-purple-400'
  }
]

const dataTeamCards = [
  {
    name: 'Miguel Manfré',
    role: 'Desenvolvedor de Software',
    description: 'Especialista em automação e otimização de processos, transformando ideias em soluções eficientes e escaláveis.',
    avatar: miguelManfre,
    gradient: 'from-purple-500 to-blue-400',
  },
  {
    name: 'João Victor',
    role: 'Designer UX/UI',
    description: 'Designer focado em experiências intuitivas e elegantes, criando interfaces que encantam e resolvem problemas reais dos usuários.',
    avatar: joao,
    gradient: 'from-blue-900 to-blue-400',
  },
  {
    name: 'Vitor Pallis',
    role: 'Engenheiro de Dados',
    description: 'Dedicado a transformar grandes volumes de dados em insights acionáveis e confiáveis, impulsionando decisões estratégicas.',
    avatar: vitorPallis,
    gradient: 'from-green-500 to-blue-400',
  },
]

export default function About() {
  return (
    <div>
      <Hero 
        title="Sobre o SkillBridge" 
        subtitle="Nossa missão é transformar o futuro do trabalho, conectando pessoas, competências e propósito através da tecnologia"
        text={null}
        />

      <Section>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 items-start px-4 sm:px-6 md:px-10 text-left">
          <div className='flex flex-col gap-4 max-w-xl'>
            <h2 className='text-zinc-950 dark:text-gray-100 text-3xl md:text-4xl font-bold'>Como Tudo Começou</h2>
            <div className="flex flex-col gap-3 text-base md:text-lg leading-relaxed text-zinc-950 dark:text-gray-100">
              <p>O FuturoConnect nasceu da observação de que o mundo do trabalho estava passando por uma transformação profunda. A tecnologia estava mudando não apenas como trabalhamos, mas também o que significa ser profissional no século XXI.</p>
              <p>Percebemos que as plataformas existentes focavam apenas em currículos e vagas, ignorando a complexidade das relações profissionais modernas. Faltava um espaço que valorizasse não apenas as habilidades técnicas, mas também as soft skills, os valores pessoais e o propósito de cada profissional.</p>
              <p>Foi assim que nasceu nossa plataforma: um ecossistema completo para conectar pessoas que compartilham não apenas competências, mas também visões de futuro e valores profundos.</p>
            </div>
          </div>

          <div className="flex flex-col gap-6 w-full justify-center bg-linear-to-r from-sky-800 via-indigo-700 to-purple-800 p-6 sm:p-8 md:p-6 rounded-xl shadow-lg">
            <div className="flex flex-col gap-4 w-full">
              {features.map(f => (
                <div key={f.id} className="w-full">
                  <FeatureItem {...f} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Nossos Pilares"
        bgClass='bg-gray-300 dark:bg-zinc-600'
        >
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 justify-items-center">
          {dataCards.map((f) => (
            <Card
              key={f.title}
              variant="elevated"
              className="bg-gray-400 dark-zinc-700 transform transition-transform duration-200 ease-out hover:-translate-y-2 hover:shadow-xl mx-auto max-w-sm"
              header={<IconBadge icon={f.icon} bgClass={f.bgClass} textClass={f.textClass} />}
              footer={f.footer}
              >
              {f.title}
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Nosso Time"
        subtitle="Profissionais apaixonados por transformar o futuro do trabalho"
        >
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          {dataTeamCards.map((f) => (
            <TeamCard
              key={f.name}
              {...f}
              className="transform transition-transform duration-200 ease-out hover:-translate-y-2 hover:shadow-xl mx-auto max-w-sm"
            />
          ))}
        </div>
      </Section>
    </div>
  )
}
