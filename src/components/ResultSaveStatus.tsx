import {
  AlertTriangle,
  CheckCircle2,
  Cloud,
  LoaderCircle,
  RefreshCw,
} from 'lucide-react'

import type { QuizSaveStatus } from '../types/database'

interface ResultSaveStatusProps {
  status: QuizSaveStatus
  errorMessage: string | null
  onRetry: () => void
}

function ResultSaveStatus({
  status,
  errorMessage,
  onRetry,
}: ResultSaveStatusProps) {
  if (status === 'idle') {
    return null
  }

  if (status === 'saving') {
    return (
      <div className="fixed bottom-4 left-4 right-4 z-[100] sm:left-auto sm:right-5 sm:w-[360px]">
        <div className="rounded-2xl border border-blue-400/20 bg-[#0a1019]/95 p-4 shadow-2xl shadow-black/50 backdrop-blur-xl">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10">
              <LoaderCircle className="h-5 w-5 animate-spin text-blue-300" />
            </div>

            <div>
              <p className="text-sm font-black text-white">
                Salvando resultado
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Estamos contabilizando sua
                participação anônima no panorama
                geral.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (status === 'saved') {
    return (
      <div className="fixed bottom-4 left-4 right-4 z-[100] sm:left-auto sm:right-5 sm:w-[360px]">
        <div className="rounded-2xl border border-emerald-400/20 bg-[#09120f]/95 p-4 shadow-2xl shadow-black/50 backdrop-blur-xl">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10">
              <CheckCircle2 className="h-5 w-5 text-emerald-300" />
            </div>

            <div>
              <p className="text-sm font-black text-white">
                Resultado contabilizado
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Sua participação anônima já
                faz parte das estatísticas gerais.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[100] sm:left-auto sm:right-5 sm:w-[390px]">
      <div className="rounded-2xl border border-amber-400/20 bg-[#151109]/95 p-4 shadow-2xl shadow-black/50 backdrop-blur-xl">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10">
            <AlertTriangle className="h-5 w-5 text-amber-300" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-sm font-black text-white">
              Resultado não confirmado
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Seu perfil continua válido e pode ser
              consultado normalmente. Não conseguimos
              confirmar o envio da estatística.
            </p>

            {errorMessage && (
              <details className="mt-2">
                <summary className="cursor-pointer text-[11px] font-semibold text-slate-600">
                  Detalhes técnicos
                </summary>

                <p className="mt-2 break-words text-[10px] leading-5 text-slate-600">
                  {errorMessage}
                </p>
              </details>
            )}

            <button
              type="button"
              onClick={onRetry}
              className="mt-3 inline-flex items-center gap-2 rounded-lg border border-amber-400/15 bg-amber-400/[0.06] px-3 py-2 text-xs font-bold text-amber-200 transition hover:bg-amber-400/[0.1]"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Tentar novamente
            </button>
          </div>

          <Cloud className="h-4 w-4 shrink-0 text-slate-700" />
        </div>
      </div>
    </div>
  )
}

export default ResultSaveStatus