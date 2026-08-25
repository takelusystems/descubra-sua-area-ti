import {
  ArrowLeft,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  Code2,
  Cpu,
  Gamepad2,
  GraduationCap,
  Network,
  RefreshCcw,
  Route,
  Search,
  ShieldCheck,
  Sparkles,
  Trophy,
  WalletCards,
  type LucideIcon,
} from 'lucide-react'

import {
  techAreas,
  type TechAreaIcon,
} from '../data/areas'

import { professionsByArea } from '../data/professions'
import { resultProfiles } from '../data/resultProfiles'
import {
  salariesByArea,
  salaryDisclaimer,
} from '../data/salaries'
import { studyPaths } from '../data/studyPaths'

import type {
  AreaScore,
  QuizResult,
} from '../types/result'

interface ResultPageProps {
  result: QuizResult
  onReview: () => void
  onRestart: () => void
  onExit: () => void
}

interface AreaVisual {
  icon: LucideIcon
  iconClass: string
  borderClass: string
  backgroundClass: string
}

const areaVisuals: Record<TechAreaIcon, AreaVisual> = {
  hardware: {
    icon: Cpu,
    iconClass: 'text-cyan-300',
    borderClass: 'border-cyan-400/20',
    backgroundClass:
      'from-cyan-400/10 to-blue-500/[0.03]',
  },

  programming: {
    icon: Code2,
    iconClass: 'text-violet-300',
    borderClass: 'border-violet-400/20',
    backgroundClass:
      'from-violet-400/10 to-purple-500/[0.03]',
  },

  networks: {
    icon: Network,
    iconClass: 'text-blue-300',
    borderClass: 'border-blue-400/20',
    backgroundClass:
      'from-blue-400/10 to-cyan-500/[0.03]',
  },

  cybersecurity: {
    icon: ShieldCheck,
    iconClass: 'text-emerald-300',
    borderClass: 'border-emerald-400/20',
    backgroundClass:
      'from-emerald-400/10 to-green-500/[0.03]',
  },

  games: {
    icon: Gamepad2,
    iconClass: 'text-fuchsia-300',
    borderClass: 'border-fuchsia-400/20',
    backgroundClass:
      'from-fuchsia-400/10 to-pink-500/[0.03]',
  },

  ai: {
    icon: BrainCircuit,
    iconClass: 'text-amber-300',
    borderClass: 'border-amber-400/20',
    backgroundClass:
      'from-amber-400/10 to-orange-500/[0.03]',
  },
}

const CLOSE_MATCH_THRESHOLD = 8

