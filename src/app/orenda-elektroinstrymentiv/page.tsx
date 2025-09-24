"use client";
import { CustomLayout } from "@/components/CustomLayout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RmontCard } from "@/components/RmontCard";
import { collections } from "../../data/collections";
import { useCollectionHref } from "@/hooks/useCollectionHref";

export default function OrendaElektroinstrymentiv() {
  const { generateHref } = useCollectionHref();

  return (
    <CustomLayout breadcrumbs={<Breadcrumbs title="Оренда електроінструментів" />} >
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {collections.map(({imgSrc, title, slug }, index) => (
          <RmontCard
            key={index}
            imgSrc={imgSrc}
            title={title}
            href={generateHref(slug)}
          />
        ))}
      </div>
    </CustomLayout>
  );
}