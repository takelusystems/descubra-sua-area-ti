import {
  ArrowLeft,
  BarChart3,
  BrainCircuit,
  Code2,
  Cpu,
  Gamepad2,
  Medal,
  Network,
  Radio,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  WifiOff,
  type LucideIcon,
} from 'lucide-react'

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import AreaDistributionDonut from '../components/AreaDistributionDonut'

import {
  techAreas,
  type TechAreaIcon,
} from '../data/areas'

import {
  getQuizAreaDistribution,
  subscribeToQuizResultsChanges,
} from '../services/quizResults'

import type {
  AreaDistributionRow,
} from '../types/database'

interface DashboardPageProps {
  onBack: () => void
  onStartQuiz: () => void
}

interface AreaVisual {
  icon: LucideIcon
  iconClass: string
  borderClass: string
  barClass: string
}

type RealtimeStatus =
  | 'connecting'
  | 'connected'
  | 'error'

const areaVisuals: Record<
  TechAreaIcon,
  AreaVisual
> = {
  hardware: {
    icon: Cpu,
    iconClass: 'text-cyan-300',
    borderClass:
      'border-cyan-400/15',
    barClass:
      'from-cyan-400 to-blue-500',
  },

  programming: {
    icon: Code2,
    iconClass:
      'text-violet-300',
    borderClass:
      'border-violet-400/15',
    barClass:
      'from-violet-400 to-purple-500',
  },

  networks: {
    icon: Network,
    iconClass: 'text-blue-300',
    borderClass:
      'border-blue-400/15',
    barClass:
      'from-blue-400 to-cyan-500',
  },

  cybersecurity: {
    icon: ShieldCheck,
    iconClass:
      'text-emerald-300',
    borderClass:
      'border-emerald-400/15',
    barClass:
      'from-emerald-400 to-green-500',
  },

  games: {
    icon: Gamepad2,
    iconClass:
      'text-fuchsia-300',
    borderClass:
      'border-fuchsia-400/15',
    barClass:
      'from-fuchsia-400 to-pink-500',
  },

  ai: {
    icon: BrainCircuit,
    iconClass:
      'text-amber-300',
    borderClass:
      'border-amber-400/15',
    barClass:
      'from-amber-400 to-orange-500',
  },
}

