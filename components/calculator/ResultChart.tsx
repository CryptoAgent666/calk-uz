'use client'

import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  Legend,
} from 'recharts'
import { formatNumber } from '@/lib/utils'

interface ResultChartProps {
  type: 'pie' | 'bar' | 'line'
  data: { name: string; value: number; color?: string }[]
  locale?: string
}

const THEME_COLORS = [
  'var(--chart-1)',
  'var(--chart-2)',
  'var(--chart-3)',
  'var(--chart-4)',
  'var(--chart-5)',
]

function getColor(index: number, customColor?: string): string {
  return customColor || THEME_COLORS[index % THEME_COLORS.length]
}

function ChartTooltipFormatter(value: number, locale: string) {
  return formatNumber(value, locale)
}

export function ResultChart({ type, data, locale = 'ru' }: ResultChartProps) {
  if (!data || data.length === 0) return null

  const tooltipStyle = {
    backgroundColor: 'var(--popover)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    color: 'var(--popover-foreground)',
    fontSize: '13px',
    padding: '8px 12px',
  }

  if (type === 'pie') {
    return (
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={3}
              dataKey="value"
              nameKey="name"
              strokeWidth={0}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={getColor(index, entry.color)}
                />
              ))}
            </Pie>
            <RechartsTooltip
              contentStyle={tooltipStyle}
              formatter={(value) =>
                ChartTooltipFormatter(Number(value), locale)
              }
            />
            <Legend
              wrapperStyle={{ fontSize: '13px', paddingTop: '8px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    )
  }

  if (type === 'bar') {
    return (
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap="20%">
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--border)"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
              axisLine={{ stroke: 'var(--border)' }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value: number) => formatNumber(value, locale)}
            />
            <RechartsTooltip
              contentStyle={tooltipStyle}
              formatter={(value) =>
                ChartTooltipFormatter(Number(value), locale)
              }
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={getColor(index, entry.color)}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }

  // Line chart
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--border)"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
            axisLine={{ stroke: 'var(--border)' }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value: number) => formatNumber(value, locale)}
          />
          <RechartsTooltip
            contentStyle={tooltipStyle}
            formatter={(value) =>
              ChartTooltipFormatter(Number(value), locale)
            }
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="var(--chart-1)"
            strokeWidth={2.5}
            dot={{
              fill: 'var(--chart-1)',
              r: 4,
              strokeWidth: 0,
            }}
            activeDot={{
              fill: 'var(--chart-1)',
              r: 6,
              strokeWidth: 2,
              stroke: 'var(--background)',
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
