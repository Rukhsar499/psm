'use client';
import Bghost from "./Bghost"
import Hostarena from "./Hostarena"
import CricketSection from "./CricketSection";
import PerfectPitchSection from "./PerfectPitchSection";

export default function Host() {
  return (
    <>
      <Bghost />
      <section className="future md:mt-20 mt-10">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-[55px] font-semibold mb-5">Every Swing tells a New Story</h2>
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-[18px] text-[#656565]">At PSM Turf, baseball is not just a sport; it is about a moment in time when discipline, passion, and teamwork come into play. The baseball grounds are well-maintained for players of all age groups to come and learn, practice, compete, and fall in love with the game. Our field gives you the perfect space to grow.

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
