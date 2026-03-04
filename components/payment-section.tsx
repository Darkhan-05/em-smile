"use client"

import { useInView } from "@/hooks/use-in-view"
import { Banknote, CreditCard, QrCode, Percent } from "lucide-react"

const paymentMethods = [
  {
    icon: Percent,
    title: "Рассрочка 0–0–24",
    description: "Kaspi Жума и другие акции",
  },
  {
    icon: Banknote,
    title: "Наличные",
    description: "Оплата в клинике",
  },
  {
    icon: CreditCard,
    title: "Банковская карта",
    description: "Visa, MasterCard",
  },
  {
    icon: QrCode,
    title: "Kaspi QR",
    description: "Быстрая оплата по QR",
  },
]

const banks = [
  "Kaspi Bank",
  "Home Credit Bank",
  "BCC",
  "Halyk Bank",
]

export function PaymentSection() {
  const { ref, isInView } = useInView(0.2)

  return (
    <section ref={ref} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`mx-auto mb-16 max-w-2xl text-center transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-accent">
            Оплата
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Удобная оплата
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Мы работаем с ведущими банками Казахстана
          </p>
        </div>

        <div className="mb-16 overflow-hidden">
          <div className="animate-marquee flex gap-16">
            {[...banks, ...banks, ...banks, ...banks].map((bank, i) => (
              <div
                key={`${bank}-${i}`}
                className="flex shrink-0 items-center justify-center rounded-xl border border-border bg-navy-mid/30 px-10 py-5"
              >
                <span className="whitespace-nowrap text-lg font-semibold text-text-secondary">
                  {bank}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {paymentMethods.map((method, index) => (
            <div
              key={method.title}
              className={`flex flex-col items-center gap-4 rounded-2xl border border-border bg-navy-mid/20 p-8 text-center transition-all duration-700 hover:border-blue-accent/30 hover:bg-blue-accent/5 ${
                isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-accent/10">
                <method.icon className="h-6 w-6 text-blue-accent" />
              </div>
              <h3 className="font-semibold text-foreground">{method.title}</h3>
              <p className="text-sm text-text-secondary">{method.description}</p>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 rounded-2xl bg-gradient-to-r from-blue-accent to-blue-secondary p-8 text-center md:p-12 transition-all delay-300 duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h3 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            Бесплатная консультация
          </h3>
          <p className="mt-3 text-foreground/80">
            При первом визите — консультация и осмотр бесплатно
          </p>
          <a
            href="#appointment"
            className="mt-6 inline-block rounded-lg bg-foreground px-8 py-3 text-sm font-semibold text-navy-dark transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
          >
            Записаться бесплатно
          </a>
        </div>
      </div>
    </section>
  )
}
