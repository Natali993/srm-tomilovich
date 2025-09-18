import { CustomLayout } from "@/components/CustomLayout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RmontCard } from "@/components/RmontCard";
import { collections } from "./collections";
import { TOOL_TYPE } from "@/components/toolTypes";

export default function OrendaElektroinstrymentiv() {

  const elektroinstrumentItems = collections.filter(item => item.type === TOOL_TYPE.BETON);
  return (
    <CustomLayout breadcrumbs={()=><Breadcrumbs title="Для бетонних робіт" />} >
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {elektroinstrumentItems.map(({imgSrc, title, href }, index) => (
          <RmontCard
            key={index}
            imgSrc={imgSrc}
            title={title}
            href={href}
          />
        ))} 
      </div>
    </CustomLayout>
  );
}