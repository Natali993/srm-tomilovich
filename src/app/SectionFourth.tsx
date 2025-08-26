import React from 'react';


export const SectionFourth = () => {
  
  return (
    <div className="bg-white p-4 md:p-8 rounded-lg shadow-xl">
      <div className="flex justify-center w-full mb-8">
        <h1 className="text-center font-serif uppercase tracking-[0.06em] leading-none text-[#133553] text-[42px] md:text-[56px] lg:text-[64px]">
          РЕмонт ДВИГУНІВ GX
        </h1>
      </div>

      {/* Main content section with two columns */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Left column - image and small text */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img
            loading="lazy"
            decoding="async"
            width="300"
            height="300"
            src="remontdvig.png"
            className="w-full max-w-[300px] h-auto rounded-lg"
            alt="Ремонт двигунів HONDA GX"
            srcSet="remontdvig.png 300w, remontdvig.png-150x150.png 150w, remontdvig.png-350x350.png 350w, remontdvig.png-600x600.png 600w, remontdvig.png 699w"
            sizes="(max-width: 300px) 100vw, 300px"
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


