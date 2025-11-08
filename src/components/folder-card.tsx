import React from 'react';

const Card = () => {
  return (
    <section className="relative group w-full h-full block">
      <div className="file relative w-full h-full cursor-pointer origin-bottom [perspective:1500px] z-50">
        <div className="work-5 bg-[#659BB9] w-full h-full origin-top rounded-2xl rounded-tl-none group-hover:shadow-[0_20px_40px_rgba(0,0,0,.2)] transition-all ease duration-300 relative after:absolute after:content-[''] after:bottom-[99%] after:left-0 after:w-20 after:h-4 after:bg-[#659BB9] after:rounded-t-2xl after:pointer-events-none before:absolute before:content-[''] before:-top-[15px] before:left-[75.5px] before:w-4 before:h-4 before:bg-[#659BB9] before:[clip-path:polygon(0_35%,0%_100%,50%_100%);] before:pointer-events-none" />
        <div className="work-4 absolute inset-1 bg-zinc-400 rounded-2xl transition-all ease duration-300 origin-bottom select-none group-hover:[transform:rotateX(-20deg)]" />
        <div className="work-3 absolute inset-1 bg-zinc-300 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-30deg)]" />
        <div className="work-2 absolute inset-1 bg-zinc-200 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-38deg)]" />
        <div className="work-1 absolute bottom-0 bg-[#659BB9] w-full h-[125px] rounded-2xl rounded-tr-none after:absolute after:content-[''] after:bottom-[99%] after:right-0 after:w-[116px] after:h-[16px] after:bg-[#659BB9] after:rounded-t-2xl after:pointer-events-none before:absolute before:content-[''] before:-top-[10px] before:right-[112px] before:size-3 before:bg-[#659BB9] before:[clip-path:polygon(100%_14%,50%_100%,100%_100%);] before:pointer-events-none transition-all ease duration-300 origin-bottom flex items-end group-hover:shadow-[inset_0_20px_40px_#4f7e98] group-hover:[transform:rotateX(-46deg)_translateY(1px)]" />
      </div>
    </section>
  );
}

export default Card;
