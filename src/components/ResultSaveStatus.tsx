import {
  useEffect,
  useState,
} from 'react'

import {
  AlertTriangle,
  CheckCircle2,
  Cloud,
  LoaderCircle,
  RefreshCw,
} from 'lucide-react'

import type {
  QuizSaveStatus,
} from '../types/database'

interface ResultSaveStatusProps {
  status: QuizSaveStatus
  errorMessage?: string | null
  onRetry?: () => void
}

function ResultSaveStatus({
  status,
  errorMessage,
  onRetry,
}: ResultSaveStatusProps) {
  const [
    isVisible,
    setIsVisible,
  ] = useState(
    status !== 'idle',
  )

  useEffect(() => {
    if (status === 'idle') {
      setIsVisible(false)
      return
    }

    setIsVisible(true)

    if (status !== 'saved') {
      return
    }

    const timeoutId =
      window.setTimeout(() => {
        setIsVisible(false)
      }, 3500)

    return () => {
      window.clearTimeout(
        timeoutId,
      )
    }
  }, [status])

  if (
    status === 'idle' ||
    !isVisible
  ) {
    return null
  }

  return (
    <div
      className="
        pointer-events-none
        fixed
        left-4
        right-4
        top-4
        z-[100]
        sm:left-auto
        sm:right-6
        sm:top-6
        sm:w-full
        sm:max-w-[355px]
      "
      aria-live="polite"
      aria-atomic="true"
    >
      {status === 'saving' && (
        <div className="pointer-events-auto rounded-2xl border border-cyan-400/20 bg-[#071116]/95 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
              <LoaderCircle className="h-5 w-5 animate-spin text-cyan-300" />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <Cloud className="h-4 w-4 text-cyan-300" />

                <p className="font-black text-white">
                  Salvando resultado
                </p>
              </div>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Estamos contabilizando sua
                participação anônima.
              </p>
            </div>
          </div>
        </div>
      )}

      {status === 'saved' && (
        <div className="pointer-events-auto rounded-2xl border border-emerald-400/25 bg-[#07140f]/95 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10">
              <CheckCircle2 className="h-5 w-5 text-emerald-300" />
            </div>

            <div className="min-w-0">
              <p className="font-black text-white">
                Resultado contabilizado
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Sua participação anônima
                já faz parte das
                estatísticas gerais.
              </p>
            </div>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="pointer-events-auto rounded-2xl border border-amber-400/25 bg-[#171107]/95 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10">
              <AlertTriangle className="h-5 w-5 text-amber-300" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="font-black text-white">
                Resultado não confirmado
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                {errorMessage ||
                  'Não foi possível contabilizar sua participação agora.'}
              </p>

              {onRetry && (
                <button
                  type="button"
                  onClick={onRetry}
                  className="mt-3 inline-flex items-center gap-2 rounded-lg border border-amber-400/20 bg-amber-400/[0.07] px-3 py-2 text-xs font-bold text-amber-200 transition hover:bg-amber-400/[0.12]"
                >
                  <RefreshCw className="h-3.5 w-3.5" />

                  Tentar novamente
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ResultSaveStatus