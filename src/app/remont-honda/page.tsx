import { CustomLayout } from "@/components/CustomLayout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RemontDviguniv } from "@/components/RemontDviguniv";
export default function RemontHonda() {
  return (
    <CustomLayout breadcrumbs={<Breadcrumbs title="Ремонт Honda GX" />} >
      <RemontDviguniv/>
    </CustomLayout>
  );
}