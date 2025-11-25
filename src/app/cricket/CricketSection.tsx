"use client";

import Image from "next/image";

export default function CricketSection() {
  return (
    <section className="">
      <div className="mx-auto max-w-7xl px-4 md:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center mt-16">
          
          <div>
            <Image src="/assets/img/cricket2.png" width={80} height={80} alt="pitch" className="mx-auto" />
            <h4 className="mt-4 text-[26px] font-semibold">All-Format Prepared</h4>
            <p className="text-gray-600 text-sm mt-2">
              T20, One-Day, and Test-style formats with appropriate field dimensions are supported.

            </p>
          </div>

          <div>
            <Image src="/assets/img/cricket3.png" width={80} height={80} alt="drain" className="mx-auto" />
            <h4 className="mt-4 text-[26px] font-semibold">Pavilion with Chairs</h4>
            <p className="text-gray-600 text-sm mt-2">
             Seating and covered rest facilities for both players and spectators.
              </p>
          </div>

          <div>
            <Image src="/assets/img/cricket4.png" width={80} height={80} alt="lighting" className="mx-auto" />
            <h4 className="mt-4 text-[26px] font-semibold">LED Floodlights</h4>
            <p className="text-gray-600 text-sm mt-2">
              Enjoy consistent, shadow-free stadium lighting during day-night games.</p>
          </div>

          <div>
            <Image src="/assets/img/cricket5.png" width={80} height={80} alt="medical" className="mx-auto" />
            <h4 className="mt-4 text-[26px] font-semibold">Available Practice Nets</h4>
            <p className="text-gray-600 text-sm mt-2">
             Specific practice nets for targeted training exercises and warm-up sessions.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
