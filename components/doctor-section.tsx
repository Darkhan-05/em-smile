"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

export function DoctorSection() {
  const { ref, isInView } = useInView(0.2)

  return (
    <section
      ref={ref}
      id="doctor"
      className="relative overflow-hidden border-y border-border bg-navy-mid/30 py-24 md:py-32"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-accent blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div
            className={`relative transition-all duration-700 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative mx-auto aspect-[3/4] max-w-md overflow-hidden rounded-2xl">
              <Image
                src="/images/doctor.jpg"
                alt="Абдиев Мурат Набиханович — главный врач"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent" />
            </div>
          </div>

          <div
            className={`transition-all delay-200 duration-700 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-accent">
              Главный врач
            </p>
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
              Абдиев Мурат Набиханович
            </h2>
            <p className="mt-3 text-lg font-medium text-blue-accent">
              Терапевт, хирург, ортопед
            </p>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              Врач-стоматолог с многолетним опытом, специализирующийся на комплексном
              лечении и восстановлении зубов. Постоянно совершенствует свои навыки,
              применяя передовые технологии и индивидуальный подход к каждому пациенту.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              Под его руководством клиника {"Э.М.SMILE"} стала одной из самых востребованных
              стоматологий Кокшетау — более 10 000 подписчиков в Instagram и сотни
              благодарных пациентов.
            </p>
            <a
              href="#appointment"
              className="mt-8 inline-block rounded-lg bg-blue-accent px-8 py-4 text-base font-semibold text-foreground transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-blue-accent/25"
            >
              Записаться к врачу
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
