import React from 'react';
import { CustomTitle } from './Title';
import Image from 'next/image';

export const RemontDviguniv = () => {

  return (
    <div className="bg-white p-4 md:p-8 rounded-lg shadow-xl">
      <CustomTitle>Ремонт ДВИГУНІВ GX</CustomTitle>
      {/* Main content section with two columns */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Left column - image and small text */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <Image
            loading="lazy"
            decoding="async"
            src="/remontdvig.png"
            alt="Ремонт двигунів HONDA GX"
            width={300}
            height={300}
            layout="responsive"
            className="w-full max-w-[300px] h-auto rounded-lg"
          />
          {/* Replaced empty spans with padding */}
          <div className="pt-2"></div>
        </div>

        {/* Right column - text content */}
        <div className="w-full md:w-1/2">
          <div className="text-black text-2xl mb-4 text-justify">
            Виконуємо ремонт та обслуговування двигунів HONDA GX та їх аналогів. Кваліфікований ремонт будь-якого рівня складності. Можливий підбір запчастин від альтернативних виробників.
          </div>
          <div className="text-black text-2xl text-justify">
            Також у нас ви можете придбати запчастини чи витратні матеріали до цих двигунів.
          </div>
          {/* Replaced empty spans with padding */}
          <div className="pt-2"></div>
        </div>
      </div>
    </div>
  );
};


