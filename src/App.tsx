import { useState } from 'react'

import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  Code2,
  Cpu,
  Gamepad2,
  Gauge,
  LockKeyhole,
  Network,
  Route,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'

import {
  techAreas,
  type TechAreaIcon,
} from './data/areas'

import DashboardPage from './pages/DashboardPage'
import QuizPage from './pages/QuizPage'

const areaIcons: Record<
  TechAreaIcon,
  LucideIcon
> = {
  hardware: Cpu,
  programming: Code2,
  networks: Network,
  cybersecurity: ShieldCheck,
  games: Gamepad2,
  ai: BrainCircuit,
}

type AppView =
  | 'landing'
  | 'quiz'
  | 'dashboard'

function App() {
  const [
    currentView,
    setCurrentView,
  ] = useState<AppView>('landing')

  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  function startQuiz() {
    setCurrentView('quiz')
    goToTop()
  }

  function openDashboard() {
    setCurrentView('dashboard')
    goToTop()
  }

  function goHome() {
    setCurrentView('landing')
    goToTop()
  }

  if (currentView === 'quiz') {
    return (
      <QuizPage
        onExit={goHome}
      />
    )
  }

  if (
    currentView ===
    'dashboard'
  ) {
    return (
      <DashboardPage
        onBack={goHome}
        onStartQuiz={startQuiz}
      />
    )
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#05070b] text-slate-100">
      <div
        aria-hidden="true"
        className="ambient-grid pointer-events-none fixed inset-0"
      />

      <header className="relative z-50 border-b border-white/5 bg-[#05070b]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a
            href="#inicio"
            className="group flex items-center gap-3"
            aria-label="Descubra Sua Área de TI - início"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
              <BrainCircuit className="h-5 w-5 text-cyan-300" />

              <div className="absolute inset-0 rounded-xl bg-cyan-400/10 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
            </div>

            <div>
              <span className="block text-sm font-black tracking-[0.18em] text-white">
                TI//MATCH
              </span>

              <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 sm:block">
                Descubra sua área
              </span>
            </div>
          </a>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openDashboard}
              aria-label="Abrir panorama"
              className="inline-flex items-center gap-2 rounded-xl border border-violet-400/15 bg-violet-400/[0.05] px-3 py-2 text-xs font-bold text-violet-200 transition hover:border-violet-400/30 hover:bg-violet-400/[0.09] sm:px-4 sm:text-sm"
            >
              <BarChart3 className="h-4 w-4" />

              <span className="hidden md:inline">
                Panorama
              </span>
            </button>

            <a
              href="#areas"
              className="hidden rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-slate-300 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white sm:inline-flex sm:px-4 sm:text-sm"
            >
              Explorar áreas
            </a>
          </div>
        </div>
      </header>

      <main>
        <section
          id="inicio"
          className="hero-glow relative px-5 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-32 lg:pt-28"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.08] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-violet-200">
                <Sparkles className="h-3.5 w-3.5" />

                Quiz vocacional de tecnologia
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                DESCUBRA QUAL ÁREA DE TI{' '}
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  COMBINA COM VOCÊ
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                Responda algumas perguntas e
                descubra quais áreas da
                tecnologia mais combinam com
                seu perfil, quais profissões
                você pode seguir e o que
                estudar para começar.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={startQuiz}
                  className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-7 py-4 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[0_0_40px_rgba(59,130,246,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_55px_rgba(59,130,246,0.3)]"
                >
                  Começar o quiz

                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={openDashboard}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-bold text-slate-300 transition hover:border-violet-400/20 hover:bg-violet-400/[0.05] hover:text-white"
                >
                  <BarChart3 className="h-5 w-5 text-violet-300" />

                  Ver panorama
                </button>
              </div>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  15 perguntas
                </span>

                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  6 áreas de TI
                </span>

                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  Resultado personalizado
                </span>
              </div>

              <p className="mt-7 max-w-xl text-sm leading-6 text-slate-500">
                Não existem respostas certas
                ou erradas. Escolha as
                alternativas que mais
                combinam com você.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl"
              />

              <div
                aria-hidden="true"
                className="absolute -right-12 bottom-0 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl"
              />

              <div className="glass-panel relative rounded-[2rem] border border-white/10 p-3 shadow-2xl shadow-black/40">
                <div className="rounded-[1.55rem] border border-white/5 bg-[#080b12]/90 p-5 sm:p-7">
                  <div className="flex items-start justify-between gap-5 border-b border-white/5 pb-6">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                        Prévia do resultado
                      </p>

                      <h2 className="mt-2 text-xl font-black text-white sm:text-2xl">
                        Seu perfil de TI
                      </h2>
                    </div>

                    <div className="animate-pulse-soft flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10">
                      <Sparkles className="h-5 w-5 text-violet-300" />
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-blue-400/15 bg-gradient-to-br from-blue-500/10 to-violet-500/5 p-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-400/10">
                        <Code2 className="h-7 w-7 text-blue-300" />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
                          Área predominante
                        </p>

                        <p className="mt-1 text-xl font-black text-white">
                          Programação
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 space-y-5">
                    <CompatibilityBar
                      name="Programação"
                      value={92}
                      width="92%"
                    />

                    <CompatibilityBar
                      name="Inteligência Artificial"
                      value={84}
                      width="84%"
                    />

                    <CompatibilityBar
                      name="Jogos"
                      value={71}
                      width="71%"
                    />

                    <CompatibilityBar
                      name="Cibersegurança"
                      value={62}
                      width="62%"
                    />
                  </div>

                  <div className="mt-7 grid grid-cols-3 gap-2 sm:gap-3">
                    <MiniResultCard
                      icon={BriefcaseBusiness}
                      label="Carreiras"
                    />

                    <MiniResultCard
                      icon={Route}
                      label="Trilha"
                    />

                    <MiniResultCard
                      icon={Gauge}
                      label="Perfil"
                    />
                  </div>

                  <p className="mt-5 text-center text-xs leading-5 text-slate-600">
                    Exemplo visual. Seu
                    resultado será calculado
                    pelas suas respostas.
                  </p>
                </div>
              </div>

              <div className="animate-float absolute -left-3 top-[26%] hidden rounded-2xl border border-cyan-400/15 bg-[#0a1018]/90 p-3 shadow-xl shadow-black/30 backdrop-blur-xl sm:block lg:-left-8">
                <Cpu className="h-5 w-5 text-cyan-300" />
              </div>

              <div className="animate-float-delayed absolute -right-3 bottom-[20%] hidden rounded-2xl border border-violet-400/15 bg-[#0a1018]/90 p-3 shadow-xl shadow-black/30 backdrop-blur-xl sm:block lg:-right-7">
                <BrainCircuit className="h-5 w-5 text-violet-300" />
              </div>
            </div>
          </div>
        </section>

        <section
          id="areas"
          className="relative border-y border-white/5 bg-[#070a10]/75 px-5 py-20 sm:px-6 sm:py-24 lg:px-8"
        >
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[500px] w-[900px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.035] blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Explore possibilidades"
              title="Seis caminhos. Um perfil que é só seu."
              description="O quiz analisa diferentes características do seu perfil para indicar compatibilidade com seis grandes caminhos dentro da tecnologia."
            />

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {techAreas.map(
                (area) => {
                  const Icon =
                    areaIcons[
                      area.id
                    ]

                  return (
                    <article
                      key={area.id}
                      className={`group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0b0f17]/90 p-6 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-[#0e131d] ${area.borderClass}`}
                    >
                      <div
                        aria-hidden="true"
                        className={`absolute inset-0 bg-gradient-to-br ${area.glowClass} opacity-0 transition duration-500 group-hover:opacity-100`}
                      />

                      <div className="relative">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.045]">
                            <Icon
                              className={`h-6 w-6 ${area.iconClass}`}
                            />
                          </div>

                          <span className="rounded-full border border-white/[0.07] bg-white/[0.035] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                            {area.tag}
                          </span>
                        </div>

                        <h3 className="mt-6 text-xl font-black tracking-tight text-white">
                          {area.name}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-400">
                          {
                            area.description
                          }
                        </p>

                        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/[0.04] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                          <Check className="h-3.5 w-3.5 text-emerald-400" />

                          Área avaliada no quiz
                        </div>
                      </div>
                    </article>
                  )
                },
              )}
            </div>
          </div>
        </section>

        <section className="relative px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div
            aria-hidden="true"
            className="absolute right-0 top-20 h-80 w-80 rounded-full bg-violet-500/[0.05] blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-20 left-0 h-80 w-80 rounded-full bg-cyan-500/[0.04] blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-[2.4rem] border border-white/[0.08] bg-gradient-to-br from-[#0c1018] via-[#090d14] to-[#080b11] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.3)] sm:p-9 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
                <div className="text-left">
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.06] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300">
                    <Route className="h-3.5 w-3.5" />
                    Como funciona
                  </div>

                  <h2 className="mt-5 text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl">
                    Da curiosidade ao seu primeiro caminho em TI.
                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                    Em poucos passos, suas
                    respostas se transformam
                    em um perfil com
                    informações práticas
                    para você conhecer melhor
                    o universo da tecnologia.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-black/15 p-5 sm:p-6">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-violet-300">
                    Ao concluir, você recebe
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    <FeaturePill
                      icon={Gauge}
                      text="Perfil de TI"
                    />

                    <FeaturePill
                      icon={BriefcaseBusiness}
                      text="Carreiras"
                    />

                    <FeaturePill
                      icon={Route}
                      text="Trilha de estudos"
                    />
                  </div>
                </div>
              </div>

              <div className="relative mt-10 grid gap-5 md:grid-cols-3">
                <HowItWorksCard
                  number="01"
                  icon={Gauge}
                  eyebrow="Primeiro passo"
                  title="Responda"
                  description="Escolha as alternativas que melhor representam como você pensa, resolve problemas e se interessa por tecnologia."
                  accent="cyan"
                />

                <HowItWorksCard
                  number="02"
                  icon={BarChart3}
                  eyebrow="Análise"
                  title="Descubra seu perfil"
                  description="O sistema compara suas respostas entre as seis áreas e calcula suas compatibilidades de forma normalizada."
                  accent="violet"
                />

                <HowItWorksCard
                  number="03"
                  icon={Route}
                  eyebrow="Próximo caminho"
                  title="Saiba por onde começar"
                  description="Receba sugestões de profissões, assuntos para estudar e uma trilha inicial baseada no seu resultado."
                  accent="emerald"
                />
              </div>

              <div className="mt-8 grid gap-4 rounded-2xl border border-white/[0.07] bg-black/15 p-5 sm:grid-cols-3 sm:p-6">
                <QuizInfoItem
                  accent="cyan"
                  title="15 perguntas"
                  description="Uma sequência curta e objetiva."
                />

                <QuizInfoItem
                  accent="violet"
                  title="Sem respostas certas"
                  description="O foco é identificar compatibilidades."
                />

                <QuizInfoItem
                  accent="emerald"
                  title="Resultado imediato"
                  description="Perfil, carreiras e trilha de estudos."
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-y border-white/5 bg-[#070a0f]/70 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-[2rem] border border-emerald-400/10 bg-gradient-to-br from-emerald-400/[0.07] via-[#09100f] to-cyan-400/[0.035] p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/15 bg-emerald-400/10">
                  <LockKeyhole className="h-6 w-6 text-emerald-300" />
                </div>

                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
                    Privacidade em primeiro lugar
                  </p>

                  <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                    Seu resultado não precisa
                    da sua identidade.
                  </h3>

                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
                    O projeto utiliza apenas
                    estatísticas anônimas. Não
                    é necessário informar nome,
                    CPF, telefone, endereço ou
                    e-mail para participar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Sparkles className="mx-auto h-7 w-7 text-violet-300" />

            <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-violet-300">
              Seu próximo passo
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
              Pronto para descobrir um novo caminho?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Faça o quiz, conheça suas
              principais compatibilidades e
              encontre pontos de partida para
              explorar a tecnologia.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={startQuiz}
                className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-7 py-4 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[0_0_40px_rgba(59,130,246,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_55px_rgba(59,130,246,0.3)]"
              >
                Começar o quiz

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={openDashboard}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-bold text-slate-300 transition hover:border-violet-400/20 hover:bg-violet-400/[0.05] hover:text-white"
              >
                <BarChart3 className="h-5 w-5 text-violet-300" />

                Ver panorama
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/5 px-5 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <BrainCircuit className="h-5 w-5 text-cyan-300" />

            <span className="text-sm font-black tracking-[0.16em] text-slate-300">
              TI//MATCH
            </span>
          </div>

          <button
            type="button"
            onClick={openDashboard}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 transition hover:text-slate-300"
          >
            <BarChart3 className="h-3.5 w-3.5" />

            Panorama dos participantes
          </button>
        </div>
      </footer>
    </div>
  )
}