function ResultPage({
  result,
  onReview,
  onRestart,
  onExit,
}: ResultPageProps) {
  const mainScore = result.ranking[0]
  const secondScore = result.ranking[1]

  const mainArea = getAreaById(mainScore.area)
  const secondArea = getAreaById(secondScore.area)

  const mainProfile =
    resultProfiles[mainScore.area]

  const mainVisual =
    areaVisuals[mainScore.area]

  const professionData =
    professionsByArea[mainScore.area]

  const studyPath =
    studyPaths[mainScore.area]

  const salaryData =
    salariesByArea[mainScore.area]

  const MainIcon = mainVisual.icon

  const difference =
    mainScore.percentage -
    secondScore.percentage

  const hasCloseMatch =
    difference <= CLOSE_MATCH_THRESHOLD

  const secondaryScores =
    result.ranking.slice(1, 3)

  return (
    <div className="min-h-screen overflow-hidden bg-[#05070b] text-slate-100">
      <div
        aria-hidden="true"
        className="ambient-grid pointer-events-none fixed inset-0"
      />

      <header className="relative z-40 border-b border-white/5 bg-[#05070b]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
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
                Seu resultado
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={onRestart}
            className="inline-flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-slate-400 transition hover:border-white/15 hover:bg-white/[0.06] hover:text-white"
          >
            <RefreshCcw className="h-3.5 w-3.5" />
            Refazer
          </button>
        </div>
      </header>

      <main className="hero-glow relative px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <section className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-violet-200">
              <Sparkles className="h-3.5 w-3.5" />
              Resultado calculado
            </div>

            <h1 className="mt-5 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              SEU PERFIL DE TI
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Analisamos suas respostas e comparamos
              sua compatibilidade com as seis áreas
              avaliadas.
            </p>
          </section>

          <section
            className={`relative mt-10 overflow-hidden rounded-[2rem] border ${mainVisual.borderClass} bg-gradient-to-br ${mainVisual.backgroundClass} p-6 shadow-2xl shadow-black/30 sm:p-8 lg:p-10`}
          >
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/[0.025] blur-3xl"
            />

            <div className="relative grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-[1.5rem] border ${mainVisual.borderClass} bg-black/20 sm:h-24 sm:w-24`}
              >
                <MainIcon
                  className={`h-10 w-10 sm:h-12 sm:w-12 ${mainVisual.iconClass}`}
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-amber-300" />

                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                    Sua área predominante
                  </p>
                </div>

                <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
                  {mainProfile.headline}
                </h2>

                <p className="mt-3 text-sm font-bold text-slate-300 sm:text-base">
                  {mainProfile.tagline}
                </p>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                  {mainProfile.description}
                </p>
              </div>

              <div className="flex lg:justify-end">
                <div className="min-w-32 rounded-2xl border border-white/[0.08] bg-black/20 px-6 py-5 text-center backdrop-blur-xl">
                  <p className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                    {Math.round(
                      mainScore.percentage,
                    )}
                    <span className="text-xl text-slate-500">
                      %
                    </span>
                  </p>

                  <p className="mt-2 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">
                    Compatibilidade
                  </p>
                </div>
              </div>
            </div>
          </section>

          {hasCloseMatch && (
            <section className="mt-5 rounded-2xl border border-violet-400/15 bg-violet-400/[0.06] p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10">
                  <Sparkles className="h-5 w-5 text-violet-300" />
                </div>

                <div>
                  <p className="font-black text-violet-100">
                    Seu perfil ficou bem dividido
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {mainArea.name} e{' '}
                    {secondArea.name} ficaram
                    separados por apenas{' '}
                    <strong className="text-slate-200">
                      {difference
                        .toFixed(1)
                        .replace('.', ',')}{' '}
                      pontos percentuais
                    </strong>
                    . Isso indica que você pode ter
                    afinidade relevante com os dois
                    caminhos, e eles podem inclusive
                    se complementar.
                  </p>
                </div>
              </div>
            </section>
          )}

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-[2rem] border border-white/[0.07] bg-[#090c13]/80 p-6 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                O que seu resultado sugere
              </p>

              <h3 className="mt-3 text-2xl font-black text-white">
                Um pouco mais sobre seu perfil
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                {mainProfile.detailedDescription}
              </p>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Além de {mainArea.name}, seu
                resultado também apresentou afinidade
                com{' '}
                <strong className="text-slate-300">
                  {
                    getAreaById(
                      secondaryScores[0].area,
                    ).name
                  }
                </strong>{' '}
                e{' '}
                <strong className="text-slate-300">
                  {
                    getAreaById(
                      secondaryScores[1].area,
                    ).name
                  }
                </strong>
                , o que mostra que seus interesses
                podem combinar conhecimentos de
                diferentes áreas da tecnologia.
              </p>
            </section>

            <section className="rounded-[2rem] border border-white/[0.07] bg-[#090c13]/80 p-6 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-300">
                Características relacionadas
              </p>

              <h3 className="mt-3 text-2xl font-black text-white">
                Pontos que apareceram no seu perfil
              </h3>

              <div className="mt-6 space-y-3">
                {mainProfile.traits.map(
                  (trait) => (
                    <div
                      key={trait}
                      className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06]">
                        <Search className="h-4 w-4 text-cyan-300" />
                      </div>

                      <span className="text-sm font-bold text-slate-300">
                        {trait}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </section>
          </div>

          <section className="mt-8 rounded-[2rem] border border-white/[0.07] bg-[#090c13]/80 p-6 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  Seu nível de compatibilidade
                </p>

                <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                  Como ficaram as seis áreas
                </h3>
              </div>

              <p className="text-xs text-slate-600">
                Da maior para a menor compatibilidade
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {result.ranking.map(
                (score, index) => (
                  <CompatibilityRow
                    key={score.area}
                    score={score}
                    position={index + 1}
                  />
                ),
              )}
            </div>

            <div className="mt-7 rounded-2xl border border-white/[0.05] bg-white/[0.02] p-4">
              <p className="text-xs leading-6 text-slate-600">
                Os percentuais representam sua
                compatibilidade individual com cada
                área. Por isso, eles não precisam
                somar 100%.
              </p>
            </div>
          </section>

          <section className="mt-8 rounded-[2rem] border border-white/[0.07] bg-[#090c13]/80 p-6 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/[0.08]">
              <BriefcaseBusiness className="h-6 w-6 text-violet-300" />
            </div>

            <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-violet-300">
              Profissões
            </p>

            <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
              {professionData.title}
            </h3>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
              {professionData.introduction}
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {professionData.professions.map(
                (profession) => (
                  <div
                    key={profession}
                    className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-400/[0.08]">
                      <Check className="h-4 w-4 text-violet-300" />
                    </div>

                    <span className="text-sm font-bold text-slate-300">
                      {profession}
                    </span>
                  </div>
                ),
              )}
            </div>
          </section>

          <section className="mt-8 rounded-[2rem] border border-white/[0.07] bg-[#090c13]/80 p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.08]">
                  <BookOpen className="h-6 w-6 text-cyan-300" />
                </div>

                <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  O que estudar
                </p>

                <h3 className="mt-3 text-2xl font-black text-white">
                  Comece construindo uma boa base
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Você não precisa aprender tudo de
                  uma vez. Estes são alguns dos
                  principais assuntos para começar a
                  explorar {mainArea.name}.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {studyPath.whatToStudy.map(
                    (subject) => (
                      <span
                        key={subject}
                        className="rounded-full border border-cyan-400/10 bg-cyan-400/[0.05] px-3 py-2 text-xs font-bold text-cyan-100"
                      >
                        {subject}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/[0.07]">
                    <Route className="h-5 w-5 text-blue-300" />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-300">
                      Trilha sugerida
                    </p>

                    <h3 className="mt-1 font-black text-white">
                      Do básico aos primeiros projetos
                    </h3>
                  </div>
                </div>

                <div className="relative mt-7">
                  <div
                    aria-hidden="true"
                    className="absolute bottom-5 left-[19px] top-5 w-px bg-gradient-to-b from-cyan-400/40 via-blue-400/20 to-violet-400/10"
                  />

                  <div className="space-y-3">
                    {studyPath.steps.map(
                      (step, index) => (
                        <div
                          key={step}
                          className="relative flex items-center gap-4 rounded-2xl border border-white/[0.05] bg-white/[0.02] p-3.5"
                        >
                          <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-[#0b111b] text-xs font-black text-blue-300">
                            {index + 1}
                          </div>

                          <p className="text-sm font-semibold leading-6 text-slate-300">
                            {step}
                          </p>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8 rounded-[2rem] border border-emerald-400/10 bg-gradient-to-br from-emerald-400/[0.05] via-[#090d11] to-cyan-400/[0.025] p-6 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.08]">
              <WalletCards className="h-6 w-6 text-emerald-300" />
            </div>

            <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
              Mercado de trabalho
            </p>

            <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
              Faixas salariais estimadas
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Referência utilizada:{' '}
              <strong className="text-slate-200">
                {salaryData.referenceRole}
              </strong>
              .
            </p>

            <div className="mt-7 grid gap-3 md:grid-cols-3">
              {salaryData.ranges.map(
                (range) => (
                  <div
                    key={range.level}
                    className="rounded-2xl border border-white/[0.07] bg-black/20 p-5"
                  >
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-slate-500">
                      {range.level}
                    </p>

                    <p className="mt-3 text-xl font-black text-white">
                      {formatCurrency(range.min)}
                    </p>

                    <p className="mt-1 text-xs font-medium text-slate-600">
                      até
                    </p>

                    <p className="mt-1 text-xl font-black text-emerald-300">
                      {formatCurrency(range.max)}
                    </p>

                    <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-600">
                      por mês
                    </p>
                  </div>
                ),
              )}
            </div>

            <div className="mt-6 rounded-2xl border border-white/[0.06] bg-black/20 p-5">
              <div className="flex items-start gap-3">
                <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />

                <div>
                  <p className="text-sm font-bold text-slate-300">
                    Fonte e referência
                  </p>

                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    {salaryData.source}. Dados de{' '}
                    {salaryData.referenceDate}.
                  </p>

                  {salaryData.methodologyNote && (
                    <p className="mt-2 text-xs leading-6 text-slate-600">
                      {salaryData.methodologyNote}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <p className="mt-5 text-xs leading-6 text-slate-600">
              {salaryDisclaimer}
            </p>
          </section>

          <section className="mt-8 rounded-[2rem] border border-blue-400/10 bg-gradient-to-br from-blue-400/[0.05] to-violet-400/[0.03] p-6 sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-300">
              Importante
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Este quiz possui finalidade educativa e
              orientativa. O resultado ajuda a
              explorar possibilidades dentro da
              tecnologia, mas não determina sua
              profissão nem limita as áreas que você
              pode aprender. Interesses e habilidades
              também podem mudar conforme você
              conhece novas experiências.
            </p>
          </section>

          <section className="mt-8 grid gap-3 sm:grid-cols-3">
            <button
              type="button"
              onClick={onReview}
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-3 text-sm font-bold text-slate-300 transition hover:border-white/15 hover:bg-white/[0.06] hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Revisar respostas
            </button>

            <button
              type="button"
              onClick={onRestart}
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-5 py-3 text-sm font-black uppercase tracking-[0.06em] text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(59,130,246,0.2)]"
            >
              <RefreshCcw className="h-4 w-4" />
              Refazer quiz
            </button>

            <button
              type="button"
              onClick={onExit}
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-3 text-sm font-bold text-slate-400 transition hover:border-white/15 hover:bg-white/[0.06] hover:text-white"
            >
              <BrainCircuit className="h-4 w-4" />
              Página inicial
            </button>
          </section>
        </div>
      </main>
    </div>
  )
}

interface CompatibilityRowProps {
  score: AreaScore
  position: number
}

function CompatibilityRow({
  score,
  position,
}: CompatibilityRowProps) {
  const area = getAreaById(score.area)
  const visual = areaVisuals[score.area]

  const Icon = visual.icon

  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 sm:p-5">
      <div className="flex items-center gap-4">
        <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.025] text-xs font-black text-slate-600 sm:flex">
          {position}
        </div>

        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${visual.borderClass} bg-white/[0.025]`}
        >
          <Icon
            className={`h-5 w-5 ${visual.iconClass}`}
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-4">
            <p className="truncate text-sm font-black text-slate-200 sm:text-base">
              {area.name}
            </p>

            <span className="shrink-0 text-lg font-black text-white">
              {Math.round(score.percentage)}%
            </span>
          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/[0.06]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 transition-[width] duration-700"
              style={{
                width: `${score.percentage}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function getAreaById(
  areaId: TechAreaIcon,
) {
  const area = techAreas.find(
    (item) => item.id === areaId,
  )

  if (!area) {
    throw new Error(
      `Área de tecnologia não encontrada: ${areaId}`,
    )
  }

  return area
}

function formatCurrency(
  value: number,
) {
  return new Intl.NumberFormat(
    'pt-BR',
    {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    },
  ).format(value)
}

export default ResultPage