export default function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-[#C8A45D] text-[#0B0B0B] hover:bg-[#E0BF76] hover:scale-[1.02]",
    secondary:
      "border border-white/15 bg-white/5 text-[#F5EFE7] hover:bg-white/10 hover:border-white/25",
    ghost:
      "text-[#F5EFE7] hover:text-[#C8A45D]",
  };

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}