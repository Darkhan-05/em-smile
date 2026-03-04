"use client"

import { useInView } from "@/hooks/use-in-view"
import { MapPin, Phone, Clock, Instagram, Navigation, ExternalLink } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Адрес",
    content: "г. Кокшетау, ул. Ж. Тлеулина, 110",
    subtitle: "ЖК МАДИНА",
  },
  {
    icon: Phone,
    title: "Телефон",
    content: "+7 (771) 278-1228",
    href: "tel:+77712781228",
  },
  {
    icon: Clock,
    title: "Режим работы",
    content: "ПН – ПТ, 09:00 – 19:00",
    subtitle: "СБ – ВС: выходной",
  },
  {
    icon: Instagram,
    title: "Instagram",
    content: "@e.m.smile_kokshetau",
    href: "https://instagram.com/e.m.smile_kokshetau",
  },
]

export function ContactsSection() {
  const { ref, isInView } = useInView(0.15)
  const mapUrl = "https://2gis.kz/kokshetau/firm/70000001076461426"

  return (
    <section ref={ref} id="contacts" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`mx-auto mb-16 max-w-2xl text-center transition-all duration-700 ${isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-accent">
            Контакты
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Как нас найти
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Список контактов */}
          <div
            className={`space-y-6 transition-all duration-700 ${isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            {contactInfo.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-5 rounded-xl border border-border bg-navy-mid/20 p-6 transition-all duration-500 hover:border-blue-accent/20 hover:bg-blue-accent/5"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-accent/10">
                  <item.icon className="h-5 w-5 text-blue-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-secondary">{item.title}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="mt-1 text-lg font-semibold text-foreground transition-colors hover:text-blue-accent"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="mt-1 text-lg font-semibold text-foreground">
                      {item.content}
                    </p>
                  )}
                  {item.subtitle && (
                    <p className="mt-0.5 text-sm text-text-secondary">{item.subtitle}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Вместо глючного виджета — красивая карточка-линк */}
          <div
            className={`group relative flex min-h-[400px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-border bg-navy-mid/10 transition-all delay-200 duration-700 ${isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            {/* Декоративный фон (можно заменить на картинку карты) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-accent/10 via-transparent to-transparent opacity-50" />

            <div className="relative z-10 text-center p-8">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-blue-accent/10 transition-transform duration-500 group-hover:scale-110">
                <Navigation className="h-10 w-10 text-blue-accent" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-foreground">Мы на карте</h3>
              <p className="mb-8 text-text-secondary max-w-[280px]">
                Нажмите, чтобы открыть маршрут в 2ГИС или Google Maps
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-accent px-8 py-4 text-sm font-semibold text-foreground transition-all hover:shadow-lg hover:shadow-blue-accent/25 active:scale-95"
                >
                  Открыть 2ГИС
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}