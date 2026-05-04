import { motion } from "framer-motion";
import { Star, MapPin, Clock } from "lucide-react";
import { siteData } from "../data/siteData";
import Button from "../components/ui/Button";

export default function Hero() {
  const { business, hero } = siteData;

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B0B0B] pt-28">
      <div
        className="absolute inset-0 opacity-45"
        style={{
          backgroundImage: `url(${hero.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/85 to-[#0B0B0B]/30" />
      <div className="absolute inset-0 noise-bg opacity-40" />

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 px-5 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5 inline-flex rounded-full border border-[#C8A45D]/30 bg-[#C8A45D]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.32em] text-[#C8A45D]"
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="text-balance max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-[#F5EFE7] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-[#CFC7BD] md:text-xl"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="#booking">{hero.primaryCta}</Button>
            <Button href="#services" variant="secondary">
              {hero.secondaryCta}
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="hidden lg:block"
        >
          <div className="ml-auto max-w-md rounded-[2rem] border border-white/10 bg-[#151515]/70 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#0B0B0B]/70 p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#A8A29E]">Today</p>
                  <p className="text-xl font-black text-[#F5EFE7]">
                    Fresh slots available
                  </p>
                </div>

                <div className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-bold text-green-300">
                  Open
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <Star className="text-[#C8A45D]" size={20} />
                  <div>
                    <p className="font-bold text-[#F5EFE7]">
                      {business.rating} rating
                    </p>
                    <p className="text-sm text-[#A8A29E]">
                      Based on {business.reviewCount} reviews
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <Clock className="text-[#C8A45D]" size={20} />
                  <div>
                    <p className="font-bold text-[#F5EFE7]">
                      {business.status}
                    </p>
                    <p className="text-sm text-[#A8A29E]">
                      Walk-ins welcome
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <MapPin className="text-[#C8A45D]" size={20} />
                  <div>
                    <p className="font-bold text-[#F5EFE7]">
                      {business.city}
                    </p>
                    <p className="text-sm text-[#A8A29E]">
                      {business.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}