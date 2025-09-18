import { CustomLayout } from "@/components/CustomLayout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
export default function RemontHonda() {
  return (
    <CustomLayout breadcrumbs={()=><Breadcrumbs title="Ремонт Honda GX" />} >
      <></>
    </CustomLayout>
  );
}