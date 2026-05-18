import { ShaderBackground } from "@/components/ui/hero-shader"
import { MobileNav } from "@/components/ui/mobile-nav"

export default function Hero() {
  return (
    <ShaderBackground>
      <header className="relative z-20 flex items-center justify-between px-6 md:px-8 py-5 md:py-6">
        <img
          src="/Arowwai new york estd 1999 (2).png"
          alt="Arowwai"
          className="h-30 md:h-30 w-auto"
        />
        <nav className="hidden md:flex items-center gap-1">
          <a
            href="#menu"
            className="text-white/80 hover:text-white text-sm font-light px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
          >
            Meny
          </a>
          <a
            href="#about"
            className="text-white/80 hover:text-white text-sm font-light px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
          >
            Om oss
          </a>
          <a
            href="#gallery"
            className="text-white/80 hover:text-white text-sm font-light px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
          >
            Galleri
          </a>
        </nav>
        <a
          href="#visit"
          className="hidden md:block px-5 py-2.5 rounded-full bg-gold text-dark text-sm font-semibold hover:bg-[#d4962f] transition-all duration-200"
        >
          Hitta oss
        </a>
        <MobileNav />
      </header>

      <main className="absolute bottom-8 md:bottom-12 left-6 md:left-12 z-20 max-w-lg md:max-w-2xl right-6 md:right-auto">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 md:mb-6"
          style={{ filter: "url(#glass-effect)" }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-linear-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">
            Est. 1999
          </span>
          <span className="text-white/30">·</span>
          <span className="text-white/70 text-xs font-light tracking-wide">
            New York City
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-[4.5rem] text-white leading-[1.05] tracking-tight mb-4 md:mb-6">
          Varje kopp<br />
          <em className="text-white/85 not-italic font-light">berättar</em>{" "}
          <span className="font-bold">sin historia</span>
        </h1>

        <p className="text-white/55 text-sm md:text-base font-light mb-6 md:mb-8 max-w-md leading-relaxed">
          Tjugofem år av exceptionella bönor och den mest genomtänkta kaffeupplevelsen i staden.
        </p>

        <div className="flex items-center gap-3 md:gap-4 flex-wrap">
          <a
            href="#menu"
            className="px-6 py-3 md:px-8 md:py-3.5 rounded-full bg-gold text-dark text-sm font-semibold hover:bg-[#d4962f] transition-all duration-200 cursor-pointer"
          >
            Utforska menyn
          </a>
          <a
            href="#about"
            className="px-6 py-3 md:px-8 md:py-3.5 rounded-full border border-white/30 text-white text-sm font-light hover:bg-white/10 hover:border-white/50 transition-all duration-200 cursor-pointer"
          >
            Vår historia
          </a>
        </div>
      </main>
    </ShaderBackground>
  )
}
