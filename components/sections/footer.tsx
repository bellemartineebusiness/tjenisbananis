import { Globe, Mail, Rss } from "lucide-react"
import { FadeIn, FadeUp } from "@/components/ui/animate"

const navigation = {
  menu: [
    { label: "Espressobar", href: "#menu" },
    { label: "Cold Brew", href: "#menu" },
    { label: "Säsongsmeny", href: "#menu" },
    { label: "Bakverk", href: "#menu" },
  ],
  visit: [
    { label: "Tribeca", href: "#visit" },
    { label: "West Village", href: "#visit" },
    { label: "Williamsburg", href: "#visit" },
    { label: "Öppettider & Info", href: "#visit" },
  ],
  company: [
    { label: "Vår Historia", href: "#about" },
    { label: "Inköp", href: "#about" },
    { label: "Grossist", href: "#" },
    { label: "Press", href: "#" },
  ],
}

export default function Footer() {
  return (
    <footer id="footer" className="bg-dark pt-14 md:pt-20 pb-8 md:pb-10 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Övre rad */}
        <FadeIn className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 mb-12 md:mb-16 pb-12 md:pb-16 border-b border-white/8">
          {/* Varumärke */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <img
              src="/Arowwai new york estd 1999 (2).png"
              alt="Arowwai"
              className="h-10 md:h-14 w-auto mb-5 md:mb-6"
            />
            <p className="text-cream/45 text-sm font-light leading-relaxed max-w-xs">
              New Yorks finaste kaffe sedan 1999. Tre platser, ett mål — den perfekta koppen.
            </p>
            <div className="flex items-center gap-3 md:gap-4 mt-6 md:mt-8">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-cream/50 hover:text-gold hover:border-gold/40 transition-all duration-200"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-cream/50 hover:text-gold hover:border-gold/40 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-cream/50 hover:text-gold hover:border-gold/40 transition-all duration-200"
              >
                <Rss className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigationkolumner */}
          <div>
            <p className="text-cream/30 text-xs font-bold tracking-[0.15em] uppercase mb-4 md:mb-5">
              Meny
            </p>
            <ul className="space-y-2.5 md:space-y-3">
              {navigation.menu.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-cream/60 text-sm font-light hover:text-gold transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-cream/30 text-xs font-bold tracking-[0.15em] uppercase mb-4 md:mb-5">
              Besök
            </p>
            <ul className="space-y-2.5 md:space-y-3">
              {navigation.visit.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-cream/60 text-sm font-light hover:text-gold transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-cream/30 text-xs font-bold tracking-[0.15em] uppercase mb-4 md:mb-5">
              Företag
            </p>
            <ul className="space-y-2.5 md:space-y-3">
              {navigation.company.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-cream/60 text-sm font-light hover:text-gold transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Nedre rad */}
        <FadeUp delay={0.1} className="flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4">
          <p className="text-cream/25 text-xs font-light">
            © 2024 Arowwai Coffee, Inc. Alla rättigheter förbehållna.
          </p>
          <div className="flex items-center gap-4 md:gap-6">
            <a
              href="#"
              className="text-cream/25 text-xs font-light hover:text-cream/50 transition-colors"
            >
              Integritetspolicy
            </a>
            <a
              href="#"
              className="text-cream/25 text-xs font-light hover:text-cream/50 transition-colors"
            >
              Användarvillkor
            </a>
          </div>
        </FadeUp>
      </div>
    </footer>
  )
}
