'use client';

import Image from "next/image";
import React from "react";
import Link from "next/link";


const OrchidArena: React.FC = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 md:my-24 my-10 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2  flex-col gap-6 order-2 md:order-1">
            <p className="text-[#0f0f0f] text-sm mb-4 triam font-bold tracking-wide">WELCOME </p>
                <h2 className="text-3xl md:text-[55px] font-semibold mb-4">
                    Step In, Suit Up, and <br /> Let the Game Begin
                    </h2>
                <p className="text-[18px] text-[#656565]  mb-10">
                   Whether you&aop;re a curious beginner, a dedicated athlete, a supportive parent, or a team leader looking for the right field, this is the place for everyone. At PSM Services, we believe in building a community connected by passion, respect, and joy for the sport.


                </p>
               
                 <Link
                href="/booking"
                className="bg-[#5ea500] text-white px-5 py-5 font-semibold hover:bg-lime-600 transition"
              >
                BOOK YOUR EVENT
              </Link>
            </div>
            <div className=" w-full md:w-1/2 order-1 md:order-2">
                <Image
                    src="/assets/img/host-base-img.webp"
                    alt="A soccer arena"
                    width={500}
                    height={300}
                />

            </div>
        </section>
    );
};

export default OrchidArena;