interface CompatibilityBarProps {
  name: string
  value: number
  width: string
}

function CompatibilityBar({
  name,
  value,
  width,
}: CompatibilityBarProps) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4 text-sm">
        <span className="font-semibold text-slate-300">
          {name}
        </span>

        <span className="font-black text-slate-200">
          {value}%
        </span>
      </div>

      <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
          style={{
            width,
          }}
        />
      </div>
    </div>
  )
}

interface MiniResultCardProps {
  icon: LucideIcon
  label: string
}

function MiniResultCard({
  icon: Icon,
  label,
}: MiniResultCardProps) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] px-2 py-3 text-center">
      <Icon className="mx-auto h-4 w-4 text-slate-400" />

      <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">
        {label}
      </p>
    </div>
  )
}

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description: string
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
        {title}
      </h2>

      <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
        {description}
      </p>
    </div>
  )
}

interface FeaturePillProps {
  icon: LucideIcon
  text: string
}

function FeaturePill({
  icon: Icon,
  text,
}: FeaturePillProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.035] px-4 py-3">
      <Icon className="h-4 w-4 shrink-0 text-violet-300" />

      <span className="text-xs font-bold text-slate-300">
        {text}
      </span>
    </div>
  )
}

type QuizInfoAccent =
  | 'cyan'
  | 'violet'
  | 'emerald'

