import React from 'react';

const CountryScroller = () => {
  return (
    <div className="flex gap-6">
      <div className="relative flex overflow-hidden w-full no-scrollbar">
        {/* Primera animación - Duplicamos el contenido para un scroll continuo */}
        <div className="items-center flex animate-[right2left_20s_linear_infinite] whitespace-nowrap">
          <Countries />
          <Countries /> {/* Duplicamos para un loop continuo */}
        </div>

        {/* Segunda animación - Duplicamos el contenido para un scroll continuo */}
        <div className="absolute top-0 items-center flex animate-[right2left2_20s_linear_infinite] whitespace-nowrap">
          <Countries />
          <Countries /> {/* Duplicamos para un loop continuo */}
        </div>
      </div>
    </div>
  );
};

const Countries = () => (
  <>
    <Country name="Argentina" />
    <Country name="Spain" />
    <Country name="United States" />
    <Country name="Australia" />
    <Country name="Germany" />
  </>
);

const Country = ({ name }) => (
  <p className="font-gilroy font-black text-[52px] lg:text-[80px] uppercase text-black min-w-max mx-3 leading-none">
    {name}
  </p>
);

export default CountryScroller;
