import { CustomLayout } from "@/components/CustomLayout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
export default function Posluhi() {
  return (
    <CustomLayout breadcrumbs={()=><Breadcrumbs title="Послуги" />} >
      <></>
    </CustomLayout>
  );
}