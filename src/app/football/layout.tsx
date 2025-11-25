import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "PSM Football – Your Space to Play, Grow & Feel the Game",
  description: "Enjoy energetic football matches on safe, well-lit fields. Play, practice, and feel the spirit of the sport with every pass and every goal.",
};


export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
          {children}
        </>
    )
}
