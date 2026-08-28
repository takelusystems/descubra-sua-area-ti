import {
  ArrowLeft,
  BookOpenCheck,
  BrainCircuit,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  GraduationCap,
  LoaderCircle,
  Mail,
  RefreshCw,
  Send,
  ShieldCheck,
  UserRound,
  type LucideIcon,
} from 'lucide-react'

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from 'react'

import {
  ageRanges,
  dayOptions,
  professionalCourses,
  sexOptions,
  shiftOptions,
  technicalCourses,
  weeklyFrequencyOptions,
} from '../data/courseInterest'

import {
  saveCourseInterest,
} from '../services/courseInterest'

import type {
  CourseInterestSaveStatus,
  CourseInterestSubmission,
} from '../types/courseInterest'

interface CourseInterestPageProps {
  onBack: () => void
}

interface CourseInterestFormData {
  name: string
  email: string

  ageRange: string
  sex: string

  professionalCourses: string[]
  technicalCourses: string[]

  otherProfessionalCourse: string
  otherTechnicalCourse: string

  preferredShifts: string[]

  weeklyFrequency: number | null

  preferredDays: string[]

  wantsCourseUpdates:
    | ''
    | 'yes'
    | 'no'

  privacyAcknowledged: boolean
}

type MultiSelectField =
  | 'professionalCourses'
  | 'technicalCourses'
  | 'preferredShifts'
  | 'preferredDays'

const initialFormData:
  CourseInterestFormData = {
    name: '',
    email: '',

    ageRange: '',
    sex: '',

    professionalCourses: [],
    technicalCourses: [],

    otherProfessionalCourse: '',
    otherTechnicalCourse: '',

    preferredShifts: [],

    weeklyFrequency: null,

    preferredDays: [],

    wantsCourseUpdates: '',

    privacyAcknowledged: false,
  }

