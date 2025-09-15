import React from 'react';

export const CustomTitle = ({ children }: any) => {
  return (
    <div className="flex justify-center w-full my-8">
      <h1 className="text-center font-serif uppercase tracking-[0.06em] leading-none text-[#133553] text-[42px] md:text-[56px] lg:text-[64px]">
        {children}
      </h1>
    </div>
  );
};
