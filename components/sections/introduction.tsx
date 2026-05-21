import { FadeUp, FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animate"

const stats = [
  { value: "25", label: "År" },
  { value: "3", label: "Platser" },
  { value: "50+", label: "Blandningar" },
  { value: "1", label: "Passion" },
]

export default function Introduction() {
  return (
    <section id="about" className="bg-cream py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Vänster kolumn */}
        <div>
          <FadeUp>
            <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              Vår Historia
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark leading-[1.1] tracking-tight mb-5 md:mb-6">
              Inte bara kaffe.<br />
              <em className="font-light">En övertygelse.</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-dark/65 text-sm md:text-base leading-relaxed mb-5 md:mb-6 max-w-lg">
              New York, 1999. Vi startade med en enkel idé — kaffe ska vara exceptionellt eller inte alls. Direkt från gårdar i Etiopien, Colombia och Guatemala. Inga mellanhänder.
            </p>
            <p className="text-dark/65 text-sm md:text-base leading-relaxed mb-10 md:mb-12 max-w-lg">
              25 år senare är inget förändrat. Samma krav. Samma passion. Varje kopp.
            </p>
          </FadeUp>

          {/* Statistik */}
          <StaggerContainer
            delay={0.15}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 border-t border-dark/10 pt-8 md:pt-10"
          >
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <p className="font-serif text-3xl md:text-4xl text-gold font-bold mb-1">
                  {stat.value}
                </p>
                <p className="text-dark/50 text-xs font-light tracking-wide uppercase">
                  {stat.label}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Höger kolumn — bild */}
        <FadeIn delay={0.2} className="relative h-72 sm:h-96 lg:h-130 xl:h-155 rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=900&h=700&fit=crop&q=80"
            alt="Arowwai caféinteriör"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-dark/30 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-cream/95 backdrop-blur-sm rounded-xl md:rounded-2xl px-4 py-3 md:px-5 md:py-4">
            <p className="text-gold text-xs font-bold tracking-widest uppercase mb-0.5">
              New York City
            </p>
            <p className="text-dark text-xs md:text-sm font-medium">
              West Broadway, Tribeca
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
