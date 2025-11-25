'use client';

import Image from "next/image";
import React from "react";
import Link from "next/link";


const OrchidArena: React.FC = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 my-24 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2  flex-col gap-6">
            <p className="text-[#0f0f0f] text-sm mb-4 triam font-bold tracking-wide">WELCOME</p>
                <h2 className="text-3xl md:text-[55px] font-semibold mb-4">
                    Come On, Get Started, and You&apos;re All Welcome

                    </h2>
                <p className="text-[18px] text-[#656565]  mb-10">
                   We welcome everyone, whether you are an enthusiastic player, an inquisitive novice, or a helpful supporter. We think that through sports, we can create a community that is welcoming, vibrant, and passionate.


                </p>
               
                 <Link
                href="/booking"
                className="bg-[#5ea500] text-white px-5 py-5 font-semibold hover:bg-lime-600 transition"
              >
                BOOK YOUR EVENT
              </Link>
            </div>
            <div className=" w-full md:w-1/2">
                <Image
                    src="/assets/img/host-football.webp"
                    alt="A soccer arena"
                    width={500}
                    height={300}
                />

            </div>
        </section>
    );
};

export default OrchidArena;
