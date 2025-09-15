import React from 'react';


export const Map = () => {

  return (

    <main className="bg-white">
      <section className="w-full  px-4">
        <div className="flex justify-center">
          <iframe
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2531.7455888829886!2d26.280695715737266!3d50.61326477949818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f13667b3cc32f%3A0xa59b8a9c0dc80461!2z0YPQuy4g0JrQuNC10LLRgdC60LDRjywgNDIsINCg0L7QstC90L4sINCg0L7QstC10L3RgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgMzMwMDA!5e0!3m2!1sru!2sua!4v1636547698196!5m2!1sru!2sua"
            width="100%"
            height="450"
            className="border-0 max-w-full"
          >
          </iframe>
        </div>
      </section>
    </main>
  );
};


