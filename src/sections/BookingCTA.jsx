import { Phone, MessageCircle } from "lucide-react";
import { siteData } from "../data/siteData";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";

export default function BookingCTA() {
  const { phone, whatsapp } = siteData.business;

  return (
    <section id="booking" className="bg-[#0B0B0B] px-5 py-24 lg:px-8">
      <Reveal>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#C8A45D]/20 bg-[#15110B] p-8 shadow-2xl shadow-black/30 md:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#C8A45D]">
                Book your chair
              </p>

              <h2 className="text-balance text-4xl font-black leading-tight tracking-[-0.04em] text-[#F5EFE7] md:text-6xl">
                Ready for a fresh cut before the weekend?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#CFC7BD]">
                Call directly or message on WhatsApp. For real client projects,
                this button can connect to Fresha, Calendly, Booksy, or a custom
                booking form later.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href={`tel:${phone}`} className="gap-2">
                <Phone size={18} />
                Call Now
              </Button>

              <Button
                href={`https://wa.me/${whatsapp}`}
                variant="secondary"
                className="gap-2"
              >
                <MessageCircle size={18} />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}