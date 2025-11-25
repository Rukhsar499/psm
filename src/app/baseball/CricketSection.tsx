"use client";

import Image from "next/image";

export default function CricketSection() {
  return (
    <section className="mb-30">
      <div className="mx-auto max-w-7xl px-4 md:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center mt-16">
          
          <div>
            <Image src="/assets/img/baseball.png" width={80} height={80} alt="pitch" className="mx-auto" />
            <h4 className="mt-4 text-[26px] font-semibold"> Competitive Play Areas</h4>
            <p className="text-gray-600 text-sm mt-2">
             We cater to the needs of the complete beginner, regular player, and serious athlete.</p>
          </div>

          <div>
            <Image src="/assets/img/high-five.png" width={80} height={80} alt="drain" className="mx-auto" />
            <h4 className="mt-4 text-[26px] font-semibold">Friendly Environment</h4>
            <p className="text-gray-600 text-sm mt-2">
          Thoughtful planning ensures that you enjoy your training sessions, even after a light drizzle. 
            </p>
          </div>

          <div>
            <Image src="/assets/img/stadium.png" width={90} height={90} alt="lighting" className="mx-auto" />
            <h4 className="mt-4 text-[26px] font-semibold">Bright Floodlit Evenings</h4>
            <p className="text-gray-600 text-sm mt-2">
             Strong and high-quality lighting makes you feel energetic, focused, and full of spirit.

</p>
          </div>

          <div>
            <Image src="/assets/img/medical-box.png" width={80} height={80} alt="medical" className="mx-auto" />
            <h4 className="mt-4 text-[26px] font-semibold">First Aid Support</h4>
            <p className="text-gray-600 text-sm mt-2">
            Trained staff and essential first-aid facilities are available during operating hours.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
