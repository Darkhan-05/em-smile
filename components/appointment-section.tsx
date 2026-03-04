"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { MessageCircle, CheckCircle, Loader2 } from "lucide-react"

const serviceOptions = [
  "Терапия",
  "Хирургия",
  "Ортодонтия",
  "Ортопедия",
  "Консультация",
]

export function AppointmentSection() {
  const { ref, isInView } = useInView(0.15)
  const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    time: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "Введите имя"
    if (!formData.phone.trim()) {
      newErrors.phone = "Введите номер телефона"
    } else if (!/^\+?7\d{10}$/.test(formData.phone.replace(/[\s()-]/g, ""))) {
      newErrors.phone = "Формат: +7XXXXXXXXXX"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setFormState("loading")
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setFormState("success")
  }

  const whatsappUrl =
    "https://wa.me/77712781228?text=" +
    encodeURIComponent("Здравствуйте! Хочу записаться на консультацию")

  return (
    <section
      ref={ref}
      id="appointment"
      className="relative overflow-hidden border-y border-border bg-navy-mid/30 py-24 md:py-32"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-blue-accent blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-blue-secondary blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div
          className={`mx-auto mb-16 max-w-2xl text-center transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-accent">
            Запись
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Запишитесь прямо сейчас
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Первичная консультация — бесплатно
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          <div
            className={`lg:col-span-3 transition-all delay-200 duration-700 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-navy-dark/50 p-12 text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  Ваша заявка принята!
                </h3>
                <p className="mt-3 text-text-secondary">
                  Мы свяжемся с вами в течение 30 минут
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border bg-navy-dark/50 p-8 md:p-10"
              >
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-text-secondary"
                    >
                      Имя *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-lg border border-border bg-navy-dark/50 px-4 py-3 text-foreground placeholder:text-text-secondary/50 focus:border-blue-accent focus:outline-none focus:ring-1 focus:ring-blue-accent"
                      placeholder="Ваше имя"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-text-secondary"
                    >
                      Телефон *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded-lg border border-border bg-navy-dark/50 px-4 py-3 text-foreground placeholder:text-text-secondary/50 focus:border-blue-accent focus:outline-none focus:ring-1 focus:ring-blue-accent"
                      placeholder="+7 (XXX) XXX-XXXX"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-medium text-text-secondary"
                    >
                      Услуга
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full rounded-lg border border-border bg-navy-dark/50 px-4 py-3 text-foreground focus:border-blue-accent focus:outline-none focus:ring-1 focus:ring-blue-accent"
                    >
                      <option value="" className="bg-navy-dark">
                        Выберите услугу
                      </option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-navy-dark">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="time"
                      className="mb-2 block text-sm font-medium text-text-secondary"
                    >
                      Удобное время
                    </label>
                    <input
                      id="time"
                      type="text"
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                      className="w-full rounded-lg border border-border bg-navy-dark/50 px-4 py-3 text-foreground placeholder:text-text-secondary/50 focus:border-blue-accent focus:outline-none focus:ring-1 focus:ring-blue-accent"
                      placeholder="Например: завтра в 15:00"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-accent px-8 py-4 text-base font-semibold text-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-accent/25 disabled:opacity-70"
                  >
                    {formState === "loading" ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      "Записаться"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          <div
            className={`flex flex-col justify-center gap-8 lg:col-span-2 transition-all delay-300 duration-700 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="rounded-2xl border border-border bg-navy-dark/50 p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-green-500/10">
                <MessageCircle className="h-7 w-7 text-green-500" />
              </div>
              <h3 className="mb-2 font-serif text-xl font-bold text-foreground">
                Или напишите в WhatsApp
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-text-secondary">
                Ответим в течение нескольких минут. Можем записать вас на удобное время
                прямо в чате.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:scale-[1.03] hover:bg-green-600"
              >
                <MessageCircle className="h-4 w-4" />
                Написать в WhatsApp
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-blue-accent/5 p-8">
              <h3 className="mb-3 font-semibold text-foreground">Что вас ждёт:</h3>
              <ul className="space-y-3">
                {[
                  "Бесплатная первичная консультация",
                  "Осмотр и составление плана лечения",
                  "Подбор удобного способа оплаты",
                  "Ответы на все ваши вопросы",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-text-secondary"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-blue-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
