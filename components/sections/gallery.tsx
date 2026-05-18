import { FadeUp, FadeIn } from "@/components/ui/animate"

const images = [
  {
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=900&h=700&fit=crop&q=80",
    alt: "Arowwai caféinteriör",
    className: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&h=600&fit=crop&q=80",
    alt: "Lattekonst",
    className: "col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&h=600&fit=crop&q=80",
    alt: "Kaffehällning",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=700&h=600&fit=crop&q=80",
    alt: "Nybakat bakverk",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=900&h=600&fit=crop&q=80",
    alt: "Kaffebönor",
    className: "col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=700&h=600&fit=crop&q=80",
    alt: "Caféets sittplatser",
    className: "col-span-1 row-span-1",
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream pb-16 md:pb-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeUp className="text-center mb-8 md:mb-12">
          <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Galleri
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark tracking-tight">
            Livet på Arowwai
          </h2>
        </FadeUp>

        {/* Mobilgrid — enkel 2-kolumn */}
        <FadeIn delay={0.1} className="grid grid-cols-2 gap-3 md:hidden">
          {images.map((image) => (
            <div
              key={image.alt}
              className="relative rounded-xl overflow-hidden h-36 group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-300" />
            </div>
          ))}
        </FadeIn>

        {/* Desktop bento-grid */}
        <FadeIn delay={0.1} className="hidden md:block">
          <div className="grid grid-cols-3 grid-rows-3 gap-3" style={{ height: "680px" }}>
          {images.map((image) => (
            <div
              key={image.alt}
              className={`${image.className} relative rounded-2xl overflow-hidden group`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-300" />
            </div>
          ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
