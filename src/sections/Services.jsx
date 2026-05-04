import { ArrowUpRight } from "lucide-react";
import { siteData } from "../data/siteData";
import SectionHeader from "../components/ui/SectionHeader";
import Reveal from "../components/ui/Reveal";

export default function Services() {
  return (
    <section id="services" className="bg-[#0B0B0B] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title="Cuts, fades, and beard work without the guessing."
          description="Simple pricing, clean service, and work that looks sharp from every angle."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {siteData.services.map((service, index) => (
            <Reveal key={service.name} delay={index * 0.08}>
              <article className="group min-h-[280px] rounded-[1.75rem] border border-white/10 bg-[#151515] p-6 transition duration-300 hover:-translate-y-2 hover:border-[#C8A45D]/40 hover:bg-[#191919]">
                <div className="mb-10 flex items-start justify-between">
                  <p className="text-sm font-bold text-[#C8A45D]">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#A8A29E] transition group-hover:border-[#C8A45D]/40 group-hover:text-[#C8A45D]">
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                <h3 className="text-2xl font-black tracking-tight text-[#F5EFE7]">
                  {service.name}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#A8A29E]">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-sm text-[#A8A29E]">
                    {service.duration}
                  </span>

                  <span className="text-xl font-black text-[#F5EFE7]">
                    {service.price}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}