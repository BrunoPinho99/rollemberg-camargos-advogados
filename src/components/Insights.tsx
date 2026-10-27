import Image from "next/image";

export default function Insights() {
  const projects = [
    {
      title: "Property & Civil Law",
      year: "2024",
      tags: "Litigation • Claim Management",
      image: "https://framerusercontent.com/images/wsGNlyuOkIdU6Vf8VoUlYjuvmC4.png",
      alt: "Property & Civil Law Case Study",
      align: "left",
    },
    {
      title: "Nomad Vision™",
      year: "2024",
      tags: "Corporate Law • Civil Law",
      image: "https://framerusercontent.com/images/nmXZOsPpIlQjIHmg5uwOA5NJcI.png",
      alt: "Nomad Vision Corporate Law Case Study",
      align: "right",
    },
    {
      title: "Livingless",
      year: "2025",
      tags: "Corporate Law • Due Diligence",
      image: "https://framerusercontent.com/images/uKY0y11Igx9LzVoeZBuszZASoU.png",
      alt: "Livingless Legal Advisory Case Study",
      align: "left",
    },
  ];

  return (
    <section id="insights" className="py-24 sm:py-32 bg-[#fcfbf7] border-b border-[#e8e6df]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14">
        {/* Header da Seção de Insights */}
        <div className="pb-16 reveal">
          <span className="text-[12px] font-semibold tracking-wider uppercase text-[#6e6d69] block mb-4">
            INSIGHTS & CASE STUDIES
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-[1.08] max-w-2xl text-[#101010]">
            Real-world results across corporate matters.
          </h2>
        </div>

        <div className="border-t border-[#e8e6df] pt-16">
          <div className="space-y-20 sm:space-y-28">
            {projects.map((proj, idx) => (
              <article
                key={proj.title}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-6 items-start group reveal ${
                  idx % 2 === 1 ? "delay-100" : ""
                }`}
              >
                {proj.align === "left" ? (
                  <>
                    <div className="lg:col-span-6 space-y-4">
                      <div className="overflow-hidden rounded-xl bg-neutral-200 relative w-full h-[280px] sm:h-[360px] md:h-[420px]">
                        <Image
                          src={proj.image}
                          alt={proj.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex items-center justify-between text-xs tracking-tight pt-1">
                        <h3 className="font-semibold text-[#101010] text-lg sm:text-xl group-hover:underline">
                          {proj.title}
                        </h3>
                        <div className="text-right text-[11px] uppercase text-[#6e6d69] tracking-wider">
                          {proj.tags}
                        </div>
                      </div>
                    </div>
                    <div className="hidden lg:block lg:col-span-6 text-right pt-2">
                      <span className="text-xs font-mono text-[#6e6d69]">
                        {proj.year}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="hidden lg:block lg:col-span-6 pt-2">
                      <span className="text-xs font-mono text-[#6e6d69]">
                        {proj.year}
                      </span>
                    </div>
                    <div className="lg:col-span-6 space-y-4">
                      <div className="overflow-hidden rounded-xl bg-neutral-200 relative w-full h-[280px] sm:h-[360px] md:h-[420px]">
                        <Image
                          src={proj.image}
                          alt={proj.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex items-center justify-between text-xs tracking-tight pt-1">
                        <h3 className="font-semibold text-[#101010] text-lg sm:text-xl group-hover:underline">
                          {proj.title}
                        </h3>
                        <div className="text-right text-[11px] uppercase text-[#6e6d69] tracking-wider">
                          {proj.tags}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
