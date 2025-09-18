import Image from 'next/image';
import Link from 'next/link';
import { CustomTitle } from './Title';
import { RmontCard } from './RmontCard';

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {categories.map(({ name, imageSrc, imageWidth, imageHeight, altText, href }, index) => (
          <RmontCard
            key={index}
            imgSrc={imageSrc}
            title={name}
            href={href}
          />
        ))}
      </div>
    </div>
  );
}