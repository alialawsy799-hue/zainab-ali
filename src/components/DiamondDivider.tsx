export function DiamondDivider() {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden>
      <span className="h-px w-10 bg-gradient-to-l from-gold/70 to-transparent sm:w-14" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold/80" />
      <span className="h-px w-10 bg-gradient-to-r from-gold/70 to-transparent sm:w-14" />
    </div>
  );
}
