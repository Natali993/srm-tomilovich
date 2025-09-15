import React from 'react';
import { CustomTitle } from './Title';


export const OurPartners = () => {

  return (
    <div className="bg-white ">
      <CustomTitle>НАШІ ПАРТНЕРИ</CustomTitle>
      <section className="w-full flex flex-col md:flex-row justify-center items-center gap-4  px-4">
        <div className="w-full md:w-1/2 flex justify-center">
          <a href="https://osushiteli.ua/" target="_blank" rel="noopener noreferrer">
            <img
              src="partner1.png"
              alt="Partner logo 1"
              className="w-full max-w-xl object-contain cursor-pointer"
            />
          </a>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="partner2.png"
            alt="Partner logo 2"
            className="w-full max-w-xl object-contain"
          />
        </div>
      </section>
    </div>

  );
};


