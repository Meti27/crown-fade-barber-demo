import { useState } from "react";
import { Menu, X, Scissors } from "lucide-react";
import { siteData } from "../../data/siteData";
import Button from "../ui/Button";

const links = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0B0B0B]/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C8A45D]/40 bg-[#C8A45D]/10 text-[#C8A45D]">
            <Scissors size={18} />
          </span>

          <span className="text-sm font-black uppercase tracking-[0.22em] text-[#F5EFE7]">
            {siteData.business.name}
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#A8A29E] transition hover:text-[#F5EFE7]"
            >
              {link.label}
            </a>
          ))}

          <Button href="#booking">Book Now</Button>
        </div>

        <button
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#F5EFE7] md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#0B0B0B] px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-[#F5EFE7]"
              >
                {link.label}
              </a>
            ))}

            <Button href="#booking" className="w-full">
              Book Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}