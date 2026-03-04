"use client"

import Image from "next/image"
import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Результат лечения — белоснежная улыбка" },
  { src: "/images/clinic-interior.jpg", alt: "Интерьер клиники Э.М.SMILE" },
  { src: "/images/gallery-2.jpg", alt: "Современное оборудование клиники" },
  { src: "/images/gallery-3.jpg", alt: "Зона ожидания клиники" },
  { src: "/images/hero-bg.jpg", alt: "Рабочее пространство стоматолога" },
  { src: "/images/doctor.jpg", alt: "Главный врач Абдиев М.Н." },
]

export function GallerySection() {
  const { ref, isInView } = useInView(0.1)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null
    )
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + galleryImages.length) % galleryImages.length
        : null
    )

  return (
    <section
      ref={ref}
      id="gallery"
      className="relative border-y border-border bg-navy-mid/30 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`mx-auto mb-16 max-w-2xl text-center transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-accent">
            Галерея
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Наша клиника
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Фотографии интерьера, оборудования и результатов работы
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              onClick={() => openLightbox(index)}
              className={`group relative aspect-[4/3] overflow-hidden rounded-xl transition-all duration-700 ${
                isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy-dark/0 transition-colors duration-300 group-hover:bg-navy-dark/40" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="rounded-lg bg-foreground/10 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm">
                  Открыть
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-dark/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              closeLightbox()
            }}
            className="absolute right-6 top-6 rounded-full bg-foreground/10 p-2 text-foreground transition-colors hover:bg-foreground/20"
            aria-label="Закрыть"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-4 rounded-full bg-foreground/10 p-3 text-foreground transition-colors hover:bg-foreground/20 md:left-8"
            aria-label="Предыдущее фото"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div
            className="relative h-[70vh] w-[90vw] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              fill
              className="rounded-xl object-contain"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-4 rounded-full bg-foreground/10 p-3 text-foreground transition-colors hover:bg-foreground/20 md:right-8"
            aria-label="Следующее фото"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  )
}
