"use client";

import Image from "next/image";
import Link from "next/link";

export default function PerfectPitchSection() {
    return (
        <section className="w-full bg-[#F4F8F9] py-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center px-6">

                {/* Left Image */}
                <div className="relative w-full h-[600px]">
                    <Image
                        src="/assets/img/skating-img.webp" // change your image path here
                        alt="Cricket Player"
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>

                {/* Right Content */}
                <div className="flex flex-col gap-6">
                    <p className="text-sm tracking-wider font-semibold text-gray-500">
                        YOUR SKILL, OUR SPACE

                    </p>

                    <h2 className="text-4xl md:text-5xl font-black text-black leading-tight">
                       Discover the True Joy of Skating with Us


                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed">
                        Skating teaches so much more than just coordination; it builds confidence, sharpens focus, and strengthens the body from head to toe. It instils discipline, ups stamina, and fills the mind with pure happiness. At PSM, we believe every glide pushes you ahead on the rink and in life.

                    </p>

                    {/* Features List */}
                    <div className="flex flex-col gap-4 mt-4">
                        <div className="border-b pb-3 flex gap-4 text-xl font-semibold">
                            <span className="text-gray-400">01.</span>  World-Class Skating Guidance

                        </div>
                        <div className="border-b pb-3 flex gap-4 text-xl font-semibold">
                            <span className="text-gray-400">02.</span> Skill Development Across All Ages


                        </div>
                        <div className="border-b pb-3 flex gap-4 text-xl font-semibold">
                            <span className="text-gray-400">03.</span>  Perfect Venue for Events & Competitions

                        </div>
                    </div>

                    {/* Button */}
                    <Link
                        href="/booking"
                        className="mt-4 w-fit bg-lime-600 text-white px-8 py-3 text-lg font-semibold hover:bg-lime-700 transition"
                    >
                        BOOK NOW
                    </Link>
                </div>
            </div>
        </section>
    );
}
