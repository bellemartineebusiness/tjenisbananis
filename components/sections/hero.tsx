import { MobileNav } from "@/components/ui/mobile-nav"

export default function Hero() {
  return (
    <section className="min-h-screen bg-cream flex flex-col overflow-hidden">
      {/* Mörk gradient för nav-synlighet */}
      <div className="absolute inset-x-0 top-0 h-36 bg-linear-to-b from-dark/50 to-transparent z-10 pointer-events-none" />

      {/* Nav */}
      <header className="relative z-20 flex items-center justify-between px-6 md:px-8 py-5 md:py-6 shrink-0">
        <img
          src="/Arowwai new york estd 1999 (2).png"
          alt="Arowwai"
          className="h-20 w-auto"
        />
        <nav className="hidden md:flex items-center gap-1">
          <a href="#menu" className="text-white/80 hover:text-white text-sm font-light px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200">Meny</a>
          <a href="#about" className="text-white/80 hover:text-white text-sm font-light px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200">Om oss</a>
          <a href="#gallery" className="text-white/80 hover:text-white text-sm font-light px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200">Galleri</a>
        </nav>
        <a
          href="#visit"
          className="hidden md:block px-5 py-2.5 rounded-full bg-gold text-dark text-sm font-semibold hover:bg-[#d4962f] transition-all duration-200"
        >
          Hitta oss
        </a>
        <MobileNav />
      </header>

      {/* Bild */}
      <img
        src="/arowwai (1).png"
        alt="Arowwai"
        className="absolute inset-0 w-full h-[115%] object-cover object-top top-[-15%]"
      />
    </section>
  )
}
