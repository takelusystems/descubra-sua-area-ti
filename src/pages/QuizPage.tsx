import { useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  Check,
  CheckCircle2,
  RotateCcw,
  Sparkles,
} from 'lucide-react'

import QuizProgress from '../components/QuizProgress'
import { quizQuestions } from '../data/questions'
import type { QuizAnswers } from '../types/quiz'

interface QuizPageProps {
  onExit: () => void
}

function QuizPage({ onExit }: QuizPageProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswers>({})
  const [completed, setCompleted] = useState(false)

  const currentQuestion = quizQuestions[currentQuestionIndex]

  const selectedOptionId = answers[currentQuestion.id]

  const isLastQuestion =
    currentQuestionIndex === quizQuestions.length - 1

  const answeredQuestions = Object.keys(answers).length

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [currentQuestionIndex, completed])

  function handleSelect(optionId: string) {
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [currentQuestion.id]: optionId,
    }))
  }

  function handleNext() {
    if (!selectedOptionId) {
      return
    }

    if (isLastQuestion) {
      setCompleted(true)
      return
    }

    setCurrentQuestionIndex((currentIndex) => currentIndex + 1)
  }

  function handleBack() {
    if (currentQuestionIndex === 0) {
      onExit()
      return
    }

    setCurrentQuestionIndex((currentIndex) => currentIndex - 1)
  }

  function handleReview() {
    setCompleted(false)
    setCurrentQuestionIndex(quizQuestions.length - 1)
  }

  function handleRestart() {
    setAnswers({})
    setCurrentQuestionIndex(0)
    setCompleted(false)
  }

  if (completed) {
    return (
      <QuizCompleted
        answeredQuestions={answeredQuestions}
        onReview={handleReview}
        onRestart={handleRestart}
        onExit={onExit}
      />
    )
  }

  return (
    <div className="min-h-screen bg-[#05070b] text-slate-100">
      <div
        aria-hidden="true"
        className="ambient-grid pointer-events-none fixed inset-0"
      />

      <header className="relative z-40 border-b border-white/5 bg-[#05070b]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
          <button
            type="button"
            onClick={onExit}
            className="group flex items-center gap-3 text-left"
            aria-label="Voltar para a página inicial"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
              <BrainCircuit className="h-5 w-5 text-cyan-300" />
            </div>

            <div>
              <span className="block text-sm font-black tracking-[0.18em] text-white">
                TI//MATCH
              </span>

              <span className="hidden text-[10px] uppercase tracking-[0.18em] text-slate-600 sm:block">
                Quiz em andamento
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={onExit}
            className="rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-400 transition hover:border-white/15 hover:bg-white/[0.06] hover:text-white"
          >
            Sair do quiz
          </button>
        </div>
      </header>

      <main className="relative px-5 py-8 sm:px-6 sm:py-12 lg:py-16">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 h-[420px] w-[700px] max-w-full -translate-x-1/2 rounded-full bg-violet-500/[0.06] blur-3xl"
        />

        <div className="relative mx-auto max-w-3xl">
          <QuizProgress
            current={currentQuestionIndex + 1}
            total={quizQuestions.length}
          />

          <div className="mt-8 rounded-[2rem] border border-white/[0.08] bg-[#090c13]/85 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.7)]" />

              <span className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                Escolha uma alternativa
              </span>
            </div>

            <h1 className="mt-5 text-2xl font-black leading-tight tracking-[-0.025em] text-white sm:text-3xl">
              {currentQuestion.question}
            </h1>

            {currentQuestion.context && (
              <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
                {currentQuestion.context}
              </p>
            )}

            <fieldset className="mt-8 space-y-3">
              <legend className="sr-only">
                Alternativas da pergunta {currentQuestionIndex + 1}
              </legend>

              {currentQuestion.options.map((option, optionIndex) => {
                const selected = selectedOptionId === option.id

                const letter = String.fromCharCode(65 + optionIndex)

                return (
                  <label
                    key={option.id}
                    className={[
                      'group relative flex cursor-pointer items-start gap-4 rounded-2xl border p-4 transition duration-200 sm:p-5',
                      selected
                        ? 'border-cyan-400/45 bg-cyan-400/[0.08] shadow-[0_0_28px_rgba(34,211,238,0.06)]'
                        : 'border-white/[0.07] bg-white/[0.025] hover:border-white/[0.14] hover:bg-white/[0.045]',
                    ].join(' ')}
                  >
                    <input
                      type="radio"
                      name={currentQuestion.id}
                      value={option.id}
                      checked={selected}
                      onChange={() => handleSelect(option.id)}
                      className="sr-only"
                    />

                    <div
                      className={[
                        'flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border text-sm font-black transition',
                        selected
                          ? 'border-cyan-300/50 bg-cyan-300 text-slate-950'
                          : 'border-white/10 bg-white/[0.035] text-slate-500 group-hover:text-slate-300',
                      ].join(' ')}
                    >
                      {selected ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        letter
                      )}
                    </div>

                    <div className="flex-1 pt-1">
                      <p
                        className={[
                          'text-sm font-medium leading-6 transition sm:text-[15px]',
                          selected
                            ? 'text-slate-100'
                            : 'text-slate-400 group-hover:text-slate-300',
                        ].join(' ')}
                      >
                        {option.text}
                      </p>
                    </div>

                    <div
                      className={[
                        'mt-1 h-4 w-4 shrink-0 rounded-full border transition',
                        selected
                          ? 'border-cyan-300 bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.5)]'
                          : 'border-white/15',
                      ].join(' ')}
                      aria-hidden="true"
                    />
                  </label>
                )
              })}
            </fieldset>

            <div className="mt-8 flex flex-col-reverse gap-3 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-5 py-3 text-sm font-bold text-slate-400 transition hover:border-white/15 hover:bg-white/[0.05] hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />

                {currentQuestionIndex === 0
                  ? 'Voltar ao início'
                  : 'Voltar'}
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={!selectedOptionId}
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-white transition enabled:hover:-translate-y-0.5 enabled:hover:shadow-[0_0_35px_rgba(59,130,246,0.22)] disabled:cursor-not-allowed disabled:opacity-30"
              >
                {isLastQuestion ? 'Finalizar quiz' : 'Próxima pergunta'}

                {isLastQuestion ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <ArrowRight className="h-5 w-5 transition-transform group-enabled:group-hover:translate-x-1" />
                )}
              </button>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 text-center text-xs leading-5 text-slate-600">
            <Sparkles className="h-3.5 w-3.5 shrink-0" />

            Suas escolhas são mantidas caso você volte para uma pergunta anterior.
          </div>
        </div>
      </main>
    </div>
  )
}

