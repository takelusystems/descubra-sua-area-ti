import { techAreas } from '../data/areas'
import { supabase } from '../lib/supabase'

import type {
  AreaDistributionRow,
  QuizResultInsert,
} from '../types/database'

import type { QuizResult } from '../types/result'

export function mapQuizResultToInsert(
  result: QuizResult,
): QuizResultInsert {
  return {
    hardware_score:
      result.scores.hardware.percentage,

    programming_score:
      result.scores.programming.percentage,

    network_score:
      result.scores.networks.percentage,

    cybersecurity_score:
      result.scores.cybersecurity.percentage,

    games_score:
      result.scores.games.percentage,

    ai_score:
      result.scores.ai.percentage,

    main_area: result.mainArea,
  }
}

export async function saveQuizResult(
  result: QuizResult,
): Promise<void> {
  const payload =
    mapQuizResultToInsert(result)

  const { error } = await supabase
    .from('quiz_results')
    .insert(payload)

  if (error) {
    throw new Error(
      `Não foi possível salvar o resultado: ${error.message}`,
    )
  }
}

export async function getQuizAreaDistribution():
  Promise<AreaDistributionRow[]> {
  const { data, error } = await supabase.rpc(
    'get_quiz_area_distribution',
  )

  if (error) {
    throw new Error(
      `Não foi possível carregar as estatísticas: ${error.message}`,
    )
  }

  if (!Array.isArray(data)) {
    throw new Error(
      'O Supabase retornou um formato inesperado para as estatísticas.',
    )
  }

  return data.map((row) => ({
    area: row.area,
    total: Number(row.total),
    percentage: Number(row.percentage),
    total_participants: Number(
      row.total_participants,
    ),
  }))
}

export async function testSupabaseConnection():
  Promise<AreaDistributionRow[]> {
  const distribution =
    await getQuizAreaDistribution()

  const expectedAreas =
    new Set(
      techAreas.map((area) => area.id),
    )

  const returnedAreas =
    new Set(
      distribution.map((item) => item.area),
    )

  const allAreasReturned =
    [...expectedAreas].every(
      (areaId) =>
        returnedAreas.has(areaId),
    )

  if (!allAreasReturned) {
    throw new Error(
      'A conexão funcionou, mas a função não retornou todas as áreas esperadas.',
    )
  }

  return distribution
}