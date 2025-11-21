"use client";
import Image from "next/image";

import { motion } from "framer-motion";

const facilities = [
    {
        title: "CRICKET",
        desc: "Ideal grounds for competitions and friendly games.",
        icon: (
            <Image
                src="/assets/img/cricket1.png"
                alt="Cricket"
                className="transition duration-300 group-hover:brightness-0"
                width={50}
                height={50}
            />
        ),
    },
    {
        title: "FOOTBALL",
        desc: "Turf grounds are prepared for every kind of game, day or night.",
        icon: (
            <Image
                src="/assets/img/football.png"
                alt="Cricket"
                className="transition duration-300 group-hover:brightness-0"
                width={50}
                height={50}
            />
        ),
    },
    {
        title: "BASEBALL",
        desc: "The courts are set aside for both recreational and competitive play.",
        icon: (
            <Image
                src="/assets/img/training-gear.png"
                alt="Cricket"
                className="transition duration-300 group-hover:brightness-0"
                width={50}
                height={50}
            />
        ),
    },
    {
        title: "VOLLEYBALL",
        desc: "Organise group activities, sports days, and team games. ",
        icon: (
            <Image
                src="/assets/img/volley.png"
                alt="Cricket"
                className="transition duration-300 group-hover:brightness-0"
                width={50}
                height={50}
            />
        ),
    },
    {
        title: "SKATING",
        desc: "Plan team games, sports days, and group activities.",
        icon: (
            <Image
                src="/assets/img/skateboard.png"
                alt="Cricket"
                className="transition duration-300 group-hover:brightness-0"
                width={50}
                height={50}
            />
        ),
    },
];

export default function Facilities() {
    return (
        <section className="bg-[#F3F8F9] md:py-30 py-8 md:px-20 px-3">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
                {facilities.map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="group flex flex-col text-center cursor-pointer"
                    >
                        <div className="text-green-600 flex justify-center">{item.icon}</div>
                        <h3 className="mt-4 text-[22px] font-semibold">{item.title}</h3>
                        <p className="text-gray-600 mt-2 text-[16px]">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
