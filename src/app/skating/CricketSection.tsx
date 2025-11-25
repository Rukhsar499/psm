"use client";

import Image from "next/image";

export default function CricketSection() {
  return (
    <section className="mb-30">
      <div className="mx-auto max-w-7xl px-4 md:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center mt-16">
          
          <div>
            <Image src="/assets/img/cricket2.png" width={80} height={80} alt="pitch" className="mx-auto" />
            <h4 className="mt-4 text-[26px] font-semibold">Beginner & Advanced Skating Zones</h4>
            <p className="text-gray-600 text-sm mt-2">
              Separate spaces for learners and confident skaters, and specialised training for all age groups.


            </p>
          </div>

          <div>
            <Image src="/assets/img/cricket3.png" width={80} height={80} alt="drain" className="mx-auto" />
            <h4 className="mt-4 text-[26px] font-semibold">All-Weather Usage</h4>
            <p className="text-gray-600 text-sm mt-2">
            A well-thought-out environment ensures continuous practice, regardless of the weather conditions.

              </p>
          </div>

          <div>
            <Image src="/assets/img/cricket4.png" width={80} height={80} alt="lighting" className="mx-auto" />
            <h4 className="mt-4 text-[26px] font-semibold">Bright, Stadium-like Lighting</h4>
            <p className="text-gray-600 text-sm mt-2">
             Enjoy evening sessions with the same energy and excitement as a daytime skate.
</p>
          </div>

          <div>
            <Image src="/assets/img/cricket5.png" width={80} height={80} alt="medical" className="mx-auto" />
            <h4 className="mt-4 text-[26px] font-semibold">On-Site Medical & First-Aid</h4>
            <p className="text-gray-600 text-sm mt-2">
             Qualified staff and first-aid kits remain available during operational hours to reassure every skater.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
