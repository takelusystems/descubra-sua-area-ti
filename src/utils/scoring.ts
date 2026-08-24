import {
  techAreas,
  type TechAreaIcon,
} from '../data/areas'

import { quizQuestions } from '../data/questions'

import type { QuizAnswers } from '../types/quiz'

import type {
  AreaScore,
  QuizResult,
} from '../types/result'

const areaIds = techAreas.map((area) => area.id)

function createEmptyScoreRecord(): Record<TechAreaIcon, number> {
  return Object.fromEntries(
    areaIds.map((areaId) => [areaId, 0]),
  ) as Record<TechAreaIcon, number>
}

function calculateMaximumScores(): Record<TechAreaIcon, number> {
  const maximumScores = createEmptyScoreRecord()

  for (const question of quizQuestions) {
    for (const areaId of areaIds) {
      const highestPossibleWeight = Math.max(
        ...question.options.map(
          (option) => option.weights[areaId] ?? 0,
        ),
      )

      maximumScores[areaId] += highestPossibleWeight
    }
  }

  return maximumScores
}

function validateAnswers(answers: QuizAnswers) {
  for (const question of quizQuestions) {
    const selectedOptionId = answers[question.id]

    if (!selectedOptionId) {
      throw new Error(
        `A pergunta ${question.id} não possui resposta.`,
      )
    }

    const selectedOptionExists = question.options.some(
      (option) => option.id === selectedOptionId,
    )

    if (!selectedOptionExists) {
      throw new Error(
        `A resposta "${selectedOptionId}" não é válida para a pergunta ${question.id}.`,
      )
    }
  }
}

export function calculateQuizResult(
  answers: QuizAnswers,
): QuizResult {
  validateAnswers(answers)

  const rawScores = createEmptyScoreRecord()

  const maximumScores = calculateMaximumScores()

  for (const question of quizQuestions) {
    const selectedOptionId = answers[question.id]

    const selectedOption = question.options.find(
      (option) => option.id === selectedOptionId,
    )

    if (!selectedOption) {
      continue
    }

    for (const areaId of areaIds) {
      rawScores[areaId] +=
        selectedOption.weights[areaId] ?? 0
    }
  }

  const scoreEntries = areaIds.map((areaId): AreaScore => {
    const rawScore = rawScores[areaId]

    const maxScore = maximumScores[areaId]

    const percentage =
      maxScore > 0
        ? Math.min(
            100,
            (rawScore / maxScore) * 100,
          )
        : 0

    return {
      area: areaId,
      rawScore,
      maxScore,
      percentage: Number(percentage.toFixed(2)),
    }
  })

  const ranking = [...scoreEntries].sort((areaA, areaB) => {
    if (areaB.percentage !== areaA.percentage) {
      return areaB.percentage - areaA.percentage
    }

    if (areaB.rawScore !== areaA.rawScore) {
      return areaB.rawScore - areaA.rawScore
    }

    return (
      areaIds.indexOf(areaA.area) -
      areaIds.indexOf(areaB.area)
    )
  })

  const scores = Object.fromEntries(
    scoreEntries.map((score) => [score.area, score]),
  ) as Record<TechAreaIcon, AreaScore>

  return {
    scores,
    ranking,
    mainArea: ranking[0].area,
    secondaryAreas: ranking
      .slice(1, 3)
      .map((score) => score.area),
    totalAnswered: quizQuestions.length,
  }
}