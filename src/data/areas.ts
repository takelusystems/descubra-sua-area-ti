export type TechAreaIcon =
  | 'hardware'
  | 'programming'
  | 'networks'
  | 'cybersecurity'
  | 'games'
  | 'ai'

export interface TechArea {
  id: TechAreaIcon
  name: string
  shortName: string
  description: string
  tag: string
  iconClass: string
  borderClass: string
  glowClass: string
}

export const techAreas: TechArea[] = [
  {
    id: 'hardware',
    name: 'Hardware',
    shortName: 'Hardware',
    description:
      'Para quem gosta de entender máquinas, componentes, manutenção e infraestrutura física.',
    tag: 'Máquinas & componentes',
    iconClass: 'text-cyan-300',
    borderClass: 'group-hover:border-cyan-400/40',
    glowClass: 'from-cyan-400/15 to-blue-500/5',
  },
  {
    id: 'programming',
    name: 'Programação',
    shortName: 'Programação',
    description:
      'Para perfis que gostam de lógica, criação de soluções, sistemas, aplicativos e automações.',
    tag: 'Código & soluções',
    iconClass: 'text-violet-300',
    borderClass: 'group-hover:border-violet-400/40',
    glowClass: 'from-violet-400/15 to-purple-500/5',
  },
  {
    id: 'networks',
    name: 'Redes',
    shortName: 'Redes',
    description:
      'Para quem se interessa por conexões, comunicação entre dispositivos e infraestrutura digital.',
    tag: 'Conexões & infraestrutura',
    iconClass: 'text-blue-300',
    borderClass: 'group-hover:border-blue-400/40',
    glowClass: 'from-blue-400/15 to-cyan-500/5',
  },
  {
    id: 'cybersecurity',
    name: 'Cibersegurança',
    shortName: 'Cibersegurança',
    description:
      'Para perfis investigativos que gostam de identificar riscos, proteger sistemas e resolver ameaças.',
    tag: 'Investigação & proteção',
    iconClass: 'text-emerald-300',
    borderClass: 'group-hover:border-emerald-400/40',
    glowClass: 'from-emerald-400/15 to-green-500/5',
  },
  {
    id: 'games',
    name: 'Desenvolvimento de Jogos',
    shortName: 'Jogos',
    description:
      'Para quem combina criatividade, tecnologia, lógica, experiências interativas e diversão.',
    tag: 'Criatividade & interação',
    iconClass: 'text-fuchsia-300',
    borderClass: 'group-hover:border-fuchsia-400/40',
    glowClass: 'from-fuchsia-400/15 to-pink-500/5',
  },
  {
    id: 'ai',
    name: 'Inteligência Artificial',
    shortName: 'Inteligência Artificial',
    description:
      'Para quem tem curiosidade por dados, automação, modelos inteligentes e tecnologias emergentes.',
    tag: 'Dados & inteligência',
    iconClass: 'text-amber-300',
    borderClass: 'group-hover:border-amber-400/40',
    glowClass: 'from-amber-400/15 to-orange-500/5',
  },
]