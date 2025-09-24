import Image from "next/image";
import { CustomLayout } from "@/components/CustomLayout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { collections } from "../../../data/collections";
import { notFound } from "next/navigation";


type RmontTwoColProps = {
  imgSrc: string;
  title: string; 
  pricePerHour?: string;
  pricePerDay?: string;
  deposit?: string;
};

const RmontTwoCol: React.FC<RmontTwoColProps> = ({
  imgSrc,
  title,
  pricePerHour = "",
  pricePerDay = "",
  deposit = "",
}) => {
  return (
    <section
      className={[
        "w-full rounded-2xl border border-neutral-200/70 bg-white p-4 sm:p-6 shadow-sm",
      ].join(" ")}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="w-full">
          <div className="relative w-full max-w-[450px] mx-auto">
            <div className="relative aspect-square w-full">
              <Image
                src={imgSrc}
                alt={title}
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1280px) 40vw, 450px"
                priority={false}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black">
            {title}
          </h2>

          <div className="mt-4 space-y-2">
            <p className="text-[22pt] leading-tight font-extrabold text-red-600">
              Вартість прокату
            </p>

            {pricePerHour && (
              <p className="text-2xl text-black">{`${pricePerHour} грн/год`}</p>
            )}

            {pricePerDay && (
              <p className="text-2xl text-black">{`${pricePerDay} грн/доба`}</p>
            )}

            {deposit && (
              <p className="text-2xl text-left text-black">{`Застава ${deposit} грн`}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};


type Tool = {
  slug: string;
  imgSrc: string;
  title: string;
  pricePerHour: string;
  pricePerDay: string;
  deposit: string;
};

export default async function VidbiynMolotku({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const paramsReady = await params;
  const slug = decodeURIComponent(paramsReady.slug.at(-1) || "");

  const normalize = (s: string) => s.toLowerCase().replace(/^\/+|\/+$/g, "");

  const found = collections.find((item) => {
    return normalize(item.slug) === normalize(slug);
  });

  if (!found) return notFound();

  const { imgSrc, title, pricePerHour, pricePerDay, deposit } = found;

  return (
    <CustomLayout breadcrumbs={<Breadcrumbs title={title} fromTitle="Відбійники молотки" fromUrl="/vidbiuni-molotku"  />}>
      <RmontTwoCol
        imgSrc={imgSrc}
        title={title}
        pricePerHour={pricePerHour}
        pricePerDay={pricePerDay}
        deposit={deposit}
      />
    </CustomLayout>
  );
}
