"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { ChevronDown, Phone } from "lucide-react"

const priceCategories = [
  {
    id: "therapy",
    title: "Терапевтические услуги",
    items: [
      { name: "Анестезия", price: "2 500" },
      { name: "Лечение поверхностного кариеса", price: "20 500" },
      { name: "Лечение среднего кариеса", price: "23 000" },
      { name: "Лечение глубокого кариеса", price: "26 500" },
      { name: "Реставрация фронтального зуба", price: "32 500" },
      { name: "Лечение пульпита (1-2 канала)", price: "43 000" },
      { name: "Лечение пульпита (3+ каналов)", price: "50 500" },
      { name: "Лечение периодонтита (1-2 канала)", price: "55 000" },
      { name: "Лечение периодонтита (3+ каналов)", price: "62 500" },
      { name: "Чистка всех зубов", price: "20 000" },
      { name: "Лечение генерализованного пародонтита (1 процедура)", price: "21 500" },
      { name: "Лечение локализованного пародонтита (1 зуб)", price: "8 000" },
      { name: "Установка штифта", price: "8 000" },
      { name: "Коффердам", price: "2 500" },
      { name: "Диагностический рентген снимок", price: "2 000" },
      { name: "Промежуточный / контрольный рентген", price: "1 200" },
      { name: "3D снимок", price: "13 000" },
      { name: "Панорамный снимок", price: "4 000" },
    ],
  },
  {
    id: "surgery",
    title: "Хирургические услуги",
    items: [
      { name: "Анестезия", price: "2 500" },
      { name: "Удаление фронтальных зубов", price: "14 500" },
      { name: "Удаление малых коренных зубов", price: "17 000" },
      { name: "Удаление больших коренных зубов и клыков", price: "19 000" },
      { name: "Удаление дистопированных и ретинированных зубов", price: "42 000" },
      { name: "Удаление зуба (3 степень подвижности)", price: "9 500" },
      { name: "Имплантация зуба", price: "140 000" },
      { name: "Синус-лифтинг (одна сторона)", price: "400 000" },
      { name: "Подсадка кости (одна сторона)", price: "170 000" },
      { name: "All on 4", price: "1 200 000" },
      { name: "All on 6", price: "1 600 000" },
      { name: "Наложение шва (1 шт.)", price: "5 500" },
      { name: "Лечение альвеолита", price: "11 500" },
      { name: "Периостомия", price: "11 000" },
      { name: "Вскрытие абсцесса зуба", price: "11 000" },
      { name: "Иссечение капюшона над зубом мудрости", price: "11 500" },
      { name: "Альвастаз (кровоостанавливающая губка)", price: "2 500" },
    ],
  },
  {
    id: "orthodontics",
    title: "Ортодонтические услуги",
    items: [
      { name: "Диагностика", price: "50 000" },
      { name: "Брекет-системы (самолигирующие), 1 челюсть", price: "90 000" },
      { name: "Брекет-системы (самолигирующие H4), 1 челюсть", price: "250 000" },
      { name: "Подтяжка брекет-системы, 1 челюсть", price: "7 000" },
      { name: "Несъёмный ретейнер, 1 челюсть", price: "24 000" },
      { name: "Повторная фиксация брекета (1 зуб)", price: "6 000" },
      { name: "Ретенционные каппы, 1 челюсть", price: "24 000" },
    ],
  },
  {
    id: "prosthetics",
    title: "Ортопедические услуги",
    items: [
      { name: "Анестезия", price: "2 500" },
      { name: "Оттиск", price: "2 500" },
      { name: "Металлокерамические коронки (1 ед.)", price: "49 000" },
      { name: "Циркониевые коронки (1 ед.)", price: "96 000" },
      { name: "Виниры (1 ед.)", price: "115 000" },
      { name: "Термо-бюгельный протез (1 шт.)", price: "150 000" },
      { name: "Нейлоновый протез", price: "150 000" },
      { name: "Полный съёмный протез", price: "130 000" },
      { name: "Частичный съёмный протез", price: "85 000" },
      { name: "Цельнолитые коронки", price: "30 000" },
      { name: "Штампованные коронки с напылением", price: "20 000" },
      { name: "Протезирование на имплантах (металлокерамика)", price: "108 000" },
      { name: "Протезирование на имплантах (цирконий)", price: "150 000" },
      { name: "Микропротез пластмассовый", price: "30 000" },
      { name: "Микропротез гелевый", price: "72 000" },
      { name: "Фасетка", price: "23 000" },
      { name: "Снятие коронок металлических", price: "2 500" },
      { name: "Снятие коронок металлокерамических", price: "4 000" },
    ],
  },
]

export function PriceSection() {
  const { ref, isInView } = useInView(0.1)
  const [openCategories, setOpenCategories] = useState<string[]>(["therapy"])

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    )
  }

  return (
    <section
      ref={ref}
      id="price"
      className="relative border-y border-border bg-navy-mid/30 py-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl px-6">
        <div
          className={`mx-auto mb-16 max-w-2xl text-center transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-accent">
            Цены
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Прайс-лист
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Актуальные цены на все виды стоматологических услуг
          </p>
        </div>

        <div className="space-y-4">
          {priceCategories.map((category, catIndex) => {
            const isOpen = openCategories.includes(category.id)
            return (
              <div
                key={category.id}
                className={`overflow-hidden rounded-xl border border-border bg-navy-dark/50 transition-all duration-700 ${
                  isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${catIndex * 100}ms` }}
              >
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-blue-secondary/10"
                >
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-text-secondary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="border-t border-border px-6 py-4">
                    <div className="space-y-0">
                      {category.items.map((item, index) => (
                        <div
                          key={`${category.id}-${index}`}
                          className="flex items-center justify-between border-b border-border/50 py-3.5 last:border-0"
                        >
                          <span className="pr-4 text-sm text-text-secondary md:text-base">
                            {item.name}
                          </span>
                          <span className="shrink-0 font-semibold text-foreground">
                            {item.price} &#8376;
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div
          className={`mt-12 rounded-xl border border-border bg-blue-accent/5 p-8 text-center transition-all delay-500 duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-lg text-text-secondary">
            Не нашли свою услугу? Позвоните нам — проконсультируем бесплатно
          </p>
          <a
            href="tel:+77712781228"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-accent px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-blue-accent/25"
          >
            <Phone className="h-4 w-4" />
            +7 (771) 278-1228
          </a>
        </div>
      </div>
    </section>
  )
}
