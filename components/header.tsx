"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { label: "О клинике", href: "#about" },
  { label: "Врач", href: "#doctor" },
  { label: "Услуги", href: "#services" },
  { label: "Прайс", href: "#price" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-navy-dark/95 backdrop-blur-md shadow-lg shadow-navy-dark/50"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
            {"Э.М."}
            <span className="text-blue-accent">SMILE</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+77712781228"
            className="flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4" />
            +7 (771) 278-1228
          </a>
          <a
            href="#appointment"
            className="rounded-lg bg-blue-accent px-6 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:scale-[1.03] hover:bg-blue-accent/90 hover:shadow-lg hover:shadow-blue-accent/25"
          >
            Запись
          </a>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-foreground lg:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute inset-x-0 top-full bg-navy-dark/98 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-text-secondary transition-colors hover:bg-blue-secondary/20 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
              <a
                href="tel:+77712781228"
                className="flex items-center gap-2 px-4 py-2 text-sm text-text-secondary"
              >
                <Phone className="h-4 w-4" />
                +7 (771) 278-1228
              </a>
              <a
                href="#appointment"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-lg bg-blue-accent px-6 py-3 text-center text-sm font-semibold text-foreground"
              >
                Записаться онлайн
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
