import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animate"

export default function CTA() {
  return (
    <section id="visit" className="bg-gold py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <FadeUp>
          <span className="text-dark/60 text-xs font-bold tracking-[0.2em] uppercase mb-5 md:mb-6 block">
            Hitta oss
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-dark tracking-tight leading-[1.05] mb-5 md:mb-6">
            Redo för din<br />
            <em className="font-light">nästa kopp?</em>
          </h2>
          <p className="text-dark/65 text-sm md:text-base font-light mb-8 md:mb-10 max-w-lg mx-auto leading-relaxed">
            Tre platser runt om i New York City, öppna sju dagar i veckan. Kom in, ta en plats och låt oss ta hand om resten.
          </p>

          <div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap mb-10 md:mb-16">
            <a
              href="#menu"
              className="px-8 py-3.5 md:px-10 md:py-4 rounded-full bg-dark text-cream text-sm font-semibold hover:bg-[#2d1f0a] transition-all duration-200"
            >
              Se hela menyn
            </a>
            <a
              href="#footer"
              className="px-8 py-3.5 md:px-10 md:py-4 rounded-full border-2 border-dark/30 text-dark text-sm font-medium hover:bg-dark/8 hover:border-dark/50 transition-all duration-200"
            >
              Hitta en plats
            </a>
          </div>
        </FadeUp>

        {/* Platskort */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 text-left" delay={0.1}>
          {[
            { area: "Tribeca", address: "West Broadway", hours: "Mån – Fre 7–19" },
            { area: "West Village", address: "Bleecker Street", hours: "Dagligen 8–20" },
            { area: "Williamsburg", address: "Bedford Avenue", hours: "Dagligen 8–21" },
          ].map((loc) => (
            <StaggerItem key={loc.area}>
              <div className="rounded-xl md:rounded-2xl bg-dark/8 border border-dark/10 p-5 md:p-6 hover:bg-dark/12 transition-colors duration-200 h-full">
                <p className="text-dark text-base font-semibold font-serif mb-1">
                  {loc.area}
                </p>
                <p className="text-dark/60 text-sm font-light mb-2 md:mb-3">
                  {loc.address}, New York
                </p>
                <p className="text-dark/50 text-xs font-light tracking-wide">
                  {loc.hours}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
