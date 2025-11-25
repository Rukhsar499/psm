"use client";

import Image from "next/image";

export default function CricketSection() {
  return (
    <section className="mb-30">
      <div className="mx-auto max-w-7xl px-4 md:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center mt-16">
          
          <div>
            <Image src="/assets/img/volleyball.png" width={80} height={80} alt="pitch" className="mx-auto" />
            <h4 className="mt-4 text-[26px] font-semibold">Premium Volleyball Courts</h4>
            <p className="text-gray-600 text-sm mt-2">
              Perfectly levelled, clean, and safe courts ensure smooth play.
              </p>
          </div>

          <div>
            <Image src="/assets/img/volleyball-player.png" width={80} height={80} alt="drain" className="mx-auto" />
            <h4 className="mt-4 text-[26px] font-semibold">Ideal for Beginners & Pros</h4>
            <p className="text-gray-600 text-sm mt-2">
            Regardless of your level of performance, our court fits every pace and every dream.
          </p>
          </div>

          <div>
            <Image src="/assets/img/atmospheric-conditions.png" width={80} height={80} alt="lighting" className="mx-auto" />
            <h4 className="mt-4 text-[26px] font-semibold">Weather-Ready Setup</h4>
            <p className="text-gray-600 text-sm mt-2">
             Your playtime remains unaffected even after light rain or sudden weather changes.

</p>
          </div>

          <div>
            <Image src="/assets/img/stadium.png" width={90} height={90} alt="medical" className="mx-auto" />
            <h4 className="mt-4 text-[26px] font-semibold">Bright Floodlit Evenings</h4>
            <p className="text-gray-600 text-sm mt-2">
             Evening matches stay intense, enjoyable, and easy on the eyes.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
