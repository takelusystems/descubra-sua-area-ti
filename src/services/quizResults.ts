import { techAreas } from '../data/areas'
import { supabase } from '../lib/supabase'

import type {
  AreaDistributionRow,
  QuizResultInsert,
} from '../types/database'

import type { QuizResult } from '../types/result'

export function mapQuizResultToInsert(
  result: QuizResult,
  submissionKey: string,
): QuizResultInsert {
  return {
    submission_key: submissionKey,

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
  submissionKey: string,
): Promise<void> {
  const payload =
    mapQuizResultToInsert(
      result,
      submissionKey,
    )

  const { error } =
    await supabase.rpc(
      'submit_quiz_result',
      {
        p_submission_key:
          payload.submission_key,

        p_hardware_score:
          payload.hardware_score,

        p_programming_score:
          payload.programming_score,

        p_network_score:
          payload.network_score,

        p_cybersecurity_score:
          payload.cybersecurity_score,

        p_games_score:
          payload.games_score,

        p_ai_score:
          payload.ai_score,

        p_main_area:
          payload.main_area,
      },
    )

  if (error) {
    throw new Error(
      `Não foi possível salvar o resultado: ${error.message}`,
    )
  }
}

export async function getQuizAreaDistribution():
  Promise<AreaDistributionRow[]> {
  const { data, error } =
    await supabase.rpc(
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
    percentage: Number(
      row.percentage,
    ),
    total_participants: Number(
      row.total_participants,
    ),
  }))
}

export function subscribeToQuizResultsChanges(
  onChange: () => void,
  onStatusChange?: (
    status: string,
  ) => void,
) {
  const channel =
    supabase
      .channel(
        'quiz-dashboard',
      )
      .on(
        'broadcast',
        {
          event:
            'quiz_results_changed',
        },
        () => {
          onChange()
        },
      )
      .subscribe(
        (status) => {
          onStatusChange?.(
            String(status),
          )
        },
      )

  return () => {
    void supabase.removeChannel(
      channel,
    )
  }
}

export async function testSupabaseConnection():
  Promise<AreaDistributionRow[]> {
  const distribution =
    await getQuizAreaDistribution()

  const expectedAreas =
    new Set(
      techAreas.map(
        (area) => area.id,
      ),
    )

  const returnedAreas =
    new Set(
      distribution.map(
        (item) => item.area,
      ),
    )

  const allAreasReturned =
    [...expectedAreas].every(
      (areaId) =>
        returnedAreas.has(
          areaId,
        ),
    )

  if (!allAreasReturned) {
    throw new Error(
      'A conexão funcionou, mas a função não retornou todas as áreas esperadas.',
    )
  }

  return distribution
}