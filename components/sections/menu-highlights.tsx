import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animate"

const menuItems = [
  {
    name: "Signaturespresso",
    description: "Vårt husbland. Rostat måndag. Serverat perfekt. Inget mer att säga.",
    price: "$5",
    tag: "Husfavorit",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop&q=80",
  },
  {
    name: "Cold Brew Reserve",
    description: "18 timmar. Guatemala single-origin. Begränsat varje dag. Kom tidigt.",
    price: "$6",
    tag: "Begränsat",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop&q=80",
  },
  {
    name: "Cortado",
    description: "Espresso. Mjölk. Balans. Det är allt — och det räcker.",
    price: "$5.50",
    tag: "Klassisk",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&h=400&fit=crop&q=80",
  },
  {
    name: "Säsonglatte",
    description: "Följer skörden. Alltid annorlunda. Aldrig en besvikelse. Fråga oss.",
    price: "$7",
    tag: "Just nu",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop&q=80",
  },
]

export default function MenuHighlights() {
  return (
    <section id="menu" className="bg-dark py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Rubrik */}
        <FadeUp className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-16 gap-4">
          <div>
            <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              Signaturdrycker
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream tracking-tight leading-tight">
              Inga genvägar.<br />
              <em className="font-light text-cream/70">Aldrig.</em>
            </h2>
          </div>
          <a
            href="#visit"
            className="self-start sm:self-auto px-5 py-2.5 rounded-full border border-cream/20 text-cream/70 text-sm font-light hover:bg-cream/5 hover:border-cream/40 transition-all duration-200 whitespace-nowrap"
          >
            Hela menyn →
          </a>
        </FadeUp>

        {/* Menygrid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5" delay={0.05}>
          {menuItems.map((item) => (
            <StaggerItem key={item.name}>
              <div className="group rounded-2xl bg-white/5 border border-white/8 overflow-hidden hover:bg-white/8 transition-all duration-300 h-full">
                {/* Bild */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-dark/60 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-gold text-dark text-[10px] font-bold tracking-wide uppercase">
                    {item.tag}
                  </span>
                </div>

                {/* Innehåll */}
                <div className="p-4 md:p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-serif text-base md:text-lg text-cream font-medium leading-tight">
                      {item.name}
                    </h3>
                    <span className="text-gold font-semibold text-sm md:text-base ml-3 shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-cream/45 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Fotnot */}
        <FadeUp delay={0.2}>
          <p className="text-center text-cream/30 text-xs mt-8 md:mt-10 font-light tracking-wide">
Direkt från odlare · Rostat på plats · Havre, mandel & soja
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
