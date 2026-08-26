import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

import {
  techAreas,
  type TechAreaIcon,
} from '../data/areas'

import type {
  AreaDistributionRow,
} from '../types/database'

interface AreaDistributionDonutProps {
  data: AreaDistributionRow[]
  totalParticipants: number
}

interface DonutDataItem {
  area: TechAreaIcon
  name: string
  total: number
  percentage: number
  color: string
}

const areaColors: Record<
  TechAreaIcon,
  string
> = {
  hardware: '#22d3ee',
  programming: '#a78bfa',
  networks: '#60a5fa',
  cybersecurity: '#34d399',
  games: '#e879f9',
  ai: '#fbbf24',
}

function AreaDistributionDonut({
  data,
  totalParticipants,
}: AreaDistributionDonutProps) {
  const chartData: DonutDataItem[] =
    data.map((item) => ({
      area: item.area,
      name: getAreaName(item.area),
      total: item.total,
      percentage: item.percentage,
      color: areaColors[item.area],
    }))

  const activeAreas =
    chartData.filter(
      (item) => item.total > 0,
    )

  const paddingAngle =
    activeAreas.length > 1
      ? 3
      : 0

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(300px,0.9fr)_1.1fr] lg:items-center">
      <div className="relative mx-auto h-[310px] w-full max-w-[390px] sm:h-[360px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart>
            <Pie
              data={chartData}
              dataKey="total"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius="62%"
              outerRadius="84%"
              paddingAngle={paddingAngle}
              cornerRadius={7}
              stroke="#05070b"
              strokeWidth={4}
              isAnimationActive
              animationDuration={900}
            >
              {chartData.map(
                (item) => (
                  <Cell
                    key={item.area}
                    fill={item.color}
                  />
                ),
              )}
            </Pie>

            <Tooltip
              cursor={false}
              contentStyle={{
                background:
                  'rgba(9, 12, 19, 0.96)',
                border:
                  '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                boxShadow:
                  '0 20px 45px rgba(0,0,0,0.35)',
              }}
              labelStyle={{
                display: 'none',
              }}
              itemStyle={{
                color: '#e2e8f0',
                fontWeight: 700,
              }}
              formatter={(
                value,
                name,
              ) => [
                `${formatNumber(
                  Number(value),
                )} ${
                  Number(value) === 1
                    ? 'participante'
                    : 'participantes'
                }`,
                String(name),
              ]}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
              {formatNumber(
                totalParticipants,
              )}
            </p>

            <p className="mt-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
              {totalParticipants === 1
                ? 'Participante'
                : 'Participantes'}
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-300">
          Legenda
        </p>

        <h3 className="mt-3 text-xl font-black text-white">
          Distribuição por área predominante
        </h3>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {chartData.map(
            (item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-3 w-3 shrink-0 rounded-full"
                    style={{
                      backgroundColor:
                        item.color,
                      boxShadow: `0 0 14px ${item.color}55`,
                    }}
                  />

                  <p className="min-w-0 flex-1 truncate text-sm font-bold text-slate-300">
                    {item.name}
                  </p>

                  <span className="shrink-0 text-sm font-black text-white">
                    {formatPercentage(
                      item.percentage,
                    )}
                  </span>
                </div>

                <p className="mt-2 pl-6 text-xs text-slate-600">
                  {formatNumber(
                    item.total,
                  )}{' '}
                  {item.total === 1
                    ? 'participante'
                    : 'participantes'}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
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

export default AreaDistributionDonut