import { Phone, MessageCircle } from "lucide-react";
import { siteData } from "../../data/siteData";

export default function FloatingContact() {
  const { phone, whatsapp } = siteData.business;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 flex gap-3 md:hidden">
      <a
        href={`tel:${phone}`}
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#C8A45D] px-4 py-3 text-sm font-bold text-[#0B0B0B] shadow-2xl shadow-black/40"
      >
        <Phone size={17} />
        Call
      </a>

      <a
        href={`https://wa.me/${whatsapp}`}
        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-[#151515]/95 px-4 py-3 text-sm font-bold text-[#F5EFE7] backdrop-blur-xl"
      >
        <MessageCircle size={17} />
        WhatsApp
      </a>
    </div>
  );
}