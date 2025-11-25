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
              <h2 className="text-3xl md:text-[55px] font-semibold">Where Every Serve Begins a New Journey</h2>
            </div>
            <div className="w-full lg:w-1/2 h-64">
              <p className="text-[18px] text-[#656565]">At PSM Turf, volleyball is more than a sport—it’s the heartbeat of teamwork, unity, and pure joy. Whether you&apos;re stepping onto the court for the first time or you&apos;ve been playing for years, our space invites you to jump, dive, and discover the thrill of every point. We make sure each match feels exciting, energetic, and unforgettable.

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
