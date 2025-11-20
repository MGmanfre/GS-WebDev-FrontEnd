import { fakerPT_BR as faker } from '@faker-js/faker';
import * as fs from 'fs';

const NUM_PROFILES = 100;
const AREAS = ['Desenvolvimento', 'Design/UX', 'Data/IA', 'Gestão/Agile', 'Sustentabilidade/ESG', 'Fintech/Blockchain'];
const HARD_SKILLS = ['React', 'Node.js', 'Python', 'Figma', 'AWS', 'SQL', 'Scrum', 'Kanban', 'Terraform', 'Vue.js', 'Machine Learning', 'UX Research', 'DevOps'];
const SOFT_SKILLS = ['Comunicação', 'Resiliência', 'Liderança Servidora', 'Empatia', 'Pensamento Crítico', 'Adaptabilidade', 'Gestão de Conflitos'];
const CERTIFICATIONS = ['AWS Certified', 'Certified Scrum Master (CSM)', 'Google Analytics Certified', 'ISTQB Foundation Level', 'Azure Data Scientist'];

function createProfessional(id) {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const area = faker.helpers.arrayElement(AREAS);
  const sex = faker.person.sex();

  return {
    id: id,
    nome: `${firstName} ${lastName}`,
    email: faker.internet.email({ firstName, lastName }),
    sex: sex,
    foto: faker.image.personPortrait({sex: faker.person.sexType(), size: "128"}), 
    cargo: faker.person.jobTitle(),
    resumo: faker.company.catchPhrase(),
    localizacao: `${faker.location.city()}/${faker.location.state({ abbreviated: true })}`,
    area: area,

    habilidadesTecnicas: faker.helpers.arrayElements(HARD_SKILLS, { min: 3, max: 5 }),

    softSkills: faker.helpers.arrayElements(SOFT_SKILLS, { min: 2, max: 4 }),

    experiencias: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, () => ({
      empresa: faker.company.name(),
      cargo: faker.person.jobTitle(),
      inicio: faker.date.past({ years: 5 }).toISOString().substring(0, 7), // YYYY-MM
      fim: faker.datatype.boolean() ? "Atual" : faker.date.recent({ days: 730 }).toISOString().substring(0, 7),
      descricao: faker.lorem.paragraph(1),
    })),

    formacao: [{
      curso: faker.helpers.arrayElement(["BSc Ciência da Computação", "Mestrado em Gestão", "Pós-graduação em TI", "Tecnólogo em Análise de Sistemas", "MBA em Liderança"]),
      instituicao: faker.company.name() + ' University',
      ano: faker.number.int({ min: 2015, max: 2024 }),
    }],

    projetos: Array.from({ length: faker.number.int({ min: 0, max: 2 }) }, () => ({
      titulo: faker.lorem.words(3),
      link: faker.internet.url(),
      descricao: faker.lorem.sentence(),
    })),

    certificacoes: faker.helpers.arrayElements(CERTIFICATIONS, { min: 0, max: 2 }),

    idiomas: [
        { idioma: "Inglês", nivel: faker.helpers.arrayElement(["Intermediário", "Avançado", "Fluente"]) },
        ...(faker.datatype.boolean() ? [{ idioma: faker.helpers.arrayElement(["Espanhol", "Alemão", "Francês"]), nivel: faker.helpers.arrayElement(["Básico", "Intermediário"]) }] : [])
    ],
    
    areaInteresses: faker.helpers.arrayElements(["IA ética", "Educação Tech", "Cultura Organizacional", "Sustentabilidade", "Web3"], { min: 1, max: 3 })
  };
}

const professionals = Array.from({ length: NUM_PROFILES }, (_, i) => createProfessional(i + 1));

const jsonString = JSON.stringify(professionals, null, 2);

try {
    fs.writeFileSync('profissionais.json', jsonString);
    console.log(`Sucesso: JSON gerado! ${NUM_PROFILES} perfis criados em 'profissionais.json'.`);
} catch (err) {
    console.error("Erro ao escrever o arquivo JSON:", err);
}