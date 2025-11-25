"use client";

import Image from "next/image";
import Link from "next/link";

export default function PerfectPitchSection() {
    return (
        <section className="w-full bg-[#F4F8F9] py-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">

                {/* Left Image */}
                <div className="relative w-full h-[600px]">
                    <Image
                        src="/assets/img/base-img.webp" // change your image path here
                        alt="Cricket Player"
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>

                {/* Right Content */}
                <div className="flex flex-col gap-6">
                    <p className="text-sm tracking-wider font-semibold text-gray-500">
                        YOUR PASSION, OUR HOME GROUND
                    </p>

                    <h2 className="text-4xl md:text-5xl font-black text-black leading-tight">
                        Discover with us the Heart of Baseball


                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed">
                        Baseball builds a lot more than physical strength: it instils patience, quickens reflexes, and enables teamwork. It teaches focus, discipline, and respect. Every throw, every slide, every steady breath at the plate helps players develop into people, on the diamond and beyond.


                    </p>

                    {/* Features List */}
                    <div className="flex flex-col gap-4 mt-4">
                        <div className="border-b pb-3 flex gap-4 text-xl font-semibold">
                            <span className="text-gray-400">01.</span>  Expert Training Support

                        </div>
                        <div className="border-b pb-3 flex gap-4 text-xl font-semibold">
                            <span className="text-gray-400">02.</span>Perfect for All Age Groups


                        </div>
                        <div className="border-b pb-3 flex gap-4 text-xl font-semibold">
                            <span className="text-gray-400">03.</span>  Ideal Venue for Matches & Events


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
