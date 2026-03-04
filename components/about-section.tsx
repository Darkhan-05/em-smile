"use client"

import Image from "next/image"
import { Monitor, Users, CreditCard, Heart } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const features = [
  {
    icon: Monitor,
    title: "Современное оборудование",
    description: "3D-диагностика и передовые технологии лечения",
  },
  {
    icon: Users,
    title: "Опытные врачи",
    description: "Специалисты с многолетним стажем и постоянным повышением квалификации",
  },
  {
    icon: CreditCard,
    title: "Удобная рассрочка",
    description: "Рассрочка 0–0–24 через Kaspi, Halyk, BCC, Home Credit",
  },
  {
    icon: Heart,
    title: "Уютная атмосфера",
    description: "Комфортная клиника и индивидуальный подход к каждому пациенту",
  },
]

export function AboutSection() {
  const { ref, isInView } = useInView(0.2)

  return (
    <section ref={ref} id="about" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div
            className={`transition-all duration-700 ${
              isInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-accent">
              О клинике
            </p>
            <h2 className="text-balance font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
              {"Э.М.SMILE — стоматология, которой доверяют"}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              Стоматологическая клиника {"Э.М.SMILE"} — многопрофильная стоматология в
              Кокшетау, предоставляющая полный спектр стоматологических услуг: терапию,
              хирургию, ортодонтию и ортопедию. Мы используем современное оборудование и
              передовые методики лечения для достижения идеального результата.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex gap-4 transition-all duration-700 ${
                    isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-accent/10">
                    <feature.icon className="h-5 w-5 text-blue-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-700 delay-200 ${
              isInView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/clinic-interior.jpg"
                alt="Интерьер стоматологии Э.М.SMILE"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-blue-accent px-8 py-6 text-foreground shadow-2xl">
              <p className="text-3xl font-bold">10 300+</p>
              <p className="text-sm text-foreground/80">подписчиков доверяют нам</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
