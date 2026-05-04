import { MapPin, Clock, Phone } from "lucide-react";
import { siteData } from "../data/siteData";
import SectionHeader from "../components/ui/SectionHeader";
import Reveal from "../components/ui/Reveal";

export default function Location() {
  const { business, openingHours } = siteData;

  return (
    <section id="location" className="bg-[#101010] px-5 py-24 pb-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Location"
          title="Easy to find. Easy to book. Easy to remember."
          description="For local businesses, this section matters because most clients are deciding from their phone."
        />

        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="rounded-[1.75rem] border border-white/10 bg-[#151515] p-7">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="mt-1 text-[#C8A45D]" size={22} />
                  <div>
                    <h3 className="font-black text-[#F5EFE7]">Address</h3>
                    <p className="mt-1 text-[#A8A29E]">{business.address}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="mt-1 text-[#C8A45D]" size={22} />
                  <div>
                    <h3 className="font-black text-[#F5EFE7]">Phone</h3>
                    <p className="mt-1 text-[#A8A29E]">{business.phone}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="mt-1 text-[#C8A45D]" size={22} />
                  <div className="w-full">
                    <h3 className="font-black text-[#F5EFE7]">
                      Opening Hours
                    </h3>

                    <div className="mt-3 space-y-3">
                      {openingHours.map((item) => (
                        <div
                          key={item.day}
                          className="flex items-center justify-between border-b border-white/10 pb-3 text-sm"
                        >
                          <span className="text-[#A8A29E]">{item.day}</span>
                          <span className="font-bold text-[#F5EFE7]">
                            {item.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="min-h-[420px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#151515]">
              <iframe
                title="Google Maps demo location"
                src="https://www.google.com/maps?q=Kreuzberg%20Berlin&output=embed"
                className="h-[420px] w-full grayscale"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}