function DashboardPage({
  onBack,
  onStartQuiz,
}: DashboardPageProps) {
  const [
    distribution,
    setDistribution,
  ] = useState<
    AreaDistributionRow[]
  >([])

  const [
    loading,
    setLoading,
  ] = useState(true)

  const [
    error,
    setError,
  ] = useState<string | null>(
    null,
  )

  const [
    realtimeStatus,
    setRealtimeStatus,
  ] = useState<RealtimeStatus>(
    'connecting',
  )

  const realtimeRefreshTimer =
    useRef<
      ReturnType<
        typeof setTimeout
      > | null
    >(null)

  const loadDashboard =
    useCallback(
      async (
        showLoading = true,
      ) => {
        if (showLoading) {
          setLoading(true)
          setError(null)
        }

        try {
          const data =
            await getQuizAreaDistribution()

          setDistribution(
            data,
          )

          setError(null)
        } catch (
          caughtError
        ) {
          if (!showLoading) {
            console.error(
              'Não foi possível atualizar o panorama em tempo real:',
              caughtError,
            )

            return
          }

          if (
            caughtError instanceof
            Error
          ) {
            setError(
              caughtError.message,
            )
          } else {
            setError(
              'Não foi possível carregar o panorama.',
            )
          }
        } finally {
          if (showLoading) {
            setLoading(false)
          }
        }
      },
      [],
    )

  useEffect(() => {
    void loadDashboard()
  }, [loadDashboard])

  useEffect(() => {
    setRealtimeStatus(
      'connecting',
    )

    const unsubscribe =
      subscribeToQuizResultsChanges(
        () => {
          if (
            realtimeRefreshTimer.current
          ) {
            clearTimeout(
              realtimeRefreshTimer.current,
            )
          }

          realtimeRefreshTimer.current =
            setTimeout(
              () => {
                void loadDashboard(
                  false,
                )
              },
              700,
            )
        },

        (status) => {
          if (
            status ===
            'SUBSCRIBED'
          ) {
            setRealtimeStatus(
              'connected',
            )

            return
          }

          if (
            status ===
              'CHANNEL_ERROR' ||
            status ===
              'TIMED_OUT'
          ) {
            setRealtimeStatus(
              'error',
            )

            return
          }

          if (
            status === 'CLOSED'
          ) {
            setRealtimeStatus(
              'connecting',
            )
          }
        },
      )

    return () => {
      if (
        realtimeRefreshTimer.current
      ) {
        clearTimeout(
          realtimeRefreshTimer.current,
        )
      }

      unsubscribe()
    }
  }, [loadDashboard])

  const ranking =
    useMemo(
      () =>
        [
          ...distribution,
        ].sort(
          (
            areaA,
            areaB,
          ) => {
            if (
              areaB.total !==
              areaA.total
            ) {
              return (
                areaB.total -
                areaA.total
              )
            }

            return (
              techAreas.findIndex(
                (area) =>
                  area.id ===
                  areaA.area,
              ) -
              techAreas.findIndex(
                (area) =>
                  area.id ===
                  areaB.area,
              )
            )
          },
        ),
      [distribution],
    )

  const totalParticipants =
    distribution[0]
      ?.total_participants ??
    0

  const leader =
    totalParticipants > 0
      ? ranking[0]
      : null

  const runnerUp =
    totalParticipants > 0
      ? ranking[1]
      : null

  return (
    <div className="min-h-screen overflow-hidden bg-[#05070b] text-slate-100">
      <div
        aria-hidden="true"
        className="ambient-grid pointer-events-none fixed inset-0"
      />

      <header className="relative z-40 border-b border-white/5 bg-[#05070b]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={onBack}
            className="group flex items-center gap-3 text-left"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
              <BrainCircuit className="h-5 w-5 text-cyan-300" />
            </div>

            <div>
              <span className="block text-sm font-black tracking-[0.18em] text-white">
                TI//MATCH
              </span>

              <span className="hidden text-[10px] uppercase tracking-[0.18em] text-slate-600 sm:block">
                Panorama geral
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-slate-400 transition hover:border-white/15 hover:bg-white/[0.06] hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Voltar
          </button>
        </div>
      </header>

      <main className="hero-glow relative px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <section className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
              <BarChart3 className="h-3.5 w-3.5" />
              Dados reais do quiz
            </div>

            <h1 className="mt-5 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              PANORAMA DOS PARTICIPANTES
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Veja quais áreas de
              Tecnologia da Informação
              estão predominando entre
              todas as respostas
              registradas até agora.
            </p>

            <div className="mt-6 flex justify-center">
              <RealtimeBadge
                status={
                  realtimeStatus
                }
              />
            </div>
          </section>

          {loading && (
            <DashboardLoading />
          )}

          {!loading &&
            error && (
              <DashboardError
                message={error}
                onRetry={
                  loadDashboard
                }
              />
            )}

          {!loading &&
            !error &&
            totalParticipants ===
              0 && (
              <EmptyDashboard
                onStartQuiz={
                  onStartQuiz
                }
                onRefresh={
                  loadDashboard
                }
              />
            )}

          {!loading &&
            !error &&
            totalParticipants >
              0 && (
              <>
                <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <StatisticCard
                    icon={Users}
                    eyebrow="Participação"
                    title={formatNumber(
                      totalParticipants,
                    )}
                    description="Total de respostas contabilizadas"
                    iconClass="text-cyan-300"
                  />

                  {leader && (
                    <StatisticCard
                      icon={Trophy}
                      eyebrow="Área mais escolhida"
                      title={getAreaName(
                        leader.area,
                      )}
                      description={`${formatPercentage(
                        leader.percentage,
                      )} dos participantes`}
                      iconClass="text-amber-300"
                    />
                  )}

                  {runnerUp && (
                    <StatisticCard
                      icon={Medal}
                      eyebrow="Segunda colocada"
                      title={getAreaName(
                        runnerUp.area,
                      )}
                      description={`${formatPercentage(
                        runnerUp.percentage,
                      )} dos participantes`}
                      iconClass="text-violet-300"
                    />
                  )}
                </section>

                <section className="mt-8 overflow-hidden rounded-[2rem] border border-white/[0.07] bg-[#090c13]/85 p-6 shadow-2xl shadow-black/20 sm:p-8">
                  <div className="flex flex-col gap-5 border-b border-white/[0.06] pb-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-300">
                        Visão geral
                      </p>

                      <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                        Distribuição dos resultados
                      </h2>

                      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                        O gráfico representa a
                        proporção de participantes
                        cuja área predominante foi
                        cada um dos seis caminhos
                        avaliados pelo quiz.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        void loadDashboard()
                      }
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-xs font-bold text-slate-400 transition hover:border-white/15 hover:bg-white/[0.06] hover:text-white"
                    >
                      <RefreshCw className="h-3.5 w-3.5" />
                      Atualizar dados
                    </button>
                  </div>

                  <div className="mt-8">
                    <AreaDistributionDonut
                      data={
                        distribution
                      }
                      totalParticipants={
                        totalParticipants
                      }
                    />
                  </div>
                </section>

                <section className="mt-8 rounded-[2rem] border border-white/[0.07] bg-[#090c13]/85 p-6 shadow-2xl shadow-black/20 sm:p-8">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                      Comparação detalhada
                    </p>

                    <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                      Qual área de TI está
                      predominando?
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                      As barras facilitam a
                      comparação precisa entre
                      quantidade e percentual
                      de cada área.
                    </p>
                  </div>

                  <div className="mt-8 space-y-4">
                    {ranking.map(
                      (
                        item,
                        index,
                      ) => (
                        <AreaDistributionCard
                          key={
                            item.area
                          }
                          item={
                            item
                          }
                          position={
                            index + 1
                          }
                        />
                      ),
                    )}
                  </div>
                </section>

                <section className="mt-8 grid gap-5 lg:grid-cols-[1fr_0.85fr]">
                  <div className="rounded-[2rem] border border-white/[0.07] bg-[#090c13]/80 p-6 sm:p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/15 bg-violet-400/[0.07]">
                      <Sparkles className="h-6 w-6 text-violet-300" />
                    </div>

                    <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-violet-300">
                      Como interpretar
                    </p>

                    <h2 className="mt-3 text-2xl font-black text-white">
                      Um retrato coletivo,
                      não uma competição
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      Os percentuais mostram
                      quantas pessoas tiveram
                      cada área como resultado
                      predominante. Uma área
                      aparecer em primeiro não
                      significa que seja melhor
                      ou mais importante do que
                      as demais.
                    </p>
                  </div>

                  <div className="rounded-[2rem] border border-emerald-400/10 bg-gradient-to-br from-emerald-400/[0.05] to-cyan-400/[0.025] p-6 sm:p-8">
                    <Users className="h-7 w-7 text-emerald-300" />

                    <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
                      Privacidade
                    </p>

                    <h2 className="mt-3 text-xl font-black text-white">
                      Estatísticas anônimas
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-slate-500">
                      Esta página recebe
                      apenas contagens e
                      percentuais agregados.
                      Os registros
                      individuais não são
                      disponibilizados ao
                      navegador.
                    </p>
                  </div>
                </section>

                <section className="mt-10 text-center">
                  <p className="text-sm text-slate-500">
                    Ainda não fez o teste?
                  </p>

                  <button
                    type="button"
                    onClick={
                      onStartQuiz
                    }
                    className="mt-4 inline-flex min-h-13 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-3 text-sm font-black uppercase tracking-[0.07em] text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(59,130,246,0.2)]"
                  >
                    Descobrir meu perfil
                  </button>
                </section>
              </>
            )}
        </div>
      </main>
    </div>
  )
}

