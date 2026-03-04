"use client"

import { useInView } from "@/hooks/use-in-view"
import { Stethoscope, Scissors, SmilePlus, Crown } from "lucide-react"

const services = [
  {
    icon: Stethoscope,
    title: "Терапия",
    description: "Лечение кариеса, пульпита, периодонтита, профессиональная чистка зубов",
    items: ["Лечение кариеса", "Лечение пульпита", "Чистка зубов", "Реставрация"],
    color: "from-blue-accent/20 to-blue-accent/5",
  },
  {
    icon: Scissors,
    title: "Хирургия",
    description: "Удаление зубов, имплантация, синус-лифтинг, All on 4/6",
    items: ["Имплантация", "Удаление зубов", "Синус-лифтинг", "All on 4/6"],
    color: "from-blue-secondary/30 to-blue-secondary/5",
  },
  {
    icon: SmilePlus,
    title: "Ортодонтия",
    description: "Установка брекет-систем, каппы, ретейнеры, коррекция прикуса",
    items: ["Брекет-системы", "Ретейнеры", "Каппы", "Подтяжка брекетов"],
    color: "from-blue-accent/20 to-blue-accent/5",
  },
  {
    icon: Crown,
    title: "Ортопедия",
    description: "Коронки, виниры, протезирование — металлокерамика и цирконий",
    items: ["Виниры", "Циркониевые коронки", "Протезы", "Металлокерамика"],
    color: "from-blue-secondary/30 to-blue-secondary/5",
  },
]

export function ServicesSection() {
  const { ref, isInView } = useInView(0.15)

  return (
    <section ref={ref} id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-accent">
            Что мы делаем
          </p>
          <h2 className="text-balance font-serif text-4xl font-bold text-foreground md:text-5xl">
            Наши услуги
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Полный спектр стоматологических услуг для здоровья и красоты вашей улыбки
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-b ${service.color} p-8 transition-all duration-500 hover:-translate-y-2 hover:border-blue-accent/30 hover:shadow-xl hover:shadow-blue-accent/10 ${
                isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-accent/10 transition-colors group-hover:bg-blue-accent/20">
                <service.icon className="h-7 w-7 text-blue-accent" />
              </div>

              <h3 className="mb-3 font-serif text-2xl font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-text-secondary">
                {service.description}
              </p>

              <ul className="mb-8 space-y-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-text-secondary"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#price"
                className="inline-flex items-center text-sm font-medium text-blue-accent transition-colors hover:text-foreground"
              >
                Подробнее и цены
                <svg
                  className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
