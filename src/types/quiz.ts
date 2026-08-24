import type { TechAreaIcon } from '../data/areas'

export type AreaWeights = Partial<Record<TechAreaIcon, number>>

export interface QuizOption {
  id: string
  text: string
  weights: AreaWeights
}

export interface QuizQuestion {
  id: string
  question: string
  context?: string
  options: QuizOption[]
}

export type QuizAnswers = Record<string, string>