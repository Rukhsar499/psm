'use client';
 import Bghost from "../components/Bghost"
 import Hostarena from "./Hostarena"
 import CricketSection from "./CricketSection";
 import PerfectPitchSection from "./PerfectPitchSection";

export default function Host() {
  return (
    <>
     <Bghost/>
    
     <section className="future mt-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex">
            <div className="w-full lg:w-1/2 h-64">
              <h2 className="text-3xl md:text-[55px] font-semibold">Two Turfs, Nonstop Football Action
</h2>
            </div>
            <div className="w-full lg:w-1/2 h-64">
              <p className="text-[18px] text-[#656565]">The 5-a-side and 7-a-side premium football turfs at PSM Turf Kolkata are made for intense, fast-paced games. Our top-notch floodlights and grounds guarantee the ideal environment for practice, friendly games or competitive leagues. Our turf offers an unparalleled football experience, whether you&apos;re playing alone or with a team.


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
