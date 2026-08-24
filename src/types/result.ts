import type { TechAreaIcon } from '../data/areas'

export interface AreaScore {
  area: TechAreaIcon
  rawScore: number
  maxScore: number
  percentage: number
}

export interface QuizResult {
  scores: Record<TechAreaIcon, AreaScore>
  ranking: AreaScore[]
  mainArea: TechAreaIcon
  secondaryAreas: TechAreaIcon[]
  totalAnswered: number
}