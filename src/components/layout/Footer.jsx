import { Scissors } from "lucide-react";
import { siteData } from "../../data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B0B0B] px-5 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#A8A29E] md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C8A45D]/40 bg-[#C8A45D]/10 text-[#C8A45D]">
            <Scissors size={16} />
          </span>

          <span className="font-bold text-[#F5EFE7]">
            {siteData.business.name}
          </span>
        </div>

        <p>
          Demo website built for premium barber shops. Replace content and reuse
          for real clients.
        </p>
      </div>
    </footer>
  );
}