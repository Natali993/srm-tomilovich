// components/ServiceCard.tsx
import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  title: string;                 // "ПОСЛУГИ БКМ"
  imgSrc: string;                // посилання/шлях до зображення
  imgAlt?: string;
  href?: string;                 // якщо є, вся картка клікабельна
  className?: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  imgSrc,
  imgAlt = "",
  href,
  className = "",
}) => {
  const Content = (
    <div
      className={[
        "relative flex w-full max-w-lg flex-col overflow-hidden",
        "border-2 border-slate-800 p-2 bg-white",
        "shadow-[0_0_0_4px_#ffffff_inset] ring-1 ring-slate-400",
        "transition-transform hover:scale-[1.01]",
        className,
      ].join(" ")}
    >
      <div className=" bg-white p-3 shadow-xl">
        <div className="relative mx-auto aspect-[4/3] w-full">
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill
            sizes="(max-width: 640px) 90vw, 420px"
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="mt-3  bg-[#0E3150] px-5 py-6 text-center shadow-xl">
        <span className="text-xl font-extrabold tracking-wide text-[#F0B443]">
          {title}
        </span>
      </div>
    </div>
  );

  return href ? (
    <Link
      href={href}
      className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E3150]/60 rounded-xl"
      aria-label={title}
    >
      {Content}
    </Link>
  ) : (
    Content
  );
};

export default ServiceCard;
