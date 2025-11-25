"use client";

import Image from "next/image";

export default function CricketSection() {
  return (
    <section className="mb-30">
      <div className="mx-auto max-w-7xl px-4 md:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center mt-16">
          
          <div>
            <Image src="/assets/img/shoot.png" width={80} height={80} alt="pitch" className="mx-auto" />
            <h4 className="mt-4 text-[26px] font-semibold">Full-Sized & 5-a-Side Pitches</h4>
            <p className="text-gray-600 text-sm mt-2">
              Choices for regular games or short games with loved ones.


            </p>
          </div>

          <div>
            <Image src="/assets/img/drainage-systems.png" width={80} height={80} alt="drain" className="mx-auto" />
            <h4 className="mt-4 text-[26px] font-semibold">Proper Drainage System</h4>
            <p className="text-gray-600 text-sm mt-2">
            With an effective water discharge design, you can continue to play even after it rains.

              </p>
          </div>

          <div>
            <Image src="/assets/img/stadium.png" width={90} height={90} alt="lighting" className="mx-auto" />
            <h4 className="mt-4 text-[26px] font-semibold">Stadium-Style Lighting</h4>
            <p className="text-gray-600 text-sm mt-2">
              With bright, consistent lighting, enjoy games well into the evening.</p>
          </div>

          <div>
            <Image src="/assets/img/first-aid-kit.png" width={80} height={80} alt="medical" className="mx-auto" />
            <h4 className="mt-4 text-[26px] font-semibold">On-Site Medical & First Aid </h4>
            <p className="text-gray-600 text-sm mt-2">
             Health comes first, with kits and qualified staff on hand during business hours.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
