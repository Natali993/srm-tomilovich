import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const ProcatBanner = () => {
  return (
    <div className="container mx-auto">
      <Link className="relative w-full overflow-hidden rounded-lg shadow-lg" href="/orenda-elektroinstrymentiv">
        <Image
          src="/sectionFirst.png"
          alt="Слайдер"
          width={2500}
          height={900}
          layout="responsive"
          className="rounded-lg"
        />
      </Link>
    </div>
  );
};
