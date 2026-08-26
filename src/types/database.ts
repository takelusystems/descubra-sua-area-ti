import type { TechAreaIcon } from '../data/areas'

export interface QuizResultInsert {
  submission_key: string
  hardware_score: number
  programming_score: number
  network_score: number
  cybersecurity_score: number
  games_score: number
  ai_score: number
  main_area: TechAreaIcon
}

export interface AreaDistributionRow {
  area: TechAreaIcon
  total: number
  percentage: number
  total_participants: number
}

export type QuizSaveStatus =
  | 'idle'
  | 'saving'
  | 'saved'
  | 'error'