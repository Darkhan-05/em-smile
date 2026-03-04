import { Instagram, Phone } from "lucide-react"

const footerLinks = [
  { label: "О клинике", href: "#about" },
  { label: "Врач", href: "#doctor" },
  { label: "Услуги", href: "#services" },
  { label: "Прайс", href: "#price" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy-dark py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <span className="font-serif text-2xl font-bold text-foreground">
              {"Э.М."}
              <span className="text-blue-accent">SMILE</span>
            </span>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Многопрофильная стоматология в Кокшетау. Полный спектр услуг,
              современное оборудование, удобная рассрочка.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://instagram.com/e.m.smile_kokshetau"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text-secondary transition-all hover:border-blue-accent/30 hover:text-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/77712781228"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text-secondary transition-all hover:border-blue-accent/30 hover:text-foreground"
                aria-label="WhatsApp"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="tel:+77712781228"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text-secondary transition-all hover:border-blue-accent/30 hover:text-foreground"
                aria-label="Телефон"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Навигация
            </h3>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-secondary transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Контакты
            </h3>
            <div className="space-y-3 text-sm text-text-secondary">
              <p>г. Кокшетау, ул. Ж. Тлеулина, 110</p>
              <p>ЖК МАДИНА</p>
              <a
                href="tel:+77712781228"
                className="block transition-colors hover:text-foreground"
              >
                +7 (771) 278-1228
              </a>
              <p>ПН – ПТ, 09:00 – 19:00</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-text-secondary">
            {"© 2026 Э.М.SMILE. Все права защищены."}
          </p>
          <a
            href="#"
            className="text-xs text-text-secondary transition-colors hover:text-foreground"
          >
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  )
}
