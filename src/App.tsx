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

import { techAreas, type TechAreaIcon } from './data/areas'

const areaIcons: Record<TechAreaIcon, LucideIcon> = {
  hardware: Cpu,
  programming: Code2,
  networks: Network,
  cybersecurity: ShieldCheck,
  games: Gamepad2,
  ai: BrainCircuit,
}

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#05070b] text-slate-100">
      <div
        aria-hidden="true"
        className="ambient-grid pointer-events-none fixed inset-0"
      />

      <header className="relative z-50 border-b border-white/5 bg-[#05070b]/75 backdrop-blur-xl">
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

          <a
            href="#areas"
            className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
          >
            Explorar áreas
          </a>
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
                Responda algumas perguntas e descubra quais áreas da tecnologia
                mais combinam com seu perfil, quais profissões você pode seguir
                e o que estudar para começar.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-7 py-4 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[0_0_40px_rgba(59,130,246,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_55px_rgba(59,130,246,0.3)] focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-[#05070b]"
                >
                  Começar o quiz
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href="#areas"
                  className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-bold text-slate-300 transition duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                >
                  Conhecer as 6 áreas
                </a>
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
                Não existem respostas certas ou erradas. Escolha as alternativas
                que mais combinam com você.
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
                    <MiniResultCard icon={BriefcaseBusiness} label="Carreiras" />
                    <MiniResultCard icon={Route} label="Trilha" />
                    <MiniResultCard icon={Gauge} label="Perfil" />
                  </div>

                  <p className="mt-5 text-center text-xs leading-5 text-slate-600">
                    Exemplo visual. Seu resultado será calculado pelas suas
                    respostas.
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
          className="relative border-y border-white/5 bg-white/[0.015] px-5 py-20 sm:px-6 sm:py-24 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Explore possibilidades"
              title="Seis caminhos. Um perfil que é só seu."
              description="O quiz analisará diferentes características do seu perfil para indicar compatibilidade com seis grandes caminhos dentro da tecnologia."
            />

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {techAreas.map((area) => {
                const Icon = areaIcons[area.id]

                return (
                  <article
                    key={area.id}
                    className={`group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-[#0a0d14]/75 p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#0d111a] ${area.borderClass}`}
                  >
                    <div
                      aria-hidden="true"
                      className={`absolute inset-0 bg-gradient-to-br ${area.glowClass} opacity-0 transition duration-500 group-hover:opacity-100`}
                    />

                    <div className="relative">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.04]">
                          <Icon className={`h-6 w-6 ${area.iconClass}`} />
                        </div>

                        <span className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                          {area.tag}
                        </span>
                      </div>

                      <h3 className="mt-6 text-xl font-black tracking-tight text-white">
                        {area.name}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-400">
                        {area.description}
                      </p>

                      <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-500 transition group-hover:text-slate-300">
                        Faz parte do quiz
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Como funciona"
              title="Da curiosidade ao seu primeiro caminho em TI."
              description="A experiência foi pensada para transformar respostas simples em informações úteis para quem ainda está explorando o universo da tecnologia."
            />

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              <HowItWorksCard
                number="01"
                icon={Gauge}
                title="Responda"
                description="Escolha as alternativas que melhor representam como você pensa, resolve problemas e se interessa por tecnologia."
              />

              <HowItWorksCard
                number="02"
                icon={BarChart3}
                title="Descubra seu perfil"
                description="O sistema compara suas respostas entre as seis áreas e calcula suas compatibilidades."
              />

              <HowItWorksCard
                number="03"
                icon={Route}
                title="Encontre um caminho"
                description="Receba sugestões de profissões, assuntos para estudar e uma trilha inicial baseada no seu resultado."
              />
            </div>

            <div className="mt-12 overflow-hidden rounded-[2rem] border border-emerald-400/10 bg-gradient-to-br from-emerald-400/[0.06] via-[#09100f] to-cyan-400/[0.03] p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/15 bg-emerald-400/10">
                  <LockKeyhole className="h-6 w-6 text-emerald-300" />
                </div>

                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
                    Privacidade em primeiro lugar
                  </p>

                  <h3 className="mt-2 text-xl font-black text-white">
                    Seu resultado não precisa da sua identidade.
                  </h3>

                  <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                    O projeto foi planejado para gerar estatísticas anônimas.
                    Não será necessário informar nome, CPF, telefone, endereço
                    ou e-mail para participar.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-sm font-medium text-slate-500">
                Pronto para descobrir um novo caminho?
              </p>

              <button
                type="button"
                className="group mt-5 inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.08em] text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-[#05070b]"
              >
                Começar o quiz
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
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

          <p className="text-xs leading-5 text-slate-600">
            Descubra possibilidades. Explore tecnologia. Construa seu caminho.
          </p>
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
        <span className="font-semibold text-slate-300">{name}</span>
        <span className="font-black text-slate-200">{value}%</span>
      </div>

      <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
          style={{ width }}
        />
      </div>
    </div>
  )
}

interface MiniResultCardProps {
  icon: LucideIcon
  label: string
}

function MiniResultCard({ icon: Icon, label }: MiniResultCardProps) {
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

interface HowItWorksCardProps {
  number: string
  icon: LucideIcon
  title: string
  description: string
}

function HowItWorksCard({
  number,
  icon: Icon,
  title,
  description,
}: HowItWorksCardProps) {
  return (
    <article className="relative rounded-3xl border border-white/[0.07] bg-[#090c12]/70 p-6">
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-400/15 bg-blue-400/[0.07]">
          <Icon className="h-5 w-5 text-blue-300" />
        </div>

        <span className="font-mono text-sm font-black text-slate-700">
          {number}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-black text-white">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
    </article>
  )
}

export default App