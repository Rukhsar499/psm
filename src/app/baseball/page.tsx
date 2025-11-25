'use client';
import Bghost from "./Bghost"
import Hostarena from "./Hostarena"
import CricketSection from "./CricketSection";
import PerfectPitchSection from "./PerfectPitchSection";

export default function Host() {
  return (
    <>
      <Bghost />
      <section className="future mt-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex">
            <div className="w-full lg:w-1/2 h-64">
              <h2 className="text-3xl md:text-[55px] font-semibold">Where Balance Meets Freedom</h2>
            </div>
            <div className="w-full lg:w-1/2 h-64">
              <p className="text-[18px] text-[#656565]">Skateboarding and life go hand in hand at PSM. We provide an environment where aspiring skateboarders can learn to skate and make friends while improving their skills. From learning new tricks to training for competitions, we have created an environment where every skater can excel. Whether you&aop;re starting, intermediate or advanced, we can accommodate all your needs in a fun and safe environment.
            </p>
            </div>
          </div>
        </div>
      </section>

      <CricketSection />
      <PerfectPitchSection />
      <Hostarena />

    </>
  );
}