function CourseInterestPage({
  onBack,
}: CourseInterestPageProps) {
  const [
    form,
    setForm,
  ] = useState<CourseInterestFormData>(
    initialFormData,
  )

  const [
    formError,
    setFormError,
  ] = useState<string | null>(
    null,
  )

  const [
    saveStatus,
    setSaveStatus,
  ] =
    useState<CourseInterestSaveStatus>(
      'idle',
    )

  const [
    saveError,
    setSaveError,
  ] = useState<string | null>(
    null,
  )

  const submissionKeyRef =
    useRef<string>(
      crypto.randomUUID(),
    )

  const isSaving =
    saveStatus === 'saving'

  useEffect(() => {
  if (saveStatus !== 'saved') {
    return
  }

  const timeoutId =
    window.setTimeout(() => {
      onBack()
    }, 3000)

  return () => {
    window.clearTimeout(
      timeoutId,
    )
  }
}, [saveStatus, onBack])

  function markFormChanged() {
    setFormError(null)
    setSaveError(null)

    if (!isSaving) {
      setSaveStatus('idle')
    }
  }

  function updateMultiSelect(
    field: MultiSelectField,
    value: string,
  ) {
    setForm((currentForm) => ({
      ...currentForm,

      [field]: toggleListItem(
        currentForm[field],
        value,
      ),
    }))

    markFormChanged()
  }

  function validateForm():
    string | null {
    const name =
      form.name.trim()

    const email =
      form.email.trim()

    const otherProfessional =
      form.otherProfessionalCourse.trim()

    const otherTechnical =
      form.otherTechnicalCourse.trim()

    const hasCourse =
      form.professionalCourses.length >
        0 ||
      form.technicalCourses.length >
        0 ||
      otherProfessional.length > 0 ||
      otherTechnical.length > 0

    if (
      name.length > 0 &&
      name.length < 2
    ) {
      return (
        'Se informar o nome, use ' +
        'pelo menos 2 caracteres.'
      )
    }

    if (name.length > 120) {
      return (
        'O nome deve possuir no máximo ' +
        '120 caracteres.'
      )
    }

    if (
      email.length > 0 &&
      !isValidEmail(email)
    ) {
      return 'Informe um e-mail válido.'
    }

    if (email.length > 254) {
      return (
        'O e-mail deve possuir no máximo ' +
        '254 caracteres.'
      )
    }

    if (!form.ageRange) {
      return (
        'Selecione sua faixa etária.'
      )
    }

    if (!form.sex) {
      return (
        'Selecione uma opção no campo sexo.'
      )
    }

    if (
      otherProfessional.length === 1
    ) {
      return (
        'Se informar outro curso de ' +
        'qualificação, use pelo menos ' +
        '2 caracteres.'
      )
    }

    if (
      otherProfessional.length > 160
    ) {
      return (
        'O outro curso de qualificação ' +
        'deve possuir no máximo ' +
        '160 caracteres.'
      )
    }

    if (
      otherTechnical.length === 1
    ) {
      return (
        'Se informar outro curso técnico, ' +
        'use pelo menos 2 caracteres.'
      )
    }

    if (
      otherTechnical.length > 160
    ) {
      return (
        'O outro curso técnico deve ' +
        'possuir no máximo 160 caracteres.'
      )
    }

    if (!hasCourse) {
      return (
        'Selecione pelo menos um curso ' +
        'de seu interesse.'
      )
    }

    if (
      form.preferredShifts.length === 0
    ) {
      return (
        'Selecione pelo menos um turno ' +
        'em que você teria disponibilidade.'
      )
    }

    if (
      form.weeklyFrequency === null
    ) {
      return (
        'Informe quantas vezes por semana ' +
        'seria melhor para você.'
      )
    }

    if (
      form.preferredDays.length === 0
    ) {
      return (
        'Selecione pelo menos um dia ' +
        'da semana.'
      )
    }

    if (
      !form.wantsCourseUpdates
    ) {
      return (
        'Informe se gostaria de receber ' +
        'informações sobre futuros cursos.'
      )
    }

    if (
      form.wantsCourseUpdates ===
        'yes' &&
      !email
    ) {
      return (
        'Para receber informações sobre ' +
        'futuros cursos, informe um ' +
        'e-mail ou selecione “Não”.'
      )
    }

    if (
      !form.privacyAcknowledged
    ) {
      return (
        'É necessário confirmar que você ' +
        'está ciente da finalidade da ' +
        'pesquisa.'
      )
    }

    return null
  }

  function buildSubmission():
    CourseInterestSubmission | null {
    if (
      form.weeklyFrequency === null
    ) {
      return null
    }

    return {
      submissionKey:
        submissionKeyRef.current,

      name:
        form.name,

      email:
        form.email,

      ageRange:
        form.ageRange,

      sex:
        form.sex,

      professionalCourses:
        form.professionalCourses,

      technicalCourses:
        form.technicalCourses,

      otherProfessionalCourse:
        form.otherProfessionalCourse,

      otherTechnicalCourse:
        form.otherTechnicalCourse,

      preferredShifts:
        form.preferredShifts,

      weeklyFrequency:
        form.weeklyFrequency,

      preferredDays:
        form.preferredDays,

      wantsCourseUpdates:
        form.wantsCourseUpdates ===
        'yes',

      privacyAcknowledged:
        form.privacyAcknowledged,
    }
  }

  async function submitForm() {
    if (isSaving) {
      return
    }

    const validationError =
      validateForm()

    if (validationError) {
      setFormError(
        validationError,
      )

      setSaveStatus('idle')
      setSaveError(null)

      scrollToStatus()

      return
    }

    const submission =
      buildSubmission()

    if (!submission) {
      setFormError(
        'Informe a frequência semanal.',
      )

      scrollToStatus()

      return
    }

    setFormError(null)
    setSaveError(null)
    setSaveStatus('saving')

    try {
      await saveCourseInterest(
        submission,
      )

      setSaveStatus('saved')

      scrollToStatus()
    } catch (caughtError) {
      const message =
        caughtError instanceof Error
          ? caughtError.message
          : (
              'Não foi possível enviar ' +
              'suas respostas.'
            )

      setSaveError(message)
      setSaveStatus('error')

      scrollToStatus()
    }
  }

  function handleSubmit(
    event:
      FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault()

    void submitForm()
  }

  function handleRetry() {
    void submitForm()
  }

  function scrollToStatus() {
    window.setTimeout(() => {
      document
        .getElementById(
          'course-form-status',
        )
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
    }, 50)
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#05070b] text-slate-100">
      <div
        aria-hidden="true"
        className="ambient-grid pointer-events-none fixed inset-0"
      />

      <header className="relative z-40 border-b border-white/5 bg-[#05070b]/85 backdrop-blur-xl">
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
                Interesse em cursos
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
        <div className="mx-auto max-w-6xl">
          <section className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-violet-200">
              <BookOpenCheck className="h-3.5 w-3.5" />

              Pesquisa de interesse
            </div>

            <h1 className="mx-auto mt-5 max-w-4xl text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              QUAIS CURSOS VOCÊ GOSTARIA
              DE FAZER?
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
              Ajude-nos a conhecer quais
              formações despertam mais
              interesse e quais horários
              seriam mais adequados para
              futuros alunos.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <InfoBadge
                icon={Clock3}
                text="Cerca de 2 minutos"
              />

              <InfoBadge
                icon={Check}
                text="Escolha vários cursos"
              />

              <InfoBadge
                icon={ShieldCheck}
                text="Nome e e-mail opcionais"
              />
            </div>
          </section>

          <form
            onSubmit={handleSubmit}
            className={`mt-12 space-y-7 ${
              saveStatus === 'saved'
                ? 'pointer-events-none'
                : ''
            }`}
            aria-busy={isSaving}
          >
            <FormSection
              number="01"
              icon={UserRound}
              eyebrow="Sobre você"
              title="Conte um pouco sobre o seu perfil"
              description="Nome e e-mail são opcionais. As demais informações ajudam a compreender melhor o perfil de interesse pelos cursos."
            >
              <div className="grid gap-5 md:grid-cols-2">
                <TextField
                  label="Nome completo"
                  optional
                  value={form.name}
                  placeholder="Seu nome"
                  autoComplete="name"
                  disabled={isSaving}
                  onChange={(value) => {
                    setForm(
                      (current) => ({
                        ...current,
                        name: value,
                      }),
                    )

                    markFormChanged()
                  }}
                />

                <TextField
                  label="E-mail"
                  optional
                  type="email"
                  value={form.email}
                  placeholder="seuemail@exemplo.com"
                  autoComplete="email"
                  disabled={isSaving}
                  onChange={(value) => {
                    setForm(
                      (current) => ({
                        ...current,
                        email: value,
                      }),
                    )

                    markFormChanged()
                  }}
                />
              </div>

              <div className="mt-7 grid gap-7 lg:grid-cols-2">
                <div>
                  <FieldLabel>
                    Faixa etária
                  </FieldLabel>

                  <select
                    value={
                      form.ageRange
                    }
                    disabled={
                      isSaving
                    }
                    onChange={(
                      event,
                    ) => {
                      setForm(
                        (current) => ({
                          ...current,

                          ageRange:
                            event
                              .target
                              .value,
                        }),
                      )

                      markFormChanged()
                    }}
                    className="mt-3 h-13 w-full rounded-xl border border-white/[0.08] bg-[#090d14] px-4 text-sm text-slate-200 outline-none transition focus:border-cyan-400/35 focus:ring-2 focus:ring-cyan-400/10 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <option value="">
                      Selecione uma faixa
                    </option>

                    {ageRanges.map(
                      (option) => (
                        <option
                          key={
                            option.value
                          }
                          value={
                            option.value
                          }
                        >
                          {
                            option.label
                          }
                        </option>
                      ),
                    )}
                  </select>
                </div>

                <div>
                  <FieldLabel>
                    Sexo
                  </FieldLabel>

                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    {sexOptions.map(
                      (option) => (
                        <RadioCard
                          key={
                            option.value
                          }
                          name="sex"
                          label={
                            option.label
                          }
                          checked={
                            form.sex ===
                            option.value
                          }
                          disabled={
                            isSaving
                          }
                          onChange={() => {
                            setForm(
                              (
                                current,
                              ) => ({
                                ...current,

                                sex:
                                  option.value,
                              }),
                            )

                            markFormChanged()
                          }}
                        />
                      ),
                    )}
                  </div>
                </div>
              </div>
            </FormSection>

            <FormSection
              number="02"
              icon={BookOpenCheck}
              eyebrow="Qualificação profissional"
              title="Quais cursos despertam seu interesse?"
              description="Você pode selecionar quantas opções quiser. Isso nos ajuda a identificar quais temas possuem maior procura."
            >
              <SelectionCounter
                count={
                  form
                    .professionalCourses
                    .length
                }
                label="qualificações selecionadas"
              />

              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {professionalCourses.map(
                  (course) => (
                    <CheckboxCard
                      key={course}
                      label={course}
                      checked={
                        form
                          .professionalCourses
                          .includes(
                            course,
                          )
                      }
                      disabled={
                        isSaving
                      }
                      onChange={() =>
                        updateMultiSelect(
                          'professionalCourses',
                          course,
                        )
                      }
                    />
                  ),
                )}
              </div>

              <div className="mt-6">
                <TextField
                  label="Outro curso de qualificação profissional"
                  optional
                  value={
                    form
                      .otherProfessionalCourse
                  }
                  placeholder="Digite outro curso que gostaria de fazer"
                  disabled={
                    isSaving
                  }
                  maxLength={160}
                  onChange={(value) => {
                    setForm(
                      (current) => ({
                        ...current,

                        otherProfessionalCourse:
                          value,
                      }),
                    )

                    markFormChanged()
                  }}
                />
              </div>
            </FormSection>

            <FormSection
              number="03"
              icon={GraduationCap}
              eyebrow="Cursos técnicos"
              title="Você teria interesse em uma formação técnica?"
              description="Marque todos os cursos técnicos que você consideraria fazer."
            >
              <SelectionCounter
                count={
                  form
                    .technicalCourses
                    .length
                }
                label="cursos técnicos selecionados"
              />

              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {technicalCourses.map(
                  (course) => (
                    <CheckboxCard
                      key={course}
                      label={course}
                      checked={
                        form
                          .technicalCourses
                          .includes(
                            course,
                          )
                      }
                      disabled={
                        isSaving
                      }
                      onChange={() =>
                        updateMultiSelect(
                          'technicalCourses',
                          course,
                        )
                      }
                    />
                  ),
                )}
              </div>

              <div className="mt-6">
                <TextField
                  label="Outro curso técnico"
                  optional
                  value={
                    form
                      .otherTechnicalCourse
                  }
                  placeholder="Digite outro curso técnico de seu interesse"
                  disabled={
                    isSaving
                  }
                  maxLength={160}
                  onChange={(value) => {
                    setForm(
                      (current) => ({
                        ...current,

                        otherTechnicalCourse:
                          value,
                      }),
                    )

                    markFormChanged()
                  }}
                />
              </div>
            </FormSection>

            <FormSection
              number="04"
              icon={CalendarDays}
              eyebrow="Disponibilidade"
              title="Quando seria melhor estudar?"
              description="Essas respostas ajudam a entender quais horários e formatos de turma seriam mais adequados."
            >
              <div>
                <FieldLabel>
                  Em quais turnos você
                  teria disponibilidade?
                </FieldLabel>

                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Você pode selecionar
                  mais de um turno.
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {shiftOptions.map(
                    (option) => (
                      <CheckboxCard
                        key={
                          option.value
                        }
                        label={
                          option.label
                        }
                        description={
                          option.description
                        }
                        checked={
                          form
                            .preferredShifts
                            .includes(
                              option.value,
                            )
                        }
                        disabled={
                          isSaving
                        }
                        onChange={() =>
                          updateMultiSelect(
                            'preferredShifts',
                            option.value,
                          )
                        }
                      />
                    ),
                  )}
                </div>
              </div>

              <div className="mt-8 border-t border-white/[0.06] pt-8">
                <FieldLabel>
                  Quantas vezes por semana
                  seria melhor?
                </FieldLabel>

                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                  {weeklyFrequencyOptions.map(
                    (option) => (
                      <RadioCard
                        key={
                          option.value
                        }
                        name="weekly-frequency"
                        label={
                          option.label
                        }
                        checked={
                          form
                            .weeklyFrequency ===
                          option.value
                        }
                        disabled={
                          isSaving
                        }
                        onChange={() => {
                          setForm(
                            (
                              current,
                            ) => ({
                              ...current,

                              weeklyFrequency:
                                option.value,
                            }),
                          )

                          markFormChanged()
                        }}
                      />
                    ),
                  )}
                </div>
              </div>

              <div className="mt-8 border-t border-white/[0.06] pt-8">
                <FieldLabel>
                  Quais dias da semana
                  seriam melhores?
                </FieldLabel>

                <p className="mt-2 text-xs leading-5 text-slate-600">
                  Selecione todos os dias
                  em que você teria
                  disponibilidade para
                  participar de um curso.
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {dayOptions.map(
                    (option) => (
                      <CheckboxCard
                        key={
                          option.value
                        }
                        label={
                          option.label
                        }
                        checked={
                          form
                            .preferredDays
                            .includes(
                              option.value,
                            )
                        }
                        disabled={
                          isSaving
                        }
                        onChange={() =>
                          updateMultiSelect(
                            'preferredDays',
                            option.value,
                          )
                        }
                      />
                    ),
                  )}
                </div>
              </div>
            </FormSection>

            <FormSection
              number="05"
              icon={ShieldCheck}
              eyebrow="Contato e privacidade"
              title="Como podemos usar essas informações?"
              description="As respostas serão utilizadas para levantamento de interesse e planejamento de futuras ofertas de cursos."
            >
              <div>
                <FieldLabel>
                  Você gostaria de receber
                  informações caso algum
                  dos cursos de seu
                  interesse seja oferecido?
                </FieldLabel>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <RadioCard
                    name="course-updates"
                    label="Sim, gostaria de receber informações"
                    checked={
                      form
                        .wantsCourseUpdates ===
                      'yes'
                    }
                    disabled={
                      isSaving
                    }
                    onChange={() => {
                      setForm(
                        (current) => ({
                          ...current,

                          wantsCourseUpdates:
                            'yes',
                        }),
                      )

                      markFormChanged()
                    }}
                  />

                  <RadioCard
                    name="course-updates"
                    label="Não desejo receber informações"
                    checked={
                      form
                        .wantsCourseUpdates ===
                      'no'
                    }
                    disabled={
                      isSaving
                    }
                    onChange={() => {
                      setForm(
                        (current) => ({
                          ...current,

                          wantsCourseUpdates:
                            'no',
                        }),
                      )

                      markFormChanged()
                    }}
                  />
                </div>

                {form
                  .wantsCourseUpdates ===
                  'yes' &&
                  !form.email.trim() && (
                    <div className="mt-4 rounded-xl border border-amber-400/15 bg-amber-400/[0.05] px-4 py-3 text-xs leading-5 text-amber-200/80">
                      Para receber
                      informações
                      futuramente, será
                      necessário informar
                      um e-mail no início
                      do formulário.
                    </div>
                  )}
              </div>

              <div className="mt-8 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.04] p-5 sm:p-6">
                <div className="flex gap-4">
                  <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-emerald-300" />

                  <div>
                    <p className="font-black text-white">
                      Privacidade dos dados
                    </p>

                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      Nome e e-mail são
                      opcionais. As
                      informações fornecidas
                      nesta pesquisa serão
                      utilizadas para
                      levantamento de
                      interesse e
                      planejamento de futuras
                      ofertas de cursos.
                      Caso você informe um
                      e-mail e autorize o
                      recebimento de
                      informações, ele poderá
                      também ser utilizado
                      para comunicar
                      oportunidades
                      relacionadas aos cursos
                      indicados. As respostas
                      individuais não serão
                      exibidas publicamente.
                    </p>

                    <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-xl border border-white/[0.07] bg-black/15 p-4 transition hover:border-emerald-400/20">
                      <input
                        type="checkbox"
                        checked={
                          form
                            .privacyAcknowledged
                        }
                        disabled={
                          isSaving
                        }
                        onChange={(
                          event,
                        ) => {
                          setForm(
                            (
                              current,
                            ) => ({
                              ...current,

                              privacyAcknowledged:
                                event
                                  .target
                                  .checked,
                            }),
                          )

                          markFormChanged()
                        }}
                        className="mt-0.5 h-4 w-4 accent-emerald-400 disabled:cursor-not-allowed"
                      />

                      <span className="text-sm leading-6 text-slate-300">
                        Li e estou ciente
                        da finalidade desta
                        pesquisa.
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </FormSection>

            <div
              id="course-form-status"
              className="scroll-mt-8"
            >
              {formError && (
                <div className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.05] p-5 text-sm leading-6 text-amber-100">
                  <p className="font-black">
                    Revise o formulário
                  </p>

                  <p className="mt-1 text-amber-100/70">
                    {formError}
                  </p>
                </div>
              )}

              {saveStatus ===
                'saving' && (
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.05] p-5">
                  <div className="flex items-start gap-3">
                    <LoaderCircle className="mt-0.5 h-5 w-5 shrink-0 animate-spin text-cyan-300" />

                    <div>
                      <p className="font-black text-white">
                        Enviando suas
                        respostas
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        Aguarde enquanto
                        registramos sua
                        participação.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {saveStatus ===
                'saved' && (
                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.05] p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10">
                      <Check className="h-5 w-5 text-emerald-300" />
                    </div>

                    <div>
                      <p className="font-black text-white">
                        Respostas enviadas
                        com sucesso
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        Obrigado por
                        participar. Suas
                        preferências já
                        foram registradas.
                        Você será direcionado
                        para a página inicial
                        em alguns segundos.
                      </p>

                    </div>
                  </div>
                </div>
              )}

              {saveStatus ===
                'error' && (
                <div className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.05] p-5">
                  <p className="font-black text-white">
                    Não foi possível enviar
                    as respostas
                  </p>

                  <p className="mt-2 break-words text-sm leading-6 text-amber-100/70">
                    {saveError}
                  </p>

                  <button
                    type="button"
                    onClick={
                      handleRetry
                    }
                    className="mt-4 inline-flex items-center gap-2 rounded-xl border border-amber-400/20 bg-amber-400/[0.07] px-4 py-2.5 text-xs font-bold text-amber-200 transition hover:bg-amber-400/[0.12]"
                  >
                    <RefreshCw className="h-4 w-4" />

                    Tentar novamente
                  </button>
                </div>
              )}
            </div>

            <div className="rounded-[2rem] border border-white/[0.08] bg-[#090d14]/90 p-6 text-center shadow-2xl shadow-black/20 sm:p-8">
              <Send className="mx-auto h-6 w-6 text-cyan-300" />

              <h2 className="mt-4 text-xl font-black text-white sm:text-2xl">
                Pronto para enviar suas
                preferências?
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
                Revise as opções
                escolhidas e confirme
                suas respostas.
              </p>

              <button
                type="submit"
                disabled={
                  isSaving ||
                  saveStatus === 'saved'
                }
                className="group mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-7 py-4 text-sm font-black uppercase tracking-[0.07em] text-white shadow-[0_0_40px_rgba(59,130,246,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_0_55px_rgba(59,130,246,0.3)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-[0_0_40px_rgba(59,130,246,0.18)] sm:w-auto"
              >
                {isSaving ? (
                  <>
                    <LoaderCircle className="h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : saveStatus ===
                  'saved' ? (
                  <>
                    <Check className="h-5 w-5" />
                    Respostas enviadas
                  </>
                ) : (
                  <>
                    Enviar minhas respostas

                    <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <p className="mt-4 text-[11px] leading-5 text-slate-600">
                O envio é realizado de
                forma segura para o
                banco de dados da
                pesquisa.
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

interface FormSectionProps {
  number: string
  icon: LucideIcon
  eyebrow: string
  title: string
  description: string
  children: ReactNode
}

function FormSection({
  number,
  icon: Icon,
  eyebrow,
  title,
  description,
  children,
}: FormSectionProps) {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#090d14]/88 shadow-xl shadow-black/15">
      <div className="border-b border-white/[0.06] bg-gradient-to-r from-cyan-400/[0.035] via-transparent to-violet-400/[0.035] p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.07]">
            <Icon className="h-5 w-5 text-cyan-300" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs font-black text-cyan-400/60">
                {number}
              </span>

              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-violet-300">
                {eyebrow}
              </p>
            </div>

            <h2 className="mt-2 text-xl font-black text-white sm:text-2xl">
              {title}
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {children}
      </div>
    </section>
  )
}

interface TextFieldProps {
  label: string
  value: string
  placeholder: string
  onChange: (value: string) => void

  optional?: boolean

  type?: 'text' | 'email'

  autoComplete?: string

  maxLength?: number

  disabled?: boolean
}

function TextField({
  label,
  value,
  placeholder,
  onChange,
  optional = false,
  type = 'text',
  autoComplete,
  maxLength,
  disabled = false,
}: TextFieldProps) {
  const resolvedMaxLength =
    maxLength ??
    (type === 'email'
      ? 254
      : 120)

  return (
    <label className="block">
      <span className="flex items-center gap-2 text-sm font-bold text-slate-300">
        {type === 'email' && (
          <Mail className="h-4 w-4 text-slate-500" />
        )}

        {label}

        {optional && (
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600">
            Opcional
          </span>
        )}
      </span>

      <input
        type={type}
        value={value}
        autoComplete={
          autoComplete
        }
        placeholder={
          placeholder
        }
        maxLength={
          resolvedMaxLength
        }
        disabled={disabled}
        onChange={(event) =>
          onChange(
            event.target.value,
          )
        }
        className="mt-3 h-13 w-full rounded-xl border border-white/[0.08] bg-[#090d14] px-4 text-sm text-slate-200 outline-none transition placeholder:text-slate-700 focus:border-cyan-400/35 focus:ring-2 focus:ring-cyan-400/10 disabled:cursor-not-allowed disabled:opacity-60"
      />
    </label>
  )
}

function FieldLabel({
  children,
}: {
  children: ReactNode
}) {
  return (
    <p className="text-sm font-black text-slate-300">
      {children}
    </p>
  )
}

interface CheckboxCardProps {
  label: string
  description?: string
  checked: boolean
  onChange: () => void
  disabled?: boolean
}

function CheckboxCard({
  label,
  description,
  checked,
  onChange,
  disabled = false,
}: CheckboxCardProps) {
  return (
    <label
      className={`group flex items-start gap-3 rounded-xl border p-4 transition ${
        disabled
          ? 'cursor-not-allowed opacity-60'
          : 'cursor-pointer'
      } ${
        checked
          ? 'border-cyan-400/25 bg-cyan-400/[0.07]'
          : 'border-white/[0.07] bg-white/[0.02] hover:border-white/[0.13] hover:bg-white/[0.035]'
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className="sr-only"
      />

      <span
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition ${
          checked
            ? 'border-cyan-300 bg-cyan-400 text-slate-950'
            : 'border-white/15 bg-black/20 text-transparent'
        }`}
      >
        <Check className="h-3.5 w-3.5" />
      </span>

      <span className="min-w-0">
        <span
          className={`block text-sm font-semibold leading-6 ${
            checked
              ? 'text-white'
              : 'text-slate-400'
          }`}
        >
          {label}
        </span>

        {description && (
          <span className="mt-1 block text-xs text-slate-600">
            {description}
          </span>
        )}
      </span>
    </label>
  )
}

interface RadioCardProps {
  name: string
  label: string
  checked: boolean
  onChange: () => void
  disabled?: boolean
}

function RadioCard({
  name,
  label,
  checked,
  onChange,
  disabled = false,
}: RadioCardProps) {
  return (
    <label
      className={`flex items-center gap-3 rounded-xl border p-4 transition ${
        disabled
          ? 'cursor-not-allowed opacity-60'
          : 'cursor-pointer'
      } ${
        checked
          ? 'border-violet-400/25 bg-violet-400/[0.07]'
          : 'border-white/[0.07] bg-white/[0.02] hover:border-white/[0.13] hover:bg-white/[0.035]'
      }`}
    >
      <input
        type="radio"
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className="sr-only"
      />

      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
          checked
            ? 'border-violet-300'
            : 'border-white/15'
        }`}
      >
        {checked && (
          <span className="h-2.5 w-2.5 rounded-full bg-violet-300" />
        )}
      </span>

      <span
        className={`text-sm font-semibold leading-5 ${
          checked
            ? 'text-white'
            : 'text-slate-400'
        }`}
      >
        {label}
      </span>
    </label>
  )
}

interface InfoBadgeProps {
  icon: LucideIcon
  text: string
}

function InfoBadge({
  icon: Icon,
  text,
}: InfoBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-xs font-semibold text-slate-500">
      <Icon className="h-3.5 w-3.5 text-cyan-300" />

      {text}
    </div>
  )
}

interface SelectionCounterProps {
  count: number
  label: string
}

function SelectionCounter({
  count,
  label,
}: SelectionCounterProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/10 bg-cyan-400/[0.04] px-3 py-1.5">
      <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-cyan-400/10 px-1.5 text-[10px] font-black text-cyan-300">
        {count}
      </span>

      <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">
        {label}
      </span>
    </div>
  )
}

function toggleListItem(
  currentItems: string[],
  value: string,
) {
  if (
    currentItems.includes(value)
  ) {
    return currentItems.filter(
      (item) =>
        item !== value,
    )
  }

  return [
    ...currentItems,
    value,
  ]
}

function isValidEmail(
  value: string,
) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    value,
  )
}

export default CourseInterestPage