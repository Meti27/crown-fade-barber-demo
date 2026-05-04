import { siteData } from "../data/siteData";
import SectionHeader from "../components/ui/SectionHeader";
import Reveal from "../components/ui/Reveal";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#101010] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Gallery"
          title="The kind of work clients screenshot before booking."
          description="Show the cuts, the chair, the atmosphere, and the detail. This is what sells a barber online."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {siteData.gallery.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="group relative h-[420px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#151515]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C8A45D]">
                    {item.category}
                  </p>

                  <h3 className="text-2xl font-black text-[#F5EFE7]">
                    {item.title}
                  </h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}