interface RealtimeBadgeProps {
  status: RealtimeStatus
}

function RealtimeBadge({
  status,
}: RealtimeBadgeProps) {
  if (
    status === 'connected'
  ) {
    return (
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.05] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-emerald-300">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-40" />

          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
        </span>

        Atualização automática ativa
      </div>
    )
  }

  if (
    status === 'error'
  ) {
    return (
      <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/15 bg-amber-400/[0.05] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-amber-300">
        <WifiOff className="h-3.5 w-3.5" />

        Atualização automática indisponível
      </div>
    )
  }

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-400/[0.05] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-blue-300">
      <Radio className="h-3.5 w-3.5 animate-pulse" />

      Conectando atualização automática
    </div>
  )
}

interface StatisticCardProps {
  icon: LucideIcon
  eyebrow: string
  title: string
  description: string
  iconClass: string
}

function StatisticCard({
  icon: Icon,
  eyebrow,
  title,
  description,
  iconClass,
}: StatisticCardProps) {
  return (
    <article className="rounded-[1.6rem] border border-white/[0.07] bg-[#090c13]/85 p-5 sm:p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.035]">
        <Icon
          className={`h-5 w-5 ${iconClass}`}
        />
      </div>

      <p className="mt-5 text-[10px] font-black uppercase tracking-[0.18em] text-slate-600">
        {eyebrow}
      </p>

      <p className="mt-2 break-words text-2xl font-black tracking-tight text-white">
        {title}
      </p>

      <p className="mt-2 text-xs leading-5 text-slate-500">
        {description}
      </p>
    </article>
  )
}

interface AreaDistributionCardProps {
  item: AreaDistributionRow
  position: number
}

