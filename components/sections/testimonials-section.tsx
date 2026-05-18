import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animate"

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sofia Chen",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    description:
      "Arowwai har varit mitt favoritställe i flera år. Espresson är mörk, komplex och helt perfekt. Det finns ingen annanstans i New York jag hellre vill starta min dag.",
  },
  {
    id: 2,
    name: "Marcus Webb",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    description:
      "Jag har rest världen runt på jakt efter bra kaffe och Arowwai håller sig bland de allra bästa. Säsonglattén förändrar allt du trodde du visste om vad kaffe kan vara.",
  },
  {
    id: 3,
    name: "Emma Laurent",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    description:
      "Uppmärksamheten på detaljer här är olik något annat. Från inköpen till den sista hällningen kan du smaka omsorgen i varje kopp. En sann New York-institution.",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-cream py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeUp className="text-center mb-12 md:mb-16">
          <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Omdömen
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark tracking-tight">
            Vad våra gäster säger
          </h2>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6" delay={0.1}>
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.id}>
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm border border-dark/5 h-full flex flex-col">
                <p className="text-dark/70 text-sm leading-relaxed flex-1 mb-6">
                  "{t.description}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <p className="font-serif text-dark font-medium text-sm">
                    {t.name}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
