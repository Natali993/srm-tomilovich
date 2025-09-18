import { ProcatBanner } from '../components/ProcatBanner';
import { Instruments } from '../components/Instruments';
import { Benefits } from '../components/Benefits';
import { OurPartners } from '../components/OurPartners';
import { Questions } from '../components/Questions';
import { Map } from '../components/Map';
import { CustomLayout } from '../components/CustomLayout';
import { ProcatPoslugi } from '@/components/ProcatPoslugi';
import { RemontDviguniv } from '@/components/RemontDviguniv';
export default function Home() {
  return (
    <CustomLayout>
      {/* Content sections go here */}
      <ProcatBanner />
      <ProcatPoslugi />
      <Instruments />
      <RemontDviguniv />
      <Benefits />
      <OurPartners />
      <Questions />
      <Map />
    </CustomLayout>
   
  );
}