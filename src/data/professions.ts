import type { TechAreaIcon } from './areas'

export interface ProfessionData {
  title: string
  introduction: string
  professions: string[]
}

export const professionsByArea: Record<
  TechAreaIcon,
  ProfessionData
> = {
  hardware: {
    title: 'Profissões relacionadas a Hardware',
    introduction:
      'Algumas carreiras em que conhecimentos sobre equipamentos, manutenção e infraestrutura física são importantes:',
    professions: [
      'Técnico de Hardware',
      'Técnico de Informática',
      'Analista de Suporte',
      'Técnico de Manutenção',
      'Analista de Infraestrutura',
    ],
  },

  programming: {
    title: 'Profissões relacionadas a Programação',
    introduction:
      'A programação pode levar a diferentes caminhos dependendo das tecnologias, plataformas e tipos de sistema que você escolher explorar:',
    professions: [
      'Desenvolvedor Front-End',
      'Desenvolvedor Back-End',
      'Desenvolvedor Full Stack',
      'Desenvolvedor Mobile',
      'Desenvolvedor de Sistemas',
    ],
  },

  networks: {
    title: 'Profissões relacionadas a Redes',
    introduction:
      'Profissionais de redes trabalham para manter computadores, equipamentos e serviços conectados de maneira eficiente e confiável:',
    professions: [
      'Técnico de Redes',
      'Analista de Redes',
      'Analista de Infraestrutura',
      'Administrador de Redes',
      'Engenheiro de Redes',
    ],
  },

  cybersecurity: {
    title: 'Profissões relacionadas a Cibersegurança',
    introduction:
      'A segurança da informação possui diferentes especialidades envolvendo prevenção, monitoramento, investigação e proteção de ambientes digitais:',
    professions: [
      'Analista de Segurança da Informação',
      'Analista SOC',
      'Analista de Cibersegurança',
      'Pentester',
      'Especialista em Segurança',
    ],
  },

  games: {
    title: 'Profissões relacionadas a Jogos',
    introduction:
      'A indústria de jogos reúne programação, arte, design, testes e outras especialidades trabalhando juntas:',
    professions: [
      'Game Developer',
      'Game Designer',
      'Programador de Jogos',
      'Artista Técnico',
      'QA de Jogos',
    ],
  },

  ai: {
    title: 'Profissões relacionadas a Inteligência Artificial',
    introduction:
      'Inteligência Artificial reúne carreiras relacionadas a programação, dados, modelos computacionais e desenvolvimento de sistemas inteligentes:',
    professions: [
      'Desenvolvedor de IA',
      'Engenheiro de Machine Learning',
      'Engenheiro de Dados',
      'Analista de Dados',
      'Cientista de Dados',
    ],
  },
}