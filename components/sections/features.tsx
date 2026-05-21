import { Coffee, Leaf, Star } from "lucide-react"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/animate"

const features = [
  {
    icon: Coffee,
    title: "Single Origin",
    description:
      "Varje böna spåras till en enda gård. Vi åker dit. Vi väljer själva. Ingen annan får de bästa loten — det gör vi.",
  },
  {
    icon: Leaf,
    title: "Alltid i Säsong",
    description:
      "Menyn följer skörden. Inget konstant, inget kompromissat. Det bästa just nu — det är vad vi serverar.",
  },
  {
    icon: Star,
    title: "Noll Kompromisser",
    description:
      "Våra baristor tränar månader. Temperaturen är exakt. Malgraden är exakt. Resultatet är exakt.",
  },
]

export default function Features() {
  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeUp className="text-center mb-10 md:mb-16">
          <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Varför Arowwai
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark tracking-tight">
            Detaljer är allt
          </h2>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8" delay={0.1}>
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <StaggerItem key={feature.title}>
                <div className="group p-6 md:p-8 rounded-2xl md:rounded-3xl border border-dark/8 bg-cream/30 hover:bg-cream transition-all duration-300 hover:border-gold/30 hover:shadow-sm h-full">
                  <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gold/15 flex items-center justify-center mb-5 md:mb-6 group-hover:bg-gold/25 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-lg md:text-xl text-dark mb-2 md:mb-3 font-medium">
                    {feature.title}
                  </h3>
                  <p className="text-dark/55 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
