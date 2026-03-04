"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const whatsappUrl =
    "https://wa.me/77712781228?text=" +
    encodeURIComponent("Здравствуйте! Хочу записаться на консультацию")

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-foreground shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-green-500/25"
      aria-label="Написать в WhatsApp"
    >
      <span className="absolute inset-0 animate-pulse-ring rounded-full bg-green-500/40" />
      <MessageCircle className="relative h-7 w-7" />
    </a>
  )
}
