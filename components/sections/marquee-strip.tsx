export default function MarqueeStrip() {
  const items = [
    "HANTVERKSKAFFE",
    "NEW YORK CITY",
    "EST. 1999",
    "SINGLE ORIGIN",
    "KAFFEROSTARE",
    "SÄSONGSMENY",
    "TREDJE VÅGEN",
    "SMÅSKALIGT",
  ]

  const repeated = [...items, ...items]

  return (
    <div className="bg-gold py-3.5 overflow-hidden border-y border-[#d4962f] relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-linear-to-r from-gold to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-linear-to-l from-gold to-transparent z-10 pointer-events-none" />
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-6 px-6">
            <span className="text-dark text-xs font-bold tracking-[0.2em] uppercase whitespace-nowrap">
              {item}
            </span>
            <span className="text-dark/40 text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
