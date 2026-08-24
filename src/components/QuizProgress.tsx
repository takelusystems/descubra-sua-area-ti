interface QuizProgressProps {
  current: number
  total: number
}

function QuizProgress({ current, total }: QuizProgressProps) {
  const percentage = Math.round((current / total) * 100)

  return (
    <div className="w-full">
      <div className="mb-3 flex items-center justify-between gap-4">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
          Pergunta {current} de {total}
        </p>

        <span className="text-sm font-black text-slate-300">
          {percentage}%
        </span>
      </div>

      <div
        className="h-2 overflow-hidden rounded-full bg-white/[0.06]"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percentage}
        aria-label={`Progresso do quiz: ${percentage}%`}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 transition-[width] duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export default QuizProgress