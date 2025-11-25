import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "PSM Volleyball – Jump Higher, Play Better, Feel Alive",
  description: "Find joy in every serve, spike, and rally on our clean, safe volleyball courts built for players of all ages and skill levels.",
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
