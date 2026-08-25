import type { TechAreaIcon } from './areas'

export interface SalaryRange {
  level: 'Júnior' | 'Pleno' | 'Sênior'
  min: number
  max: number
}

export interface SalaryData {
  referenceRole: string
  ranges: SalaryRange[]
  source: string
  referenceDate: string
  methodologyNote?: string
}

export const salariesByArea: Record<
  TechAreaIcon,
  SalaryData
> = {
  hardware: {
    referenceRole: 'Analista de Suporte',
    ranges: [
      {
        level: 'Júnior',
        min: 3350,
        max: 5650,
      },
      {
        level: 'Pleno',
        min: 4950,
        max: 8350,
      },
      {
        level: 'Sênior',
        min: 6450,
        max: 10800,
      },
    ],
    source: 'Guia Salarial 2026 — Robert Half Brasil',
    referenceDate: '2026',
    methodologyNote:
      'Analista de Suporte foi utilizado como uma referência de mercado próxima às carreiras de suporte técnico e hardware corporativo.',
  },

  programming: {
    referenceRole: 'Desenvolvedor Full Stack',
    ranges: [
      {
        level: 'Júnior',
        min: 6050,
        max: 8750,
      },
      {
        level: 'Pleno',
        min: 9550,
        max: 15900,
      },
      {
        level: 'Sênior',
        min: 12450,
        max: 20950,
      },
    ],
    source: 'Guia Salarial 2026 — Robert Half Brasil',
    referenceDate: '2026',
    methodologyNote:
      'Desenvolvedor Full Stack foi escolhido como referência ampla para a área de desenvolvimento de software.',
  },

  networks: {
    referenceRole: 'Analista de Infraestrutura',
    ranges: [
      {
        level: 'Júnior',
        min: 4400,
        max: 7450,
      },
      {
        level: 'Pleno',
        min: 6400,
        max: 10600,
      },
      {
        level: 'Sênior',
        min: 9400,
        max: 15750,
      },
    ],
    source: 'Guia Salarial 2026 — Robert Half Brasil',
    referenceDate: '2026',
    methodologyNote:
      'Analista de Infraestrutura foi utilizado como referência por abranger atividades próximas de redes e infraestrutura corporativa.',
  },

  cybersecurity: {
    referenceRole: 'Analista de Segurança',
    ranges: [
      {
        level: 'Júnior',
        min: 6200,
        max: 10400,
      },
      {
        level: 'Pleno',
        min: 8500,
        max: 14300,
      },
      {
        level: 'Sênior',
        min: 11300,
        max: 19000,
      },
    ],
    source: 'Guia Salarial 2026 — Robert Half Brasil',
    referenceDate: '2026',
  },

  games: {
    referenceRole: 'Game Developer',
    ranges: [
      {
        level: 'Júnior',
        min: 3000,
        max: 5000,
      },
      {
        level: 'Pleno',
        min: 5000,
        max: 8000,
      },
      {
        level: 'Sênior',
        min: 8000,
        max: 13000,
      },
    ],
    source: 'Glassdoor Brasil — Game Developer',
    referenceDate: 'agosto de 2026',
    methodologyNote:
      'O Glassdoor não apresenta uma tabela nacional padronizada Júnior/Pleno/Sênior para Game Developer. As faixas acima são referências educacionais aproximadas, construídas de forma conservadora a partir da faixa-base e de relatos recentes disponíveis em 2026.',
  },

  ai: {
    referenceRole: 'Ciência de Dados / Inteligência Artificial',
    ranges: [
      {
        level: 'Júnior',
        min: 4000,
        max: 7000,
      },
      {
        level: 'Pleno',
        min: 7500,
        max: 13000,
      },
      {
        level: 'Sênior',
        min: 12000,
        max: 20000,
      },
    ],
    source:
      'Glassdoor Brasil e Guia Salarial 2026 — Robert Half Brasil',
    referenceDate: 'agosto de 2026',
    methodologyNote:
      'IA possui cargos muito diversos. A referência combina dados atuais de Ciência de Dados, BI e especializações relacionadas, portanto deve ser interpretada apenas como orientação geral.',
  },
}

export const salaryDisclaimer =
  'As faixas salariais são estimativas de remuneração mensal bruta e não representam promessa de salário. Os valores podem variar significativamente de acordo com cargo específico, experiência, localização, empresa, modalidade de contratação, especialização e momento do mercado.'