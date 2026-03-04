"use client"

import { useState, useCallback } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const reviews = [
  {
    name: "Айгерим К.",
    text: "Очень довольна результатом! Доктор Мурат Набиханович — настоящий профессионал. Сделала виниры, и теперь улыбаюсь с удовольствием. Клиника современная, чистая, персонал вежливый.",
    rating: 5,
    service: "Виниры",
  },
  {
    name: "Бауыржан Т.",
    text: "Долго не мог решиться на имплантацию. В Э.М.SMILE объяснили все этапы, рассказали про рассрочку. Операция прошла быстро и безболезненно. Спасибо большое!",
    rating: 5,
    service: "Имплантация",
  },
  {
    name: "Мария С.",
    text: "Ходила на чистку зубов и лечение кариеса. Всё сделали за одно посещение. Цены адекватные, результат отличный. Рекомендую всем знакомым!",
    rating: 5,
    service: "Терапия",
  },
  {
    name: "Данияр А.",
    text: "Установил брекеты сыну. Ортодонт очень внимательная, всё подробно объяснила. Ребёнок не боится ходить на приёмы. Клиника на высшем уровне.",
    rating: 5,
    service: "Ортодонтия",
  },
  {
    name: "Жанна М.",
    text: "Удаляли зуб мудрости — боялась ужасно, но всё прошло быстро и аккуратно. Анестезия отличная, ничего не почувствовала. Благодарю доктора!",
    rating: 5,
    service: "Хирургия",
  },
]

export function ReviewsSection() {
  const { ref, isInView } = useInView(0.2)
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }, [])

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }, [])

  return (
    <section ref={ref} id="reviews" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`mx-auto mb-16 max-w-2xl text-center transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-accent">
            Отзывы
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Что говорят наши пациенты
          </h2>
        </div>

        <div
          className={`relative transition-all delay-200 duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-3xl">
            <div className="relative rounded-2xl border border-border bg-navy-mid/30 p-8 md:p-12">
              <Quote className="absolute right-8 top-8 h-12 w-12 text-blue-accent/10" />

              <div className="mb-6 flex gap-1">
                {Array.from({ length: reviews[currentIndex].rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-blue-accent text-blue-accent"
                  />
                ))}
              </div>

              <p className="text-lg leading-relaxed text-text-secondary md:text-xl">
                {`"${reviews[currentIndex].text}"`}
              </p>

              <div className="mt-8 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">
                    {reviews[currentIndex].name}
                  </p>
                  <p className="text-sm text-blue-accent">
                    {reviews[currentIndex].service}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="rounded-full border border-border p-2 text-text-secondary transition-colors hover:border-blue-accent/30 hover:text-foreground"
                    aria-label="Предыдущий отзыв"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={next}
                    className="rounded-full border border-border p-2 text-text-secondary transition-colors hover:border-blue-accent/30 hover:text-foreground"
                    aria-label="Следующий отзыв"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-blue-accent"
                      : "w-2 bg-text-secondary/30 hover:bg-text-secondary/50"
                  }`}
                  aria-label={`Отзыв ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://instagram.com/e.m.smile_kokshetau"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-accent transition-colors hover:text-foreground"
            >
              Смотреть все отзывы в Instagram
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
