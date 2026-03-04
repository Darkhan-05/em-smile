import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { AboutSection } from "@/components/about-section"
import { DoctorSection } from "@/components/doctor-section"
import { ServicesSection } from "@/components/services-section"
import { PriceSection } from "@/components/price-section"
import { PaymentSection } from "@/components/payment-section"
import { GallerySection } from "@/components/gallery-section"
import { ReviewsSection } from "@/components/reviews-section"
import { AppointmentSection } from "@/components/appointment-section"
import { ContactsSection } from "@/components/contacts-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <DoctorSection />
      <ServicesSection />
      <PriceSection />
      <PaymentSection />
      <GallerySection />
      <ReviewsSection />
      <AppointmentSection />
      <ContactsSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
