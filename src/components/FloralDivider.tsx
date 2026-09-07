import Image from "next/image";

export function FloralDivider() {
  return (
    <div className="relative z-20 -my-3 flex w-full items-center justify-center px-6" aria-hidden>
      <Image
        src="/images/floral-divider.png"
        alt=""
        width={1024}
        height={128}
        className="h-11 w-auto max-w-[280px] object-contain object-center sm:h-14 sm:max-w-[340px]"
      />
    </div>
  );
}
