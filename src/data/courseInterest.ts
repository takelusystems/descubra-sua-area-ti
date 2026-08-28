export const ageRanges = [
  {
    value: 'up_to_18',
    label: 'Até 18 anos',
  },
  {
    value: '19_25',
    label: '19 a 25 anos',
  },
  {
    value: '26_30',
    label: '26 a 30 anos',
  },
  {
    value: '31_40',
    label: '31 a 40 anos',
  },
  {
    value: '41_50',
    label: '41 a 50 anos',
  },
  {
    value: '51_60',
    label: '51 a 60 anos',
  },
  {
    value: '61_70',
    label: '61 a 70 anos',
  },
  {
    value: 'over_70',
    label: 'Mais de 70 anos',
  },
] as const

export const sexOptions = [
  {
    value: 'female',
    label: 'Feminino',
  },
  {
    value: 'male',
    label: 'Masculino',
  },
  {
    value: 'prefer_not_to_say',
    label: 'Prefiro não dizer',
  },
] as const

export const professionalCourses = [
  'Assistente de Desenvolvimento de Aplicativos Computacionais',
  'Assistente de Operação de Redes de Computadores',
  'Assistente de Suporte e Manutenção de Computadores',
  'Desenvolvedor Back-end',
  'Desenvolvedor Front-end',
  'Desenvolvedor Full Stack',
  'Desenvolvimento de Sites',
  'Desenvolvimento de Sites com HTML e CSS',
  'Desenvolvimento Mobile',
  'Excel – Criando Planilhas Interativas e Dashboard',
  'Excel Avançado I – Funções',
  'Excel Avançado II – Ferramentas e Base de Dados',
  'Formação Excel: do Básico ao Avançado',
  'Fundamentos de Cloud Computing',
  'Inteligência Artificial com Excel',
  'Inteligência Artificial Descomplicada',
  'Inteligência Artificial: Como Fazer a Pergunta Correta',
  'Inteligência Artificial: Conceitos e Práticas',
  'Introdução à Linguagem Java',
  'Introdução à Prática da Programação',
  'Introdução à Programação com Python',
  'Lógica de Programação',
  'Programação em C#',
] as const

export const technicalCourses = [
  'Técnico em Informática',
  'Técnico em Informática para Internet',
  'Técnico em Inteligência Artificial',
  'Técnico em Redes de Computadores',
  'Técnico em Segurança Cibernética',
] as const

export const shiftOptions = [
  {
    value: 'morning',
    label: 'Manhã',
    description: '08:00 às 12:00',
  },
  {
    value: 'afternoon',
    label: 'Tarde',
    description: '13:30 às 17:30',
  },
  {
    value: 'evening',
    label: 'Noite',
    description: '19:00 às 22:26',
  },
] as const

export const weeklyFrequencyOptions = [
  {
    value: 1,
    label: '1 vez por semana',
  },
  {
    value: 2,
    label: '2 vezes por semana',
  },
  {
    value: 3,
    label: '3 vezes por semana',
  },
  {
    value: 4,
    label: '4 vezes por semana',
  },
  {
    value: 5,
    label: '5 vezes por semana',
  },
] as const

export const dayOptions = [
  {
    value: 'monday',
    label: 'Segunda-feira',
  },
  {
    value: 'tuesday',
    label: 'Terça-feira',
  },
  {
    value: 'wednesday',
    label: 'Quarta-feira',
  },
  {
    value: 'thursday',
    label: 'Quinta-feira',
  },
  {
    value: 'friday',
    label: 'Sexta-feira',
  },
  {
    value: 'saturday',
    label: 'Sábado',
  },
] as const

export type AgeRangeValue =
  (typeof ageRanges)[number]['value']

export type SexValue =
  (typeof sexOptions)[number]['value']

export type ShiftValue =
  (typeof shiftOptions)[number]['value']

export type DayValue =
  (typeof dayOptions)[number]['value']