function AreaDistributionCard({
  item,
  position,
}: AreaDistributionCardProps) {
  const area =
    techAreas.find(
      (currentArea) =>
        currentArea.id ===
        item.area,
    )

  if (!area) {
    return null
  }

  const visual =
    areaVisuals[
      item.area
    ]

  const Icon =
    visual.icon

  return (
    <article
      className={`rounded-2xl border ${visual.borderClass} bg-white/[0.02] p-4 sm:p-5`}
    >
      <div className="flex items-center gap-4">
        <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-black/20 text-xs font-black text-slate-600 sm:flex">
          {position}
        </div>

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-black/20">
          <Icon
            className={`h-5 w-5 ${visual.iconClass}`}
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-black text-slate-200">
                {area.name}
              </p>

              <p className="mt-1 text-xs text-slate-600">
                {formatNumber(
                  item.total,
                )}{' '}
                {item.total === 1
                  ? 'participante'
                  : 'participantes'}
              </p>
            </div>

            <p className="shrink-0 text-lg font-black text-white">
              {formatPercentage(
                item.percentage,
              )}
            </p>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/[0.06]">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${visual.barClass} transition-[width] duration-700`}
              style={{
                width: `${Math.min(
                  100,
                  Math.max(
                    0,
                    item.percentage,
                  ),
                )}%`,
              }}
            />
          </div>
        </div>
      </div>
    </article>
  )
}

function DashboardLoading() {
  return (
    <section className="mt-12 rounded-[2rem] border border-white/[0.07] bg-[#090c13]/80 p-8 text-center sm:p-12">
      <RefreshCw className="mx-auto h-8 w-8 animate-spin text-cyan-300" />

      <p className="mt-5 font-black text-white">
        Carregando panorama...
      </p>

      <p className="mt-2 text-sm text-slate-600">
        Consultando as estatísticas
        agregadas.
      </p>
    </section>
  )
}

interface DashboardErrorProps {
  message: string
  onRetry: (
    showLoading?: boolean,
  ) => Promise<void>
}

function DashboardError({
  message,
  onRetry,
}: DashboardErrorProps) {
  return (
    <section className="mt-12 rounded-[2rem] border border-amber-400/15 bg-amber-400/[0.04] p-8 text-center sm:p-12">
      <p className="text-xl font-black text-white">
        Não foi possível carregar
        o panorama
      </p>

      <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
        O restante do site continua
        funcionando. Você pode tentar
        consultar as estatísticas
        novamente.
      </p>

      <details className="mx-auto mt-4 max-w-xl">
        <summary className="cursor-pointer text-xs font-semibold text-slate-600">
          Detalhes técnicos
        </summary>

        <p className="mt-2 break-words text-xs leading-6 text-slate-600">
          {message}
        </p>
      </details>

      <button
        type="button"
        onClick={() =>
          void onRetry()
        }
        className="mt-6 inline-flex items-center gap-2 rounded-xl border border-amber-400/15 bg-amber-400/[0.06] px-5 py-3 text-sm font-bold text-amber-200 transition hover:bg-amber-400/[0.1]"
      >
        <RefreshCw className="h-4 w-4" />
        Tentar novamente
      </button>
    </section>
  )
}

interface EmptyDashboardProps {
  onStartQuiz: () => void
  onRefresh: (
    showLoading?: boolean,
  ) => Promise<void>
}

function EmptyDashboard({
  onStartQuiz,
  onRefresh,
}: EmptyDashboardProps) {
  return (
    <section className="mt-12 rounded-[2rem] border border-white/[0.07] bg-[#090c13]/80 p-8 text-center sm:p-12">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.07]">
        <Users className="h-8 w-8 text-cyan-300" />
      </div>

      <h2 className="mt-6 text-2xl font-black text-white">
        Ainda não há respostas
        contabilizadas
      </h2>

      <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500">
        Assim que os primeiros
        participantes concluírem o
        quiz, a distribuição das
        áreas aparecerá
        automaticamente aqui.
      </p>

      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <button
          type="button"
          onClick={
            onStartQuiz
          }
          className="rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-5 py-3 text-sm font-black text-white"
        >
          Fazer o quiz
        </button>

        <button
          type="button"
          onClick={() =>
            void onRefresh()
          }
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-3 text-sm font-bold text-slate-400"
        >
          <RefreshCw className="h-4 w-4" />
          Atualizar
        </button>
      </div>
    </section>
  )
}

function getAreaName(
  areaId: TechAreaIcon,
) {
  return (
    techAreas.find(
      (area) =>
        area.id === areaId,
    )?.name ?? areaId
  )
}

function formatPercentage(
  value: number,
) {
  return `${new Intl.NumberFormat(
    'pt-BR',
    {
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    },
  ).format(value)}%`
}

function formatNumber(
  value: number,
) {
  return new Intl.NumberFormat(
    'pt-BR',
  ).format(value)
}

export default DashboardPage