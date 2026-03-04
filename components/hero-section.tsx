"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function HeroSection() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Современная стоматологическая клиника"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 via-navy-dark/70 to-navy-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center">
        <div
          className={`transition-all duration-1000 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-blue-accent">
            Стоматология нового уровня
          </p>
          <h1 className="mx-auto max-w-4xl text-balance font-serif text-5xl font-bold leading-tight text-foreground md:text-7xl lg:text-8xl">
            Ваша улыбка — наше искусство
          </h1>
        </div>

        <div
          className={`mt-8 transition-all delay-300 duration-1000 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-text-secondary md:text-xl">
            Полный спектр стоматологических услуг. Современное оборудование.
            Рассрочка 0–0–24.
          </p>
        </div>

        <div
          className={`mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all delay-500 duration-1000 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <a
            href="#appointment"
            className="rounded-lg bg-blue-accent px-8 py-4 text-base font-semibold text-foreground transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-blue-accent/25"
          >
            Записаться онлайн
          </a>
          <a
            href="#services"
            className="rounded-lg border border-foreground/20 px-8 py-4 text-base font-semibold text-foreground transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/5"
          >
            Смотреть услуги
          </a>
        </div>
      </div>

      <a
        href="#stats"
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 animate-float text-foreground/50 transition-colors hover:text-foreground"
        aria-label="Прокрутить вниз"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  )
}
