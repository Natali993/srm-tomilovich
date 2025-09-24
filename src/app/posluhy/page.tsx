import { CustomLayout } from "@/components/CustomLayout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ServiceCard from "@/components/PoslugiCard";
import poslugi from "@/data/poslugi";


export default function Posluhi() {
  return (
    <CustomLayout breadcrumbs={<Breadcrumbs title="Послуги" />} >
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"> 
        {poslugi.map(({ title, imgSrc, imgAlt, href }, index) => (
          <ServiceCard
            key={index}
            title={title}
            imgSrc={imgSrc}
            imgAlt={imgAlt} 
            href={`/posluhy/${href}`}
          />
        ))}
      </div>
    </CustomLayout>
  );
}