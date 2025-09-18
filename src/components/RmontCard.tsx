import Image from "next/image";
import Link from "next/link";

type RmontCardProps = {
  imgSrc: string;
  title: string;
  href: string;
};

 export const RmontCard: React.FC<RmontCardProps> = ({
  imgSrc,
  title,
  href,
}) => {
  return (
    <div
      className={[
        // Базове оформлення картки
        "flex flex-col items-center text-center",
        "rounded-2xl border border-neutral-200/70 bg-white shadow-sm",
        "p-4 sm:p-5",
        "transition-shadow hover:shadow-md hover:scale-[1.02] duration-200 transition-transform",
      ].join(" ")}
    >
      {/* Зображення */}
      <div className="relative w-full max-w-[480px]">
        {/* підтримка квадратного медіа, як у вашому прикладі 450x450 */}
        <div className="relative aspect-square w-full">
          <Image
            src={imgSrc}
            alt={title}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 450px"
            priority={false}
            className="object-contain"
          />
        </div>
      </div>

      {/* Заголовок */}
      <div className="mt-4">
        <h3 className="font-sans min-h-[90px] text-xl font-bold leading-tight text-black">
          {title}
        </h3>
      </div>

      <div className="mt-5">
        <Link
          href={href}
          className={[
            "inline-flex items-center justify-center",
            "rounded-lg px-6 py-3",
            "text-sm font-semibold tracking-wide",
            "bg-[#003152] text-white",
            "hover:bg-[#023456] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/60",
            "active:translate-y-[1px]",
          ].join(" ")}
          aria-label={"Детальніше про " + title}
        >
           ДЕТАЛЬНІШЕ
        </Link>
      </div>
    </div>
  );
};