interface QuizCompletedProps {
  answeredQuestions: number
  onReview: () => void
  onRestart: () => void
  onExit: () => void
}

function QuizCompleted({
  answeredQuestions,
  onReview,
  onRestart,
  onExit,
}: QuizCompletedProps) {
  return (
    <div className="hero-glow min-h-screen bg-[#05070b] px-5 py-12 text-slate-100 sm:px-6">
      <div
        aria-hidden="true"
        className="ambient-grid pointer-events-none fixed inset-0"
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-2xl items-center justify-center">
        <div className="w-full rounded-[2rem] border border-white/[0.08] bg-[#090c13]/90 p-6 text-center shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10">
            <CheckCircle2 className="h-8 w-8 text-emerald-300" />
          </div>

          <p className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
            Todas as respostas registradas
          </p>

          <h1 className="mt-4 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
            Quiz concluído!
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Você respondeu às {answeredQuestions} perguntas. Nesta etapa estamos
            validando a navegação e o registro das escolhas. Na próxima etapa,
            essas respostas serão transformadas no seu perfil de TI.
          </p>

          <div className="mt-8 rounded-2xl border border-violet-400/15 bg-violet-400/[0.06] p-5">
            <p className="text-sm font-bold text-violet-200">
              Próxima etapa
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Cálculo das pontuações, normalização dos percentuais e descoberta
              automática da área predominante e das áreas secundárias.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={onReview}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-3 text-sm font-bold text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Revisar respostas
            </button>

            <button
              type="button"
              onClick={onRestart}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-3 text-sm font-bold text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
            >
              <RotateCcw className="h-4 w-4" />
              Reiniciar quiz
            </button>
          </div>

          <button
            type="button"
            onClick={onExit}
            className="mt-4 text-sm font-semibold text-slate-600 transition hover:text-slate-300"
          >
            Voltar para a página inicial
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuizPage