'use client';
 import Bghost from "./Bghost"
 import Hostarena from "./Hostarena"
 import CricketSection from "./CricketSection";

export default function Host() {
  return (
    <>
     <Bghost/>
     <section className="future mt-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex">
            <div className="w-full lg:w-1/2 h-64">
              <h2 className="text-3xl md:text-[55px] font-semibold">Become an Expert on Our Cricket Field</h2>
            </div>
            <div className="w-full lg:w-1/2 h-64">
              <p className="text-[18px] text-[#656565]">Enter our top-notch cricket turf, which will improve your performance on all fronts. Our top-notch facilities offer the ideal environment for cricket excellence, whether you're training, playing informal matches, or competing in competitions. Discover the real essence of the sport on a pitch designed for winners.
              </p>
            </div>
          </div>
        </div>
      </section>
       <CricketSection/>
     <Hostarena/>
     
    </>
  );
}
