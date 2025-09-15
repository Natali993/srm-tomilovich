import React from 'react';
import { CustomTitle } from './Title';


export const Questions = () => {

  return (
    <div className="bg-white">
      <section className="w-full ">
        <CustomTitle>ЗАЛИШИЛИСЬ ПИТАННЯ?</CustomTitle>
      </section>

      <section className="w-full py-4 px-4">
        <div className="flex justify-center items-center gap-2 md:gap-4">
          <img
            loading="lazy"
            decoding="async"
            className="w-[33px] h-[33px] object-contain"
            src="telephone.png"
            alt="Phone icon"
            width="33"
            height="33"
          />
          <a href="tel:+380673607520" className="font-black text-xl md:text-2xl text-black hover:underline transition-all duration-300">
            +38 (067) 360 75 20
          </a>
        </div>
      </section>
    </div>


  );
};


