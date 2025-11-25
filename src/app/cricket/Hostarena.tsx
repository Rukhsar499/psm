'use client';
import Image from "next/image";
import React from "react";


const OrchidArena: React.FC = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 my-24 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2  flex-col gap-6">
            <p className="text-[#0f0f0f] text-sm mb-4 triam font-bold">TRAIN LIKE AN EXPERT</p>
                <h2 className="text-3xl md:text-[55px] font-semibold mb-4">
                    Programs for Coaching <br />and Training
                    </h2>
                <p className="text-[18px] text-[#656565]">
                    Players of all ages and ability levels can enhance their technique and game strategy with the help of our professional coaching programs. Personalised training sessions will improve your performance on the pitch, regardless of your skill level.

                </p>
               
                <button
                    type="submit"
                    className="font-['DM_Sans'] flex items-center mt-4 justify-center gap-2 px-10 py-3 bg-[#2eac6d] text-white font-semibold  hover:bg-green-700 transition w-fit"
                >
                    <span>Book Your Event</span>
                </button>
            </div>
            <div className=" w-full md:w-1/2">
                <Image
                    src="/assets/img/host-arena.jpg"
                    alt="A soccer arena"
                    width={500}
                    height={300}
                />

            </div>
        </section>
    );
};

export default OrchidArena;
