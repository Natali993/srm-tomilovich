
import { CustomLayout } from "@/components/CustomLayout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Image from "next/image";
import Link from "next/link";
export default function OrendaElektroinstrymentiv() {
  return (
    <CustomLayout breadcrumbs={<Breadcrumbs title="Прокат" />} >

      <main className="w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="py-12">
            <section className="py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* First image */}
                <div className="flex justify-center">
                  <Link href="/orenda-elektroinstrymentiv">
                    <Image
                      src="/procat-electroinstrymentu.png"
                      alt="Послуги"
                      width={675}
                      height={870}
                      className="rounded-lg shadow-md hover:scale-105 transition-transform"
                    />
                  </Link>
                </div>

                {/* Second image */}
                <div className="flex justify-center">
                  <Link href="https://techprokat.rv.ua/pritsep-lafeta/">
                    <Image
                      src="/procat-pricepa.png"
                      alt="Причеп Лафета"
                      width={669}
                      height={865}
                      className="rounded-lg shadow-md hover:scale-105 transition-transform"
                    />
                  </Link>
                </div>

                {/* Empty third column */}
                <div></div>
              </div>

              {/* Second row of 3 columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </CustomLayout>
  );
}