interface QuizInfoItemProps {
  accent: QuizInfoAccent
  title: string
  description: string
}

const quizInfoStyles: Record<
  QuizInfoAccent,
  {
    border: string
    background: string
    icon: string
  }
> = {
  cyan: {
    border:
      'border-cyan-400/15',
    background:
      'bg-cyan-400/[0.07]',
    icon: 'text-cyan-300',
  },

  violet: {
    border:
      'border-violet-400/15',
    background:
      'bg-violet-400/[0.07]',
    icon:
      'text-violet-300',
  },

  emerald: {
    border:
      'border-emerald-400/15',
    background:
      'bg-emerald-400/[0.07]',
    icon:
      'text-emerald-300',
  },
}

function QuizInfoItem({
  accent,
  title,
  description,
}: QuizInfoItemProps) {
  const styles =
    quizInfoStyles[accent]

  return (
    <div className="flex items-start gap-3">
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${styles.border} ${styles.background}`}
      >
        <Check
          className={`h-4 w-4 ${styles.icon}`}
        />
      </div>

      <div>
        <p className="text-sm font-black text-white">
          {title}
        </p>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  )
}

type HowItWorksAccent =
  | 'cyan'
  | 'violet'
  | 'emerald'

interface HowItWorksCardProps {
  number: string
  icon: LucideIcon
  eyebrow: string
  title: string
  description: string
  accent: HowItWorksAccent
}

const howItWorksStyles: Record<
  HowItWorksAccent,
  {
    border: string
    background: string
    icon: string
    iconBackground: string
    eyebrow: string
    number: string
    glow: string
  }
> = {
  cyan: {
    border:
      'border-cyan-400/15',
    background:
      'from-cyan-400/[0.08] to-transparent',
    icon:
      'text-cyan-300',
    iconBackground:
      'border-cyan-400/20 bg-cyan-400/10',
    eyebrow:
      'text-cyan-300',
    number:
      'text-cyan-400/30',
    glow:
      'bg-cyan-400/[0.07]',
  },

  violet: {
    border:
      'border-violet-400/15',
    background:
      'from-violet-400/[0.08] to-transparent',
    icon:
      'text-violet-300',
    iconBackground:
      'border-violet-400/20 bg-violet-400/10',
    eyebrow:
      'text-violet-300',
    number:
      'text-violet-400/30',
    glow:
      'bg-violet-400/[0.07]',
  },

  emerald: {
    border:
      'border-emerald-400/15',
    background:
      'from-emerald-400/[0.08] to-transparent',
    icon:
      'text-emerald-300',
    iconBackground:
      'border-emerald-400/20 bg-emerald-400/10',
    eyebrow:
      'text-emerald-300',
    number:
      'text-emerald-400/30',
    glow:
      'bg-emerald-400/[0.07]',
  },
}

function HowItWorksCard({
  number,
  icon: Icon,
  eyebrow,
  title,
  description,
  accent,
}: HowItWorksCardProps) {
  const styles =
    howItWorksStyles[accent]

  return (
    <article
      className={`group relative min-h-[290px] overflow-hidden rounded-[1.7rem] border ${styles.border} bg-[#0d121b] p-6 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-[#101620] sm:p-7`}
    >
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-gradient-to-br ${styles.background} opacity-80`}
      />

      <div
        aria-hidden="true"
        className={`absolute -right-10 -top-10 h-32 w-32 rounded-full ${styles.glow} blur-3xl`}
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${styles.iconBackground}`}
          >
            <Icon
              className={`h-5 w-5 ${styles.icon}`}
            />
          </div>

          <span
            className={`font-mono text-3xl font-black ${styles.number}`}
          >
            {number}
          </span>
        </div>

        <p
          className={`mt-7 text-[10px] font-black uppercase tracking-[0.18em] ${styles.eyebrow}`}
        >
          {eyebrow}
        </p>

        <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-400">
          {description}
        </p>

        <div className="mt-auto pt-6">
          <div className="h-px bg-gradient-to-r from-white/10 to-transparent" />
        </div>
      </div>
    </article>
  )
}

export default App