import type { TechAreaIcon } from './areas'

export interface StudyPath {
  whatToStudy: string[]
  steps: string[]
}

export const studyPaths: Record<
  TechAreaIcon,
  StudyPath
> = {
  hardware: {
    whatToStudy: [
      'Arquitetura de computadores',
      'Componentes e periféricos',
      'Montagem e manutenção',
      'Sistemas operacionais',
      'Diagnóstico de problemas',
      'Noções de eletrônica',
    ],

    steps: [
      'Conheça as principais peças de um computador',
      'Entenda CPU, memória, armazenamento e placa-mãe',
      'Aprenda montagem e desmontagem com segurança',
      'Estude BIOS, UEFI e inicialização do sistema',
      'Aprenda instalação de sistemas operacionais',
      'Estude drivers, periféricos e compatibilidade',
      'Pratique diagnóstico de falhas',
      'Aprenda manutenção preventiva',
      'Conheça fundamentos básicos de redes',
      'Monte um pequeno laboratório de testes',
    ],
  },

  programming: {
    whatToStudy: [
      'Lógica de programação',
      'Algoritmos',
      'HTML e CSS',
      'JavaScript ou TypeScript',
      'Git e GitHub',
      'Banco de dados',
    ],

    steps: [
      'Lógica de programação',
      'Algoritmos',
      'HTML',
      'CSS',
      'JavaScript',
      'Git e GitHub',
      'Banco de dados',
      'APIs',
      'Frameworks',
      'Projetos práticos',
    ],
  },

  networks: {
    whatToStudy: [
      'Fundamentos de redes',
      'TCP/IP',
      'Endereçamento IP',
      'Roteamento',
      'Switching',
      'Linux',
    ],

    steps: [
      'Entenda como computadores se comunicam',
      'Estude os modelos OSI e TCP/IP',
      'Aprenda IPv4, IPv6 e sub-redes',
      'Conheça switches e redes locais',
      'Aprenda roteamento',
      'Estude DHCP e DNS',
      'Conheça redes Wi-Fi',
      'Aprenda fundamentos de Linux',
      'Estude segurança básica de redes',
      'Monte laboratórios e simulações de rede',
    ],
  },

  cybersecurity: {
    whatToStudy: [
      'Redes de computadores',
      'Linux e Windows',
      'Segurança da informação',
      'Logs e monitoramento',
      'Programação e scripts',
      'Segurança de aplicações',
    ],

    steps: [
      'Aprenda fundamentos de redes',
      'Aprenda Linux e Windows',
      'Estude fundamentos de segurança da informação',
      'Aprenda permissões e controle de acesso',
      'Conheça conceitos básicos de criptografia',
      'Aprenda Python ou outra linguagem para automação',
      'Estude logs e monitoramento',
      'Conheça vulnerabilidades comuns',
      'Estude segurança de aplicações web',
      'Pratique somente em laboratórios e ambientes autorizados',
    ],
  },

  games: {
    whatToStudy: [
      'Lógica de programação',
      'Programação para jogos',
      'Game Design',
      'Motores de jogos',
      'Matemática aplicada',
      'Versionamento com Git',
    ],

    steps: [
      'Aprenda lógica de programação',
      'Escolha uma linguagem adequada ao motor utilizado',
      'Conheça um motor de jogos',
      'Aprenda fundamentos de Game Design',
      'Estude lógica de movimentação e interação',
      'Conheça matemática e física básicas para jogos',
      'Aprenda conceitos de interfaces e experiência do jogador',
      'Use Git para versionar projetos',
      'Crie pequenos jogos completos',
      'Monte um portfólio com seus melhores projetos',
    ],
  },

  ai: {
    whatToStudy: [
      'Python',
      'Matemática',
      'Estatística',
      'Banco de dados e SQL',
      'Análise de dados',
      'Machine Learning',
    ],

    steps: [
      'Aprenda lógica de programação',
      'Aprenda Python',
      'Estude matemática e estatística básicas',
      'Aprenda SQL e organização de dados',
      'Conheça NumPy e Pandas',
      'Aprenda visualização e análise de dados',
      'Estude fundamentos de Machine Learning',
      'Aprenda treinamento e avaliação de modelos',
      'Conheça fundamentos de redes neurais e IA generativa',
      'Crie projetos práticos com dados reais ou conjuntos educacionais',
    ],
  },
}