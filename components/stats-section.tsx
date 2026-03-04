"use client"

import { Instagram, FileText, Layers, CreditCard } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { useCounter } from "@/hooks/use-counter"

const stats = [
  { icon: Instagram, value: 10300, suffix: "+", label: "подписчиков в Instagram" },
  { icon: FileText, value: 152, suffix: "", label: "публикации" },
  { icon: Layers, value: 4, suffix: "", label: "направления услуг" },
  { icon: CreditCard, value: 24, suffix: "", label: "месяца рассрочки" },
]

function StatItem({
  icon: Icon,
  value,
  suffix,
  label,
  isInView,
  delay,
}: {
  icon: typeof Instagram
  value: number
  suffix: string
  label: string
  isInView: boolean
  delay: string
}) {
  const count = useCounter(value, 2000, isInView)

  return (
    <div
      className={`flex flex-col items-center gap-4 transition-all duration-700 ${
        isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: delay }}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-accent/10">
        <Icon className="h-6 w-6 text-blue-accent" />
      </div>
      <div className="text-center">
        <p className="font-serif text-4xl font-bold text-foreground md:text-5xl">
          {count.toLocaleString("ru-RU")}
          {suffix}
        </p>
        <p className="mt-2 text-sm text-text-secondary">{label}</p>
      </div>
    </div>
  )
}

export function StatsSection() {
  const { ref, isInView } = useInView(0.3)

  return (
    <section
      ref={ref}
      id="stats"
      className="relative border-y border-border bg-navy-mid/50 py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-12 px-6 md:grid-cols-4 md:gap-8">
        {stats.map((stat, index) => (
          <StatItem
            key={stat.label}
            {...stat}
            isInView={isInView}
            delay={`${index * 150}ms`}
          />
        ))}
      </div>
    </section>
  )
}
