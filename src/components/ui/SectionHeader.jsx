import Reveal from "./Reveal";

export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[#C8A45D]">
        {eyebrow}
      </p>

      <h2 className="text-balance text-3xl font-black tracking-tight text-[#F5EFE7] sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#A8A29E]">
          {description}
        </p>
      )}
    </Reveal>
  );
}