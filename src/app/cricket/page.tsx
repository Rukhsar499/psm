'use client';
 import Bghost from "./Bghost"
 import Hostarena from "./Hostarena"
 import CricketSection from "./CricketSection";
 import PerfectPitchSection from "./PerfectPitchSection";

export default function Host() {
  return (
    <>
     <Bghost/>
     <section className="future md:mt-20 mt-10">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 mb-5">
              <h2 className="text-3xl md:text-[55px] font-semibold">Become an Expert on Our Cricket Field</h2>
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-[18px] text-[#656565]">Enter our top-notch cricket turf, which will improve your performance on all fronts. Our top-notch facilities offer the ideal environment for cricket excellence, whether you&aop;re training, playing informal matches, or competing in competitions. Discover the real essence of the sport on a pitch designed for winners.
              </p>
            </div>
          </div>
        </div>
      </section>
      
       <CricketSection/>
       <PerfectPitchSection/>
     <Hostarena/>
     
    </>
  );
}
