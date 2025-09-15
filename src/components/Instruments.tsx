import Image from 'next/image';
import Link from 'next/link';
import { CustomTitle } from './Title';

export const Instruments = () => {
  const categories = [
    {
      name: 'ЕЛЕКТРОІНСТРУМЕНТ',
      imageSrc: '/section-procat-itstrument-1.png',
      imageWidth: 390,
      imageHeight: 420,
      altText: 'Power tools',
      href: '/elektroinstrument/',
    },
    {
      name: 'ДЛЯ БЕТОННИХ РОБІТ',
      imageSrc: '/section-procat-itstrument-2.png',
      imageWidth: 390,
      imageHeight: 420,
      altText: 'For concrete work',
      href: '/dla-betonuh-robit/',
    },
    {
      name: 'ВІДБІЙНІ МОЛОТКИ',
      imageSrc: '/section-procat-itstrument-3.png',
      imageWidth: 390,
      imageHeight: 420,
      altText: 'Demolition hammers',
      href: '/vidbiuni-molotku/',
    },
    {
      name: 'КЛІНІНГОВА техніка',
      imageSrc: '/section-procat-itstrument-4.png',
      imageWidth: 390,
      imageHeight: 420,
      altText: 'Cleaning equipment',
      href: '/kliningova-tehnika/',
    },
    {
      name: 'ВІБРОПЛИТИ',
      imageSrc: '/section-procat-itstrument-5.png',
      imageWidth: 390,
      imageHeight: 420,
      altText: 'Cleaning equipment',
      href: '/vibriplutu/'
    },
    {
      name: 'ПЕРФОРАТОРИ BOSCH',
      imageSrc: '/section-procat-itstrument-6.png',
      imageWidth: 390,
      imageHeight: 420,
      altText: 'Cleaning equipment',
      href: '/pervorator-bosch/',
    },
    {
      name: 'БЕНЗИНОВІ ГЕНЕРАТОРИ',
      imageSrc: '/section-procat-itstrument-7.png',
      imageWidth: 390,
      imageHeight: 420,
      altText: 'Cleaning equipment',
      href: '/benzynovi-generatoru/',
    },
    {
      name: 'САДОВИЙ інструмент',
      imageSrc: '/section-procat-itstrument-8.png',
      imageWidth: 390,
      imageHeight: 420,
      altText: 'Cleaning equipment',
      href: '/sadovui-instrument/',
    }
  ];

  return (
    <div className="container mx-auto px-4 ">
      <CustomTitle>
        Інструмент в ПРОКАТ
      </CustomTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src={category.imageSrc}
                alt={category.altText}
                width={category.imageWidth}
                height={category.imageHeight}
                sizes="(max-width: 390px) 100vw, 390px"
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold mt-4 mb-2 text-black">
              {category.name}
            </h3>
            <Link href={category.href} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors duration-300">
              ДЕТАЛЬНІШЕ
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}