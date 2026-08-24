import type { TechAreaIcon } from './areas'

export interface ResultProfile {
  headline: string
  tagline: string
  description: string
  detailedDescription: string
  traits: string[]
}

export const resultProfiles: Record<TechAreaIcon, ResultProfile> = {
  hardware: {
    headline: 'HARDWARE',
    tagline: 'Máquinas, diagnóstico e soluções práticas',
    description:
      'Seu perfil demonstra interesse em entender como os equipamentos funcionam e em descobrir, na prática, o que está acontecendo quando algo apresenta um problema.',
    detailedDescription:
      'Você tende a se interessar pela parte concreta da tecnologia: componentes, equipamentos, desempenho, montagem, manutenção e diagnóstico. Perfis com essa combinação costumam gostar de observar como cada peça contribui para o funcionamento do conjunto e de resolver problemas de maneira prática.',
    traits: [
      'Curiosidade sobre equipamentos',
      'Raciocínio prático',
      'Interesse por diagnóstico',
    ],
  },

  programming: {
    headline: 'PROGRAMAÇÃO',
    tagline: 'Lógica, criação e solução de problemas',
    description:
      'Seu perfil demonstra forte afinidade com lógica, construção de soluções e transformação de ideias em sistemas que realmente funcionam.',
    detailedDescription:
      'Você tende a gostar de dividir problemas em etapas, identificar padrões e construir soluções por meio de regras e lógica. Programação combina criatividade com raciocínio estruturado e permite transformar ideias em aplicativos, sites, sistemas, automações e muitos outros projetos.',
    traits: [
      'Raciocínio lógico',
      'Criação de soluções',
      'Pensamento estruturado',
    ],
  },

  networks: {
    headline: 'REDES',
    tagline: 'Conexões, comunicação e infraestrutura',
    description:
      'Seu perfil demonstra interesse em entender como computadores, dispositivos e serviços conseguem se conectar e trocar informações.',
    detailedDescription:
      'Você tende a observar a tecnologia como um conjunto de elementos que precisam funcionar em comunicação. Redes envolve compreender caminhos, conexões, equipamentos, serviços e infraestrutura para que informações cheguem ao lugar certo de maneira rápida, estável e confiável.',
    traits: [
      'Visão de conjunto',
      'Interesse por conexões',
      'Organização de infraestrutura',
    ],
  },

  cybersecurity: {
    headline: 'CIBERSEGURANÇA',
    tagline: 'Investigação, proteção e pensamento crítico',
    description:
      'Seu perfil demonstra uma combinação de curiosidade investigativa, atenção a comportamentos fora do padrão e interesse em proteger ambientes digitais.',
    detailedDescription:
      'Você tende a olhar para um sistema pensando não apenas em como ele funciona, mas também no que poderia dar errado. Cibersegurança envolve investigação, análise de riscos, prevenção, proteção de informações e compreensão de como ameaças podem ser identificadas e reduzidas.',
    traits: [
      'Perfil investigativo',
      'Atenção a riscos',
      'Pensamento analítico',
    ],
  },

  games: {
    headline: 'DESENVOLVIMENTO DE JOGOS',
    tagline: 'Criatividade, tecnologia e experiências interativas',
    description:
      'Seu perfil demonstra interesse em unir criatividade, lógica e tecnologia para construir experiências digitais interativas.',
    detailedDescription:
      'Desenvolvimento de jogos reúne diferentes conhecimentos da tecnologia. Além de programação, pode envolver design, lógica, narrativa, interfaces, testes, física e criação de experiências. Seu resultado sugere interesse em projetos nos quais tecnologia e criatividade trabalham juntas.',
    traits: [
      'Criatividade tecnológica',
      'Interesse por interação',
      'Construção de experiências',
    ],
  },

  ai: {
    headline: 'INTELIGÊNCIA ARTIFICIAL',
    tagline: 'Dados, padrões e tecnologias inteligentes',
    description:
      'Seu perfil demonstra curiosidade por sistemas capazes de analisar informações, reconhecer padrões, automatizar tarefas e produzir novos resultados.',
    detailedDescription:
      'Você tende a se interessar por tecnologias que utilizam dados e modelos computacionais para resolver problemas complexos. Inteligência Artificial combina programação, dados, matemática e experimentação para desenvolver sistemas capazes de realizar tarefas cada vez mais sofisticadas.',
    traits: [
      'Curiosidade por inovação',
      'Interesse por padrões',
      'Pensamento experimental',
    ],
